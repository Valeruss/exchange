const _ = require('lodash');
const axios = require('axios');

class PublicController {
    getMarkets = async (request: any, response: any) => {
        const resultQuery = await axios.get('https://api.qmall.io/api/v1/public/markets');
        const pairsInfo = resultQuery.data.result
        const pairs = _.map(pairsInfo, (pairInfo: any) => {
            return pairInfo.name;
        });
        return response.json(pairs);
    };

    getCoinPairs = async (request: any, response: any) => {
        const { coinName } = request.query;
        const resultQuery = await axios.get('https://api.qmall.io/api/v1/public/symbols');
        const allPairs = resultQuery.data.result;

        const pairs = _.filter(allPairs, (pair: string) => {  
            const [left, right] = pair.split('_');
            if (right === coinName) return pair; // OR left === coinName || right === coinName
        });
        return response.json(pairs);
    };

    getMarketHistory = async (request: any, response: any) => {
        const { market, limit = 1000, lastId = 1 } = request.query;
        const resultQuery = await axios.get('https://api.qmall.io/api/v1/public/history', {
            params: { market, lastId, limit }
        })
        const history = resultQuery.data.result;
        return response.json(_.dropRight(history, 949));
    };

    getTicker = async (request: any, response: any) => {
        const { market } = request.query;
        const resultQuery = await axios.get('https://api.qmall.io/api/v1/public/ticker' , {
            params: { market }
        });
        const ticker = resultQuery.data.result;
        return response.json(ticker);
    };

    getAllTickers = async (request: any, response: any) => {
        const resultQuery = await axios.get('https://api.qmall.io/api/v1/public/tickers');
        const tickers = resultQuery.data.result;
        const validTickers = _.map(tickers, (ticker: any) => {
            return ticker.ticker;
        })
        return response.json(validTickers);
    };

    getOrderBook = async (request: any, response: any) => {
        const { market, side, offset, limit } = request.query;
        const resultQuery = await axios.get('https://api.qmall.io/api/v1/public/book', {
            params: { market, side, offset, limit }
        });
        const orders = resultQuery.data.result.orders
        return response.json(orders);
    };
}

module.exports = new PublicController();