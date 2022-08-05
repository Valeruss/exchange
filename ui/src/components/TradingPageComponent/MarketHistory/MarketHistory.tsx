import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getMarketHistory } from '../../../http/publicAPI';
import { useDispatch, useSelector } from 'react-redux';
import './MarketHistory.scss';
import MarketHistoryItem from './MarketHistoryItem/MarketHistoryItem';

const MarketHistory = () => {
    const [ marketHistory, setMarketHistory ] = useState([]);
    const [ leftName, setLeftName ] = useState('');
    const [ rightName, setRightName ] = useState('');
    const selectedMarket = useSelector((state: any) => state.event.market);

    useEffect(() => {
        getMarketHistory(selectedMarket).then(data => {
            setMarketHistory(data);
        });
        const [ left, right ] = selectedMarket.split('_');
        setLeftName(left);
        setRightName(right);
    }, [selectedMarket]);

    return (
        <div className='mrkt-history-container'>
            <div className='m-h-header border-bottom'>
                <div className='m-h-header-text'>Market history</div>
            </div>
            <div className='table-container'>
                <table>
                    <thead className='tbl-thead border-bottom'>
                        <tr className='thead-tr'>
                            <th className='thead-tr-th'>Price ({rightName})</th>
                            <th className='thead-tr-th'>Amount ({leftName})</th>
                            <th className='thead-tr-th'>Time</th>
                        </tr>
                    </thead>
                    <tbody className='tbl-tbody'>
                        {marketHistory.length !== 0 ?
                            marketHistory.map((historyItem: any, index: number) => {
                                const bckgTableClass = classNames({
                                    'grey-bckg': index % 2 === 0,
                                });
                                return ( 
                                    <tr className={`tbl-tbody-tr ${bckgTableClass}`} key={index}>
                                        <MarketHistoryItem historyItem={historyItem}/>
                                    </tr> 
                                )
                            })
                            :
                            <div className='empty-list'>Empty</div>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarketHistory;
