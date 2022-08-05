import _ from 'lodash';
import React from 'react';
import './MarketHistoryItem.scss';

const MarketHistoryItem = ({ historyItem }: any) => {
    
    const validateTime = () => {
        const time = new Date(historyItem.time * 1000)
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const timeArray = _.map([hours, minutes, seconds], (timeItem) => {
            if(timeItem <= 9) {
                return `0${timeItem}`;
            }
            return `${timeItem}`;
        });
        return _.join(timeArray, ':');
    }

    return (
        <>
            {historyItem.type === 'buy' ?
                <td style={{color: '#00957B'}}>{historyItem.price}</td>
                :
                <td style={{color: '#F33C3C'}}>{historyItem.price}</td>
            }
            <td>{historyItem.amount}</td>
            <td>{validateTime()}</td>
        </>
    );
};

export default MarketHistoryItem;
