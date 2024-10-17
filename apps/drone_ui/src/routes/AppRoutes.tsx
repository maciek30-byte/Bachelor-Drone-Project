import React from 'react';
import { Routes } from 'react-router-dom';
import { DashboardLayout } from '../pages/DashboardLayout';
import { Drones } from '../pages/Drones';
import { Missions, MissionsLayout } from '../pages/Missions';
import { Settings } from '../pages/Settings';
import { APP_ROUTES_PAGES } from './RouteConfig';
import { Route, Navigate } from 'react-router-dom';

const TemporaryMisionCreator = () => {
    return <div>Create Mission</div>
}

const PAGE_ROUTE_MAP: Record<typeof APP_ROUTES_PAGES[number], React.ReactNode> = {
    dashboard: <DashboardLayout />,
    drones: <Drones />,
    missions: <MissionsLayout />,
    settings: <Settings />,
    "create-mission": <TemporaryMisionCreator />,
};


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            {APP_ROUTES_PAGES.map((route) => (
                <Route key={route} path={route} element={PAGE_ROUTE_MAP[route]} />
            ))}
        </Routes>

    );
};

export default AppRoutes;