import React from 'react';
import { Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Drones } from '../pages/Drones';
import { Missions } from '../pages/Missions';
import { Settings } from '../pages/Settings';
import { APP_ROUTES_PAGES } from './RouteConfig';
import { Route } from 'react-router-dom';

const PAGE_ROUTE_MAP = {
  dashboard: <Dashboard />,
  drones: <Drones />,
  missions: <Missions />,
  settings: <Settings />,
};


const AppRoutes: React.FC = () => {
  return (
    <Routes>
    {APP_ROUTES_PAGES.map((route) => (
      <Route key={route} path={route} element={PAGE_ROUTE_MAP[route]} />
    ))}
    </Routes>
  );
};

export default AppRoutes;