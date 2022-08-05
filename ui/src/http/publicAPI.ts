import { $host } from './index';

export const getMarkets = async () => {
    const { data } = await $host.get('api/public/markets');
    return data;
};

export const getCoinPairs = async (coinName: string) => {
    const { data } = await $host.get('api/public/coinpairs', { params: {
        coinName
    }});
    return data;
};

export const getMarketHistory = async (market: string) => {
    const { data } = await $host.get('api/public/markethistory', { params: {
        market
    }});
    return data;
};

export const getTicker = async (market: string) => {
    const { data } = await $host.get('api/public/ticker', { params: {
        market
    }});
    return data;
};

export const getAllTickers = async () => {
    const { data } = await $host.get('api/public/tickers');
    return data;
};

export const getOrderBook = async (market: string, side: string, limit: number, offset: number = 0) => {
    const { data } = await $host.get('api/public/book', { params: {
        market, side, limit, offset
    }});
    return data;
};
