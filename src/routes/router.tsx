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
import AuthLayout from 'layouts/auth-layout';
import NotFoundPage from 'pages/not-found';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const LoginPage = lazy(() => import('pages/authentication/login'));
const SignUpPage = lazy(() => import('pages/authentication/register'));
const CategoriesPage = lazy(() => import('pages/categories'));
const OrdersPage = lazy(() => import('pages/orders'));
const Dashboard = lazy(() => import('pages/dashboard/index'));
const ProductsPage = lazy(() => import('pages/products'));
const CustomersPage = lazy(() => import('pages/customers'));
const ReportsPage = lazy(() => import('pages/reports'));
const CouponsPage = lazy(() => import('pages/coupons'));
const InboxPage = lazy(() => import('pages/inbox'));

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
          <Suspense fallback={<PageLoader />}>
            <MainLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="default" />,
          },
          {
            path: 'default',
            element: <Dashboard />,
          },
          {
            path: 'categories',
            element: <CategoriesPage />,
          },
          {
            path: 'products',
            element: <ProductsPage />,
          },
          {
            path: 'customers',
            element: <CustomersPage />,
          },
          {
            path: 'orders',
            element: <OrdersPage />,
          },
          {
            path: 'reports',
            element: <ReportsPage />,
          },
          {
            path: 'coupons',
            element: <CouponsPage />,
          },
          {
            path: 'inbox',
            element: <InboxPage />,
          },
        ],
      },
      {
        path: rootPaths.authRoot,
        element: <AuthLayout />,
        children: [
          {
            path: paths.login,
            element: <LoginPage />,
          },
          {
            path: paths.signup,
            element: <SignUpPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },

  //   { path: 'authentication/forgot-password', element: <ForgotPassword /> },
  //   { path: '*', element: <NotFound /> },
];

const router = createBrowserRouter(routes);
export default router;
