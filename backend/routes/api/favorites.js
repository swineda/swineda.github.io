/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Favorite, Product, ProductImage, Review, SeedReview } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// Get all favorite items by current user
router.get('/', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let error = {};


    try {

        let getAllFavorites = await Favorite.findAll({
            where: { userId: currentUserId },
            attributes: {
                include: ['id'],
                exclude: ['createdAt', 'updatedAt']
            },
            raw: true,

            // returns:
                // id (favoriteID) - use this PK to delete
                // userId
                // productId
        })

        // add product details to every product in array
        for (let j = 0; j < getAllFavorites.length; j++) {
            let product = getAllFavorites[j];

            let productDetails = await Product.findByPk(product.productId, {
                // attributes: {
                //     exclude: ['createdAt', 'updatedAt']
                // },
                raw: true,
            });

            // modify existing keys
            product.favoriteId = product.id // change key's name to be more descriptive
            delete product.id

            // add keys
            let { departmentId, name, brand, price, description } = productDetails;
            product.departmentId = departmentId
            product.name = name
            product.brand = brand
            product.price = price
            product.description = description

            // add previewImage-key to every product
            let prevImage = await ProductImage.findOne({
                where: { productId: product.productId },
                raw: true
            });
            let prevUrl = prevImage.url;
            product.previewImage = prevUrl

            // add numReviews-key
            let userReviewCount = await Review.count({
                where: { productId: product.productId},
                raw: true,
            });

            let seedReviewCount = await SeedReview.count({
                where: { productId: product.productId},
                raw: true,
            });

            let reviewCount = userReviewCount + seedReviewCount

            reviewCount ? product.numReviews = reviewCount : product.numReviews = 0 // key into "dataValues" before numReviews?

            // add avgRating-key
            let userRatingsSum = await Review.sum('rating', {
                where: { productId: product.productId},
                raw: true,
            });

            let seedRatingsSum = await SeedReview.sum('rating', {
                where: { productId: product.productId},
                raw: true,
            });

            let ratingsSum = userRatingsSum + seedRatingsSum

            let ratingAvg = ratingsSum / reviewCount;

            ratingAvg ? product.avgRating = ratingAvg : product.avgRating = 0.0

        }

        return res
        .status(200)
        .json({
            "userId": parseInt(currentUserId),
            "Products": getAllFavorites
        })


    } catch (err) {
        error.error = err
        return res.json(error)
    };
});

// Add item to Favorites
router.post('/', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = parseInt(req.user.id);
    let error = {};

    try {
        let { productId } = req.body;
        productId = parseInt(productId)

        // handle error: missing fields
        const validationErrorMessages = []
        if (!productId) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Product ID is required.")
        }
        if (error.message) {
            error.errors = validationErrorMessages;
            return res.status(400).json(error);
        }

        let findProduct = await Product.findByPk(productId, {
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            raw: true,
        });

        // handle error: missing product
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        // handle error: product is already a favorite
        let isFavorite = await Favorite.findOne({
            where: {
                userId: currentUserId,
                productId: productId
            },
            raw: true,
        })

        if (isFavorite) {
            error.message = "Product is already a favorite";
            error.statusCode = 400;
            return res.status(400).json(error);
        }

        // instantiate favorite-object
        let postFavoriteProduct = await Favorite.create(
            { userId: currentUserId, productId: productId },
        );
        postFavoriteProduct.save();

        // add previewImage-key
        let prevImage = await ProductImage.findOne({
            where: { productId: findProduct.id },
            raw: true
        });
        let prevUrl = prevImage.url;
        findProduct.previewImage = prevUrl

        return res
            .status(200)
            .json(findProduct)


    } catch (err) {
        error.error = err
        return res.status(404).json(error)
    };
});

// Remove item from favorites
router.delete('/:favoriteId', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = parseInt(req.user.id);
    let favoriteId = req.params.favoriteId
    favoriteId = parseInt(favoriteId)

    let error = {};

    try {
        let deleteProduct = await Favorite.findOne({
            where: {
                userId: currentUserId,
                id: favoriteId
            },
            raw: true,
        })

        // handle error: missing product
        if (!deleteProduct) {
            error.message = "Product couldn't be found";
            error.status = 404;
            return res.status(404).json(error);
        }

        // delete record
        Favorite.destroy({
            where: {
                id: favoriteId, // use params, not deleteProduct.id
            },
        })

        return res
            .status(200)
            .json({
                "message": "Successfully deleted",
                "statusCode": 200
            })

    } catch (err) {
        error.error = err
        return res.json(error)
    };
});


/***************************** ERROR HANDLER *****************************/
// router.use((err, req, res, next) => {
//     return res.json(err)
// })


/******************************** EXPORTS ********************************/
module.exports = router;
