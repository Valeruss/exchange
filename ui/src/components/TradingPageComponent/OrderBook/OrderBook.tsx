import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderBook, getMarketHistory } from '../../../http/publicAPI';
import './OrderBook.scss';
import OrderBookItem from './OrderBookItem/OrderBookItem';

const OrderBook = () => {
    const [ sellOrderBook, setSellOrderBook ] = useState([]);
    const [ buyOrderBook, setBuyOrderBook ] = useState([]);
    const [ lastOrder, setLastOrder ] = useState(Object);
    const [ leftName, setLeftName ] = useState('');
    const [ rightName, setRightName ] = useState('');
    const selectedMarket = useSelector((state: any) => state.event.market);

    useEffect(() => {
        getOrderBook(selectedMarket, 'sell', 20).then(data => {
            setSellOrderBook(_.reverse(data));
        });
        getOrderBook(selectedMarket, 'buy', 20).then(data => {
            setBuyOrderBook(data);
        });
        getMarketHistory(selectedMarket).then(data => {
            console.log(data[0]);
            setLastOrder(data[0]);
        });
        const [ left, right ] = selectedMarket.split('_');
        setLeftName(left);
        setRightName(right);
    }, [selectedMarket]);

    return (
        <div className='order-book-container'>
            <div className='o-b-header border-bottom'>
                <div className='o-b-header-text'>Order book</div>
                <div className='o-b-header-text other-tools'>Other tools</div>
            </div>
            <div className='table-container border-bottom' style={{display: 'flex', flexDirection: 'column-reverse'}}>
                <table>
                    <thead className='tbl-thead border-bottom'>
                        <tr className='thead-tr'>
                            <th className='thead-tr-th'>Price ({rightName})</th>
                            <th className='thead-tr-th'>Amount ({leftName})</th>
                            <th className='thead-tr-th'>Total ({rightName})</th>
                        </tr>
                    </thead>
                    <tbody className='tbl-tbody'>
                        {sellOrderBook.map((item: any, index: number) => {
                            const bckgTableClass = classNames({
                                'grey-bckg': index % 2 === 0,
                            });
                            return ( 
                                <tr className={`tbl-tbody-tr ${bckgTableClass}`} key={index}>
                                    <OrderBookItem item={item} side={'sell'}/>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <div className='o-b-between border-bottom'>
                {lastOrder?.type === 'buy' ?
                    <div className='o-b-between-text' style={{color: '#00957B'}}>
                        <svg className='text-s' width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path d="M7.504 15C11.62 15 15 11.62 15 7.5 15 3.373 11.621 0 7.496 0 3.38 0 0 3.373 0 7.5 0 11.62 3.379 15 7.504 15zm0-3.602c-.318 0-.577-.111-.791-.348L4.317 8.506c-.184-.2-.251-.37-.251-.621 0-.452.325-.777.798-.777.237 0 .474.111.607.274l.71.828.458.658-.096-1.39v-2.98c0-.519.421-.889.96-.889.533 0 .954.37.954.888v2.98l-.096 1.399.466-.695.71-.8a.816.816 0 01.598-.273c.474 0 .806.325.806.777 0 .251-.074.421-.258.621L8.295 11.05c-.215.23-.473.348-.791.348z"></path></svg>
                        <div className='text-r'>{lastOrder?.price}</div>
                    </div>
                    :
                    <div className='o-b-between-text' style={{color: '#F33C3C'}}>
                        <svg className='text-s' width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg" ><path d="M7.504 15C11.62 15 15 11.62 15 7.5 15 3.373 11.621 0 7.496 0 3.38 0 0 3.373 0 7.5 0 11.62 3.379 15 7.504 15zm0-3.602c-.318 0-.577-.111-.791-.348L4.317 8.506c-.184-.2-.251-.37-.251-.621 0-.452.325-.777.798-.777.237 0 .474.111.607.274l.71.828.458.658-.096-1.39v-2.98c0-.519.421-.889.96-.889.533 0 .954.37.954.888v2.98l-.096 1.399.466-.695.71-.8a.816.816 0 01.598-.273c.474 0 .806.325.806.777 0 .251-.074.421-.258.621L8.295 11.05c-.215.23-.473.348-.791.348z"></path></svg>
                        <div className='text-r'>{lastOrder?.price}</div>
                    </div>
                }
                <div className='o-b-header-text other-tools'>Other tools</div>
            </div>

            <div className='table-container'>
                <table>
                    <tbody className='tbl-tbody'>
                        {buyOrderBook.map((item: any, index: number) => {
                            const bckgTableClass = classNames({
                                'grey-bckg': index % 2 === 0,
                            });
                            return ( 
                                <tr className={`tbl-tbody-tr ${bckgTableClass}`} key={index}>
                                    <OrderBookItem item={item} side={'buy'}/>
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderBook;

