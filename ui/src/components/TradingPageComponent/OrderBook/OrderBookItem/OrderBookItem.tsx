import _ from 'lodash';
import React from 'react';
import './OrderBookItem.scss';

const OrderBookItem = ({ item, side }: any) => {
    return (
        <>
            {side === 'buy' ?
                <td style={{color: '#00957B'}}>{item.price}</td>
                :
                <td style={{color: '#F33C3C'}}>{item.price}</td>
            }
            <td>{item.left}</td>
            <td>{_.ceil(item.price * item.left, 5)}</td>
        </>
    );
};

export default OrderBookItem;
