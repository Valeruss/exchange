import React, { useState } from 'react';
import classNames from 'classnames';
import './TradingTackle.scss';
import LimitTrade from './LimitTrade/LimitTrade';
import MarketTrade from './MarketTrade/MarketTrade';
import StopLimitTrade from './StopLimitTrade/StopLimitTrade';
import OCOTrade from './OCOTrade/OCOTrade';

const TradingTackle = () => {
    const [ tradeMethod, setTradeMethod ] = useState('');

    const TradeMethods = {
        limit: 'limit',
        market: 'market',
        stopLimit: 'stopLimit',
        oco: 'oco'
    }

    const limitMethod = classNames({
        'method-selected': tradeMethod === TradeMethods.limit,
    });
    const marketMethod = classNames({
        'method-selected': tradeMethod === TradeMethods.market,
    });
    const stopLimitMethod = classNames({
        'method-selected': tradeMethod === TradeMethods.stopLimit,
    });
    const ocoMethod = classNames({
        'method-selected': tradeMethod === TradeMethods.oco,
    });

    return (
        <div className='trading-tackle-container'>
            <div className='tt-header border-bottom'>
                <div className='tt-header-container'>
                    <div className={`tab-btn ${limitMethod}`} onClick={() => setTradeMethod(TradeMethods.limit)}>Limit</div>
                    <div className={`tab-btn ${marketMethod}`} onClick={() => setTradeMethod(TradeMethods.market)}>Market</div>
                    <div className={`tab-btn ${stopLimitMethod}`} onClick={() => setTradeMethod(TradeMethods.stopLimit)}>Stop-limit</div>
                    <div className={`tab-btn ${ocoMethod}`} onClick={() => setTradeMethod(TradeMethods.oco)}>OCO</div>
                </div>
            </div>
            <div className='trading-block'>
                {   tradeMethod === TradeMethods.limit ?
                        <LimitTrade />
                    : tradeMethod === TradeMethods.market ?
                        <MarketTrade />
                    : tradeMethod === TradeMethods.stopLimit ?
                        <StopLimitTrade />
                    : 
                        <OCOTrade />
                }
            </div>
        </div>
    );
};

export default TradingTackle;
