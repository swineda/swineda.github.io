/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Department, Product, ProductImage, Review, SeedReview, User } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();

const validateReview = [
    check('title')
        // .exists({ checkFalsy: true })
        .isLength({ min: 5 })
        .withMessage("Please write a longer review."),
    check('title')
        // .exists({ checkFalsy: true })
        .isLength({ max: 500 })
        .withMessage("Please write a shorter review."),
    check('description')
        // .exists({ checkFalsy: true })
        .isLength({ min: 5 })
        .withMessage("Please write a longer review."),
    check('description')
        // .exists({ checkFalsy: true })
        .isLength({ max: 500 })
        .withMessage("Please write a shorter review."),
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage("Rating must be an integer from 1 to 5."),
    handleValidationErrors
]


/******************************** ROUTES *********************************/
// Get all reviews by Product
router.get('/:productId/reviews', async(req, res) => {

    let currProdId = req.params.productId;
    let error = {};

    try {
        // handle error: missing product
        let findProduct = await Product.findByPk(currProdId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        });
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        // query database
        let findAllProductReviews = await Review.findAll({
            where: { productId: currProdId },
            order: [['id', 'DESC']],
            raw: true,
        })

        let findAllSeedReviews = await SeedReview.findAll({
            where: { productId: currProdId },
            order: [['id', 'DESC']],
            raw: true,
        })

        let findAllReviews = findAllProductReviews.concat(findAllSeedReviews)


        // add User-key
        for (let i = 0; i < findAllReviews.length; i++) {
            let review = findAllReviews[i];
            let userData = await User.findByPk(review.userId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            });
            review.User = userData;
        }


        return res
            .status(200)
            .json({
                "Reviews": findAllReviews
            })


    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})


// Create a review for a Product
router.post('/:productId/reviews', requireAuth, async(req, res) => {
    // add validateReview ^

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let currProdId = req.params.productId;
    let error = {};

    try {
        let { rating, title, description } = req.body;

        // handle error: missing product
        let findProduct = await Product.findByPk(currProdId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        });
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);

        }

        // handle error: missing fields
        const validationErrorMessages = []
        if (!rating) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Please provide a rating.")
        }
        if (!title) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Please write a longer title.")
        }
        if (!description) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Please write a longer description.")
        }
        if (error.message) {
            error.errors = validationErrorMessages;
            return res.status(400).json(error)
        }

        // handle error: review exits
        let userReviewExists = await Review.findAll({ // returns array of review for req. product
            where: { userId: currentUserId, productId: currProdId }
        });
        let seedReviewExists = await SeedReview.findAll({ // returns array of review for req. product
            where: { userId: currentUserId, productId: currProdId }
        });

        let reviewExists = userReviewExists.concat(seedReviewExists)

        if (reviewExists.length > 0) {
            error.message = "Validation Error";
            error.statusCode = 403;
            validationErrorMessages.push("User already has a review for this product");
            error.errors = validationErrorMessages;
            return res.status(403).json(error)
        }

        // instantiate review
        let postReview = await currentUser.createReview({
            productId: parseInt(currProdId),
            userId: currentUserId,
            rating: rating,
            title: title,
            description: description,
        })
        postReview.save();

        let printReview = await Review.findByPk(postReview.id, {
            raw: true,
        })

        // add User-key
        // let userData = await User.findByPk(currentUserId, {
        //     attributes: {
        //         exclude: ['email', 'hashedPassword', 'createdAt', 'updatedAt']
        //     },
        //     raw: true,
        // });
        // printReview.User = userData;

        // add Product-key
        printReview.Product = findProduct;

        // add ProductImages-key
        let image = await ProductImage.findOne({
            where: { productId: currProdId },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        })
        printReview.Product.previewImage = image

        return res
            .status(201)
            .json(printReview)

    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})


// Get single product details
router.post('/search', async(req, res, next) => {

    console.log("reach from router")
    let error = {};

    try {

        let query = {
            where: {},
            include: [],
            raw: true
        }

        /**************************** add filter ****************************/
        // parse req data
        let { term } = req.body;

        // custom query filter
        // location - search: address, city, state, country
        // if (location) query.where.address = { [Op.substring]: location };
        if (term) query.where.name = { [Op.substring]: term };

        /****************************** query *******************************/
        let searchProducts = await Product.findAll(query);

        for (let i = 0; i < searchProducts.length; i++ ) {

            let currProduct = searchProducts[i];

            // add numReviews-key
            let userReviewCount = await Review.count({
                where: { productId: currProduct.id},
                raw: true,
            });

            let seedReviewCount = await SeedReview.count({
                where: { productId: currProduct.id},
                raw: true,
            });

            let reviewCount = userReviewCount + seedReviewCount

            reviewCount ? currProduct.numReviews = reviewCount : currProduct.numReviews = 0 // key into "dataValues" before numReviews?

            // add avgRating-key
            let userRatingsSum = await Review.sum('rating', {
                where: { productId: currProduct.id},
                raw: true,
            });

            let seedRatingsSum = await SeedReview.sum('rating', {
                where: { productId: currProduct.id},
                raw: true,
            });

            let ratingsSum = userRatingsSum + seedRatingsSum

            let ratingAvg = ratingsSum / reviewCount;

            ratingAvg ? currProduct.avgRating = ratingAvg : currProduct.avgRating = 0.0

            // add ProductImages-key
            let images = await ProductImage.findAll({
                where: { productId: currProduct.id},
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            })
            currProduct.previewImage = images[0].url
        }

        console.log("searchProducts", searchProducts)

        return res
            .status(200)
            .json({
                "Products": searchProducts,
                "Term": term
            })


    } catch (err) {
        error.error = err;
        return res.json(error);
    };
});

// Get single product details
router.get('/:productId', async(req, res) => {

    let currProdId = req.params.productId;
    let error = {};

    try {
        // handle error: missing product
        let findProduct = await Product.findByPk(currProdId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        });
        if (!findProduct) {
            error.message = "Product couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);


        } else {
            // add numReviews-key
            let userReviewCount = await Review.count({
                where: { productId: currProdId},
                raw: true,
            });

            let seedReviewCount = await SeedReview.count({
                where: { productId: currProdId},
                raw: true,
            });

            let reviewCount = userReviewCount + seedReviewCount

            reviewCount ? findProduct.numReviews = reviewCount : findProduct.numReviews = 0 // key into "dataValues" before numReviews?

            // add avgRating-key
            let userRatingsSum = await Review.sum('rating', {
                where: { productId: currProdId},
                raw: true,
            });

            let seedRatingsSum = await SeedReview.sum('rating', {
                where: { productId: currProdId},
                raw: true,
            });

            let ratingsSum = userRatingsSum + seedRatingsSum

            let ratingAvg = ratingsSum / reviewCount;

            ratingAvg ? findProduct.avgRating = ratingAvg : findProduct.avgRating = 0.0

            // add Department-key
            let deptData = await Department.findByPk(findProduct.departmentId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            })
            findProduct.Department = deptData
            delete findProduct.departmentId

            // add ProductImages-key
            let images = await ProductImage.findAll({
                where: { productId: currProdId },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            })
            findProduct.ProductImages = images

            return res
                .status(200)
                .json(findProduct)
        }

    } catch (err) {
        error.error = err;
        return res.json(error);
    };
});



/***************************** ERROR HANDLER *****************************/
router.use((err, req, res, next) => {
    return res.json(err)
})


/******************************** EXPORTS ********************************/
module.exports = router;
