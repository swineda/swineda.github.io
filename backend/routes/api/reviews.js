/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Order, OrderDetail, Product, ProductImage, Review, User } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router(); 


/******************************** ROUTES *********************************/
// Get all reviews by current user
router.get('/current', requireAuth, async(req, res) => {

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let error = {};

    try {
        let getCurrentUserReviews = await Review.findAll({ // returns array of review-objects
            where: { userId: currentUserId },
            order: [['id', 'DESC']],
            raw: true,
        });

        for (let i = 0; i < getCurrentUserReviews.length; i++) {
            let review = getCurrentUserReviews[i];

            // add Product-key
            let productData = await Product.findByPk(review.productId, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true
            });
            review.Product = productData;

            // add previewImage-key to every product
            let prevImage = await ProductImage.findOne({
                where: { productId: review.Product.id },
                raw: true
            });
            let prevUrl = prevImage.url;
            review.Product.previewImage = prevUrl


        }

        return res
            .status(200)
            .json({
                Reviews: getCurrentUserReviews
            })


    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})

// Edit a review
router.put('/:reviewId', requireAuth, async (req, res) => {

    let reviewId = req.params.reviewId;
    let error = {};

    try {
        let putReview = await Review.findByPk(reviewId);

        // handle error: missing review
        if (!putReview) {
            error.message = "Review couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);
        }

        // update review
        let { rating, title, description } = req.body;
        if (rating) putReview.set({ rating: rating });
        if (title) await putReview.update({ title: title });
        if (description) await putReview.update({ description: description });
        await putReview.save();

        // add Product-key
        let findProduct = await Product.findByPk(putReview.productId, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        });
        putReview.Product = findProduct

        // add ProductImages-key
        let image = await ProductImage.findOne({
            where: { productId: putReview.productId },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        })
        putReview.Product.previewImage = image

        return res
            .status(200)
            .json(putReview)

    } catch (err) {
        error.error = err
        return res.json(error);
    }
});

// Delete a review
router.delete('/:reviewId', requireAuth, async (req, res) => {

    let reviewId = req.params.reviewId;
    let error = {};

    try {
        let deleteReview = await Review.findByPk(reviewId);

        // handle error: missing review
        if (!deleteReview) {
            error.message = "Review couldn't be found";
            error.status = 404;
            return res.status(404).json(error);
        }

        // delete record
        deleteReview.destroy();
        deleteReview.save();

        return res
            .status(200)
            .json({
                "message": "Successfully deleted",
                "statusCode": 200
            })

    } catch (err) {
        error.error = err
        return res.json(error);
    }
});


/***************************** ERROR HANDLER *****************************/
router.use((err, req, res, next) => {
    return res.json(err)
})


/******************************** EXPORTS ********************************/
module.exports = router;
