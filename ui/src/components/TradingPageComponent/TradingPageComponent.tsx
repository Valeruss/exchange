import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Graph from './Graph/Graph';
import MarketHistory from './MarketHistory/MarketHistory';
import MyOrdersHistory from './MyOrdersHistory/MyOrdersHistory';
import OrderBook from './OrderBook/OrderBook';
import SearchMarket from './SearchMarket/SearchMarket';
import TradingTackle from './TradingTackle/TradingTackle';
import './TradingPageComponent.scss';
import { getAllTickers, getMarkets } from '../../http/publicAPI';
import { EventActionCreators } from '../../store/reducers/event/action-creators';

const TradingPageComponent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getAllTickers().then(data => {
            // console.log(data);
            dispatch(EventActionCreators.setAllMarkets(data));
        });
    }, []);

    return (
        <div className='trading-page'>
            <div className='trading-page-columns border-bottom'>
                <div className='first-column border-right'>
                    <div className='search-market border-bottom'>
                        <SearchMarket />
                    </div>
                    <div className='market-history'>
                        <MarketHistory />
                    </div>
                </div>
                <div className='second-column border-right'>
                    <div className='graph border-bottom'>
                        <Graph />
                    </div>
                    <div className='trading-tackle'>
                        <TradingTackle />
                    </div>
                </div>
                <div className='third_column'>
                    <div className='order-book'>
                        <OrderBook />
                    </div>
                </div>
            </div>
            <div className='my-orders-history'>
                <MyOrdersHistory />
            </div>
        </div>
    );
};

export default TradingPageComponent;
