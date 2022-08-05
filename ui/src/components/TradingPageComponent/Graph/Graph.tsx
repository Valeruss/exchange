import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Graph.scss';
import GraphHeader from './GraphHeader/GraphHeader';

const Graph = () => {
    const market = useSelector((state: any) => state.event.market);
    const [ left, setLeft ] = useState('');
    const [ right, setRight ] = useState('');

    useEffect(() => {
        const [ l, r ] = market.split('_');
        setLeft(l);
        setRight(r);
    }, [market]);

    return (
        <div className='graph-container'>
            <GraphHeader />
        </div>
    );
};

export default Graph;