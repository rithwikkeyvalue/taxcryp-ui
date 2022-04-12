import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import RoutesPath from './RoutesPath';

const HomePage = lazy(() => import('../pages'));

const RouteLayout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={RoutesPath.HOME} element={ <HomePage /> } />
        <Route path={RoutesPath.DEFAULT} element={<Navigate replace to={RoutesPath.HOME} />} />
      </Routes>
    </Suspense>
  );
};

export default RouteLayout;
