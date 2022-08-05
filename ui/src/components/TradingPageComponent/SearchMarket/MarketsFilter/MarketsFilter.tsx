import _ from 'lodash';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkets, getCoinPairs } from '../../../../http/publicAPI';
import './MarketsFilter.scss';

const MarketsFilter = ({ setDisplayedMarkets }: any) => {
    const [ borderSelected, setBorderSelected ] = useState('');
    const allMarkets = useSelector((state: any) => state.event.allMarkets);

    const btcFilter = classNames({
        'filter-selected': borderSelected === 'BTC',
    });
    const ethFilter = classNames({
        'filter-selected': borderSelected === 'ETH',
    });
    const fiatFilter = classNames({
        'filter-selected': 
            borderSelected === 'FIAT' || 
            borderSelected === 'UAH' || 
            borderSelected === 'EUR',
    });
    const stblFilter = classNames({
        'filter-selected': 
            borderSelected === 'STBL' || 
            borderSelected === 'USDC' || 
            borderSelected === 'USDT' || 
            borderSelected === 'TUSD' || 
            borderSelected === 'BUSD',
    });
    const altsFilter = classNames({
        'filter-selected': borderSelected === 'USDTm',
    });
    
    const setCurrentMarkets = (coinName: string) => {
        setDisplayedMarkets(_.filter(allMarkets, (market) => {
            const [ left, right ] = market.name.split('_');
            return right === coinName;
        }));
        setBorderSelected(coinName);
    };

    const setCurrentMultiMarkets = async (name: string) => {
        setDisplayedMarkets(() => {
            switch (name) {
                case 'FIAT':
                    return _.filter(allMarkets, (market) => {
                        const [left, right] = market.name.split('_');
                        return right === 'UAH' || right === 'EUR';
                    });
                case 'STBL':
                    return _.filter(allMarkets, (market) => {
                        const [left, right] = market.name.split('_');
                        return right === 'USDC' || right === 'USDT' || right === 'TUSD' || right === 'BUSD';
                    });
                default:
            }
        });
        setBorderSelected(name);
    };

    return (
        <div className='mkts-filter-container'>
            <div className={`tab-btn ${btcFilter}`} onClick={() => setCurrentMarkets('BTC')}>BTC</div>
            <div className={`tab-btn ${ethFilter}`} onClick={() => setCurrentMarkets('ETH')}>ETH</div>
            <div className={`tab-btn dropdown ${fiatFilter}`}>
                <div className='btn-with-arrow dropbtn'>
                    <div>FIAT</div>
                    <svg className='svg-arrow' width="20" height="20"  fill="currentColor"><path d="M5.83325 12.5H14.1666L9.99992 7.5L5.83325 12.5Z"></path></svg>
                </div>
                <div className='dropdown-content'>
                    <div className='dd-item' onClick={() => setCurrentMultiMarkets('FIAT')}>FIAT</div>
                    <div className='dd-item' onClick={() => setCurrentMarkets('UAH')}>UAH</div>
                    <div className='dd-item' onClick={() => setCurrentMarkets('EUR')}>EUR</div>
                </div>
            </div>
            <div className={`tab-btn dropdown ${stblFilter}`}>
                <div className='btn-with-arrow dropbtn'>
                    <div>STBL</div>
                    <svg className='svg-arrow' width="20" height="20"  fill="currentColor"><path d="M5.83325 12.5H14.1666L9.99992 7.5L5.83325 12.5Z"></path></svg>
                </div>
                <div className='dropdown-content'>
                    <div className='dd-item' onClick={() => setCurrentMultiMarkets('STBL')}>STBL</div>
                    <div className='dd-item' onClick={() => setCurrentMarkets('USDC')}>USDC</div>
                    <div className='dd-item' onClick={() => setCurrentMarkets('USDT')}>USDT</div>
                    <div className='dd-item' onClick={() => setCurrentMarkets('TUSD')}>TUSD</div>
                    <div className='dd-item' onClick={() => setCurrentMarkets('BUSD')}>BUSD</div>
                </div>
            </div>
            <div className={`tab-btn ${altsFilter}`} onClick={() => setCurrentMarkets('USDTm')}>ALTS</div>
            <div className='tab-btn'>*</div>
        </div>
    );
};

export default MarketsFilter;
