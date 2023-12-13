/******************************** IMPORTS ********************************/
// libraries
const express = require('express');
const { Op } = require('sequelize');
const { check } = require('express-validator');
// local files
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Cart, Order, OrderDetail, Product, ProductImage } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();


/******************************** ROUTES *********************************/
// Get all orders by current user
router.get('/', requireAuth, async(req, res) => {
    // ^ remember to add pass requireAuth and remove wildcard ^
    // let currentUserId = req.params.userId;

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let error = {};

    try {
        let getAllOrders = await Order.findAll({
            where: {userId: currentUserId},
            attributes: {
                exclude: ['updatedAt']
            },
            raw: true
        })

        // handle error: missing order
        // if (!getAllOrders.length) {
        //     error.message = "Order couldn't be found";
        //     error.statusCode = 404;
        //     return res.status(404).json(error);
        // }

        // add Products-key to every order
        for (let i = 0; i < getAllOrders.length; i++) {
            let order = getAllOrders[i];

            // modify outer keys
            order.total = (order.total).toFixed(2)

            let productsPurchased = await OrderDetail.findAll({
                where: { orderId: order.id },
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                raw: true,
            })

            // add product details to every product in array
            for (let j = 0; j < productsPurchased.length; j++) {
                let product = productsPurchased[j];

                // modify keys
                product.id = product.productId;
                delete product.productId;
                delete product.orderId;

                let productDetails = await Product.findByPk(product.id, {
                    // attributes: {
                    //     exclude: ['createdAt', 'updatedAt']
                    // },
                    raw: true,
                });
                let { departmentId, name, price, description } = productDetails;
                product.departmentId = departmentId
                product.name = name
                product.price = price
                product.description = description

                // add previewImage-key to every product
                let prevImage = await ProductImage.findOne({
                    where: { productId: product.id },
                    raw: true
                });
                let prevUrl = prevImage.url;
                product.previewImage = prevUrl;
            };

            order.Products = productsPurchased;
        };

        return res
            .status(200)
            .json({
                "Orders": getAllOrders
            });

    } catch (err) {
        error.error = err
        return res.json(error)
    };
});

// ⬇︎ Not necessary; instead: filter through all orders using orderId, on frontend ⬇︎
// Get single order details
// router.get('/:orderId', async(req, res) => {
//     // let currentUser = req.user;
//     // let currentUserId = req.user.id;
//     let error = {};
// });


// Create new order
router.post('/', requireAuth, async(req, res) => {

    // cart should calculate total
    // then pass to order

    // first instantiate order
    // required fields:
        // userId via req.user
        // total + products via req.body

    // upon success, instantiate order details
        // find new order using ByPk
        // using found orderId,
        // iterate through array of objects (in cart)
        // and instantiate new OrderDetails record for each element
        // whilst deleting element from user's cart

    let currentUser = req.user;
    let currentUserId = req.user.id;
    let error = {};

    try {
        let { total, products } = req.body //  products should be an array of objects

        // handle error: missing fields
        const validationErrorMessages = []
        if (!total) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Total is required.")
        } else if (!products) {
            error.message = "Validation Error";
            error.status = 400;
            validationErrorMessages.push("Products is required.")
        }
        if (error.message) {
            error.errors = validationErrorMessages;
            return res.status(400).json(error);
        }

        // instantiate order-object
        let postOrder = await Order.create({
            userId: currentUserId,
            total: total,
        });
        postOrder.save();


        /************** 1. Add products as OrderDetail join table **************/
        for (let i = 0; i < products.length; i++) {
            let currProduct = products[i];

            let product = await Product.findByPk(currProduct.productId,
                {raw:true}
            );

            let postOrderDetail = await OrderDetail.create({
                orderId: postOrder.id,
                productId: product.id
            });
            postOrderDetail.save();

            // modify keys
            delete currProduct.cartId
            delete currProduct.userId
            currProduct.id = currProduct.productId
            delete currProduct.productId
        }


        /***************** 2. Remove products from User's cart *****************/
        Cart.destroy({
            where: {
                userId: parseInt(currentUserId),
            },
        })

        /****************** 3. Return modified data to client ******************/
        let printOrder = await Order.findByPk(postOrder.id, {
            attributes: {
                exclude: ['updatedAt']
            },
            raw: true,
        })

        return res
            .status(200)
            .json({
                "id": printOrder.id,
                "userId": printOrder.userId,
                "status": printOrder.status,
                "total": printOrder.total,
                "createdAt": printOrder.createdAt,
                "Products": products
            })

    } catch (err) {
        error.error = err
        return res.json(error)
    };
})


/***************************** ERROR HANDLER *****************************/
router.use((err, req, res, next) => {
    return res.json(err)
});


/******************************** EXPORTS ********************************/
module.exports = router;
