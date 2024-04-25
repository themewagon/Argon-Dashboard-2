import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
// import MainLayout from 'layouts/main-layout';
// import LoginPage from 'pages/authentication/default/Login';
// import SignUpPage from 'pages/authentication/default/SignUp';
// import AutomotivePage from 'pages/automotive/Automotive';
// import CRMPage from 'pages/crm/CRM';
// import Default from 'pages/dashboard/default/Default';
// import LandingPage from 'pages/dashboard/landing/Landing';
// import SmartHomePage from 'pages/smarthome/SmartHome';
// import VirtualRealityPage from 'pages/vr/VirtualReality';
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const LoginPage = lazy(() => import('pages/authentication/default/Login'));
const SignUpPage = lazy(() => import('pages/authentication/default/SignUp'));
const AutomotivePage = lazy(() => import('pages/automotive/Automotive'));
const CRMPage = lazy(() => import('pages/crm/CRM'));
const Default = lazy(() => import('pages/dashboard/default/Default'));
const LandingPage = lazy(() => import('pages/dashboard/landing/Landing'));
const SmartHomePage = lazy(() => import('pages/smarthome/SmartHome'));
const VirtualRealityPage = lazy(() => import('pages/vr/VirtualReality'));

export const routes = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard/default" />,
      },
      {
        path: 'dashboard',
        element: (
          <MainLayout>
            <React.Suspense fallback={<PageLoader />}>
              <Outlet />
            </React.Suspense>
          </MainLayout>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="default" />,
          },
          {
            path: 'default',
            element: <Default />,
          },
          {
            path: 'landing',
            element: <LandingPage />,
          },
          {
            path: 'automotive',
            element: <AutomotivePage />,
          },
          {
            path: 'smart-home',
            element: <SmartHomePage />,
          },
          {
            path: 'virtual-reality',
            element: <VirtualRealityPage />,
          },
          {
            path: 'CRM',
            element: <CRMPage />,
          },
        ],
      },
      {
        path: 'authentication/sign-in',
        element: <LoginPage />,
      },
      {
        path: 'authentication/sign-up',
        element: <SignUpPage />,
      },
    ],
  },

  //   { path: 'authentication/forgot-password', element: <ForgotPassword /> },
  //   { path: '*', element: <NotFound /> },
];

const router = createBrowserRouter(routes);
export default router;
