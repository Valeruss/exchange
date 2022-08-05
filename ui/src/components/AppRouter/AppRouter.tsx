import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RouteNames, publicRoutes } from '../../router';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((route) =>
                <Route element={<route.element />} path={route.path} key={route.path} />
            )}
            <Route path='/*' element={<Navigate to={RouteNames.TRADE} replace />} />
        </Routes>
    );
};

export default AppRouter;
