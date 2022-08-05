export {}
const Router = require('express');
const publicRoutes = require('./publicRoutes');
const router = new Router();

router.use('/public', publicRoutes);

module.exports = router;
