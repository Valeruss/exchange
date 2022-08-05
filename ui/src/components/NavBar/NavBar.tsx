import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';
import './NavBar.scss';

const NavBar = () => {
    const router = useNavigate();

    return (
        <div className="topnav" >
            <div onClick={() => router(RouteNames.MAIN)}>About</div>
            <div onClick={() => router(RouteNames.TRADE)}>Trading</div>
            <div onClick={() => router(RouteNames.WALLET)}>Wallet</div>
            <div onClick={() => router(RouteNames.PROFILE)} >Profile</div>
        </div>
    );
};

export default NavBar;
