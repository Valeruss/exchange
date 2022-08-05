import _ from 'lodash';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { getMarkets, getCoinPairs } from '../../../http/publicAPI';
import Markets from './Markets/Markets';
import { useDispatch, useSelector } from 'react-redux';
import { EventActionCreators } from '../../../store/reducers/event/action-creators';
import MarketsFilter from './MarketsFilter/MarketsFilter';
import './SearchMarket.scss';

const SearchMarket = () => {
    const [ displayedMarkets, setDisplayesMarkets ] = useState([]);
    const dispatch = useDispatch();
    // const selectedMarket = useSelector((state: any) => state.event.market);
    const allMarkets = useSelector((state: any) => state.event.allMarkets);

    // console.log(allMarkets)

    const setSelectedMarket = (_market: String) => {
        console.log(_market);
        dispatch(EventActionCreators.setSelectedMarket(_market));
    };

    useEffect(() => {
        // getMarkets().then(data => {
        //     setMarkets(data);
        // });
        setDisplayesMarkets(allMarkets)
        // console.log(allMarkets)
    }, [allMarkets]);

    return (
        <div className='srch-mkt-container'>
            <div className='mrkt-df border-bottom'>
                <div className='mrkt-df-market border-bottom' style={{borderBottomWidth: 2, borderColor: '#D9552B'}}>Market</div>
                <div className='mrkt-df-defi border-bottom' style={{borderBottomWidth: 0}}>Defi</div>
            </div>
            <div className='search-row border-bottom'>
                <div className='srch-input'>
                    Search
                </div>
                <div className='after-search'>
                    Some other tools
                </div>
            </div>
            <div className='filter-row border-bottom'>
                <MarketsFilter setDisplayedMarkets={setDisplayesMarkets}/>
            </div>
            <div className='table-container'>
                <table>
                    <thead className='tbl-thead border-bottom'>
                        <tr className='thead-tr'>
                            <th className='thead-tr-th th-market'>Market</th>
                            <th className='thead-tr-th'>Price</th>
                            <th className='thead-tr-th'>Volume</th>
                        </tr>
                    </thead>
                    <tbody className='tbl-tbody'>
                        {displayedMarkets.map((market: any, index: number) => {
                            const bckgTableClass = classNames({
                                'grey-bckg': index % 2 === 0,
                            });
                            return ( 
                                <tr className={`tbl-tbody-tr ${bckgTableClass}`} onClick={() => setSelectedMarket(market.name)} key={index}>
                                    <Markets market={market} />
                                </tr> 
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SearchMarket;
