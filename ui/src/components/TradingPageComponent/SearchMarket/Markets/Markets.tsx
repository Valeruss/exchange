import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicker } from '../../../../http/publicAPI';
import './Markets.scss';

const Markets = ({ market }: any) => {
    const [ price, setPrice ] = useState(0);
    const [ volume, setVolume ] = useState(0); 
    const selectedMarket = useSelector((state: any) => state.event.market);

    // useEffect(() => {
    //     getTicker(market).then(data => {
    //         // console.log(data);
    //         setPrice(data.last);
    //         setVolume(data.volume);
    //     });
    // }, []);

    return (
        <>
            {selectedMarket === market.name ?
                <td className='selected-market'>{_.replace(market.name, '_', '/')}</td>
                :
                <td>{_.replace(market.name, '_', '/')}</td>
            }
            <td>{market.last}</td>
            <td>{_.ceil(market.vol, 3)}</td>
        </>
    );
};

export default Markets;
