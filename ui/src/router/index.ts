import React from 'react';
import MainPage from '../pages/MainPage';
import ProfilePage from '../pages/ProfilePage';
import TradingPage from '../pages/TradingPage';
import WalletPage from '../pages/WalletPage';

export interface IRoute {
    path: string;
    element: React.ElementType;
};

export enum RouteNames {
    MAIN = '/',
    TRADE = '/trade',
    WALLET = '/wallet',
    PROFILE = '/prodile',
};

export const publicRoutes: IRoute[] = [
    { path: RouteNames.MAIN, element: MainPage },
    { path: RouteNames.TRADE, element: TradingPage },
    { path: RouteNames.WALLET, element: WalletPage },
    { path: RouteNames.PROFILE, element: ProfilePage },
];
