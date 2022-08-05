export {}
const Router = require('express');
const publicController = require('../controllers/publicController');

const router = new Router();

router.get('/markets', publicController.getMarkets);
router.get('/coinpairs', publicController.getCoinPairs);
router.get('/markethistory', publicController.getMarketHistory);
router.get('/ticker', publicController.getTicker);
router.get('/tickers', publicController.getAllTickers);
router.get('/book', publicController.getOrderBook);

module.exports = router;
