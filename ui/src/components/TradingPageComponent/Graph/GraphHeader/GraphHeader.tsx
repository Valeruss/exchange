import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './GraphHeader.scss';

const GraphHeader = () => {
    const market = useSelector((state: any) => state.event.market);
    const [ left, setLeft ] = useState('');
    const [ right, setRight ] = useState('');

    useEffect(() => {
        const [ l, r ] = market.split('_');
        setLeft(l);
        setRight(r);
    }, [market]);

    return (
        <div className='graph-header-container'>
            <div className='header-info border-bottom'>
                <div className='pair-name border-right no-selection'>
                    <div className='pair-name-text'>
                        <div className='left-path'>{left} </div>
                        <div className='right-path'>&nbsp;&nbsp;/&nbsp;&nbsp;{right}</div>
                    </div>
                </div>
                <div className='coinmarketcap border-right'>
                    <div className='coinmarketcap-link'>
                        <a data-v-16159ecb="" data-v-59ec96ff="" href="https://coinmarketcap.com/currencies/qmall-token" target="_blank" data-v-6a036c0e="">
                            <svg data-v-59ec96ff="" width="14" height="14" fill="nonoe" xmlns="http://www.w3.org/2000/svg" data-v-16159ecb="">
                                <path d="M12.174 8.366c-.248.154-.54.173-.761.05-.282-.157-.438-.524-.438-1.035V5.856c0-.738-.295-1.263-.79-1.405-.84-.24-1.47.77-1.707 1.15l-1.48 2.363V5.075c-.016-.664-.235-1.061-.65-1.181-.276-.08-.687-.048-1.088.555L1.946 9.692A5.694 5.694 0 011.273 7a5.734 5.734 0 015.726-5.728A5.732 5.732 0 0112.724 7l.002.016v.016c.03.61-.171 1.098-.552 1.334zM13.997 7v-.032C13.979 3.122 10.847 0 6.998 0 3.14 0 0 3.14 0 7s3.14 7 6.998 7c1.771 0 3.462-.663 4.758-1.866a.636.636 0 00-.856-.943l-.01.009a5.709 5.709 0 01-3.892 1.528 5.714 5.714 0 01-4.262-1.907l2.989-4.728v2.18c0 1.047.412 1.385.757 1.484.346.099.875.032 1.43-.857l1.643-2.625c.053-.085.102-.158.146-.22v1.327c0 .978.398 1.76 1.091 2.146.626.347 1.412.316 2.052-.082.778-.482 1.196-1.372 1.153-2.446z" fill="currentColor"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className='trade-info'>
                    <div className='trade-info-container'>
                        <div className='t-i-column'>
                            <div>Change 24H</div>
                            <div className='bottom-text clr-green'>13.42%</div>
                        </div>
                        <div className='t-i-column'>
                            <div>Price ({right})</div>
                            <div className='bottom-text'>0.006</div>
                        </div>
                        <div className='t-i-column'>
                            <div>Volume ({left})</div>
                            <div className='bottom-text'>63.431</div>
                        </div>
                        <div className='t-i-column'>
                            <div>Volume ({right})</div>
                            <div className='bottom-text'>0.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GraphHeader;