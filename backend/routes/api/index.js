/******************************** IMPORTS ********************************/
// libraries
const router = require('express').Router();
// local files
const { requireAuth } = require('../../utils/auth.js');
const { restoreUser } = require('../../utils/auth.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

// Import routers
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const departmentsRouter = require('./departments.js');
const productsRouter = require('./products.js');
const cartRouter = require('./cart.js');
const ordersRouter = require('./orders.js');
const reviewsRouter = require('./reviews.js');
const favoritesRouter = require('./favorites.js');

// Connect restoreUser middleware to the API router
// If current user session is valid, set req.user to the user in the database
// If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/departments', departmentsRouter);
router.use('/products', productsRouter);
router.use('/cart', cartRouter);
router.use('/orders', ordersRouter);
router.use('/reviews', reviewsRouter);
router.use('/favorites', favoritesRouter);


/************************* TEST ROUTES *************************/
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'demo_user'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user });
});

// GET /api/restore-user
router.get(
  '/restore-user',
  (req, res) => {
      return res.json(req.user);
  }
);

// GET /api/require-auth
router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


/*************************************** error handler ****************************************/

module.exports = router;
