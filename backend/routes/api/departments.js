/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Department, Product, ProductImage, Review, SeedReview } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// Get all departments
router.get('/', async(req, res) => {

    let error = {};

    try {
        let getAllDepartments = await Department.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            raw: true,
        })

        let spotlightDept = getAllDepartments.pop()
        getAllDepartments.unshift(spotlightDept)

        return res
            .status(200)
            .json({
                "Departments": getAllDepartments
            })

    } catch (err) {
        error.error = err;
        return res.json(error);
    };
});

// Get all products by department
router.get('/:departmentId/products', async(req, res) => {

    let currDeptId = req.params.departmentId;
        // let { currDeptId } = req.params.departmentId;
        // let currDeptId = paresInt(req.params.departmentId);
    let error = {};

    try {
        let findDept = await Department.findByPk(currDeptId)

        // handle error: missing department
        if (!findDept) {
            error.message = "Department couldn't be found";
            error.statusCode = 404;
            return res.status(404).json(error);

        } else {
            let findAllDepartmentProducts = await Product.findAll({
                where: { departmentId: currDeptId},
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                raw: true,
            })

            // modify keys
            for (let i = 0; i < findAllDepartmentProducts.length; i++) {
                let product = findAllDepartmentProducts[i];
                let prevImage = await ProductImage.findOne({
                    where: { productId: product.id },
                    raw: true
                });

                // add previewImage-key to every product
                let prevUrl = prevImage.url;
                product.previewImage = prevUrl

                // add numReviews-key
                let userReviewCount = await Review.count({
                    where: { productId: product.id},
                    raw: true,
                });

                let seedReviewCount = await SeedReview.count({
                    where: { productId: product.id},
                    raw: true,
                });

                let reviewCount = userReviewCount + seedReviewCount

                reviewCount ? product.numReviews = reviewCount : product.numReviews = 0 // key into "dataValues" before numReviews?

                // add avgRating-key
                let userRatingsSum = await Review.sum('rating', {
                    where: { productId: product.id},
                    raw: true,
                });

                let seedRatingsSum = await SeedReview.sum('rating', {
                    where: { productId: product.id},
                    raw: true,
                });

                let ratingsSum = userRatingsSum + seedRatingsSum

                let ratingAvg = ratingsSum / reviewCount;

                ratingAvg ? product.avgRating = ratingAvg : product.avgRating = 0.0

                // delete impertinent information
                delete product.departmentId
            }

            return res
                .status(200)
                .json({
                    "id": findDept.id,
                    "name": findDept.name,
                    "Products": findAllDepartmentProducts
                })
        }

    } catch (err) {
        error.error = err;
        return res.json(error);
    };
})


/***************************** ERROR HANDLER *****************************/
router.use((err, req, res, next) => {
    return res.json(err)
})


/******************************** EXPORTS ********************************/
module.exports = router;
