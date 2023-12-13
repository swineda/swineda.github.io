/******************************** IMPORTS ********************************/
// libraries
const express = require('express')
const { check } = require('express-validator');
// local files
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { User } = require('../../db/models');


/*************************** GLOBAL VARIABLES ****************************/
const router = express.Router();

const validateLogin = [
    check('credential')
        // .exists({ checkFalsy: true })
        .isLength({ min: 3 })
        .withMessage('Please enter your username or email.'),
    check('password')
        // .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Please enter your password.'),
    handleValidationErrors
];


/******************************** ROUTES *********************************/
// Log in
router.post('/', validateLogin, async (req, res, next) => {

    const { credential, password } = req.body;
    let error = {};


    try {
        const user = await User.login({ credential, password });

        // handle error: invalid credentials
        if (!user) {
            error.message = "Invalid credentials. Please try again."
            error.statusCode = 401;
            return res.status(401).json(error); // chain status to return-response
        }

        const token = await setTokenCookie(res, user);

        // const printUser = await User.findByPk(user.id, { raw: true });
        // printUser.email = credential;
        // printUser.token = token;
        // return res.json(printUser)

        const printUser = user.toJSON();
        printUser.token = token;

        return res.status(200).json(printUser)

    } catch (err) {
        error.error = err;
        return res.json(error);
    }
});

// Log out
router.delete('/', (_req, res) => {

    res.clearCookie('token');
    return res.json({ message: 'success' });
});

// Get Current User
router.get('/', restoreUser, (req, res) => {

    const { user } = req;
    let error = {};

    try {
        if (user) {
            let printUser = {};
            printUser.id = user.id;
            printUser.firstName = user.firstName;
            printUser.lastName = user.lastName;
            printUser.email = user.email;
            printUser.username = user.username;
            printUser.url = user.url;
            printUser.createdAt = user.createdAt

            return res
                .status(200)
                .json(printUser)

        } else {
            return res.status(404).json({});
        }

    } catch (err) {
        error.err = err;
        res.json(error)
    }
});


/***************************** ERROR HANDLER *****************************/
// router.use((err, req, res, next) => {
//     return res.json(err)
// })


/******************************** EXPORTS ********************************/
module.exports = router;
