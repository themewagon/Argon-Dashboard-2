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
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';

const App = lazy(() => import('App'));
const MainLayout = lazy(() => import('layouts/main-layout'));
const LoginPage = lazy(() => import('pages/authentication/default/Login'));
const SignUpPage = lazy(() => import('pages/authentication/default/SignUp'));
const CategoriesPage = lazy(() => import('pages/categories/Categories'));
const OrdersPage = lazy(() => import('pages/orders/Orders'));
const Dashboard = lazy(() => import('pages/dashboard/index'));
const ProductsPage = lazy(() => import('pages/products/Products'));
const CustomersPage = lazy(() => import('pages/customers/Customers'));
const ReportsPage = lazy(() => import('pages/reports/Reports'));
const CouponsPage = lazy(() => import('pages/coupons/Coupons'));
const InboxPage = lazy(() => import('pages/inbox/Inbox'));

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
      //   {
      //     path: 'authentication/sign-in',
      //     element: <LoginPage />,
      //   },
      //   {
      //     path: 'authentication/sign-up',
      //     element: <SignUpPage />,
      //   },
    ],
  },

  //   { path: 'authentication/forgot-password', element: <ForgotPassword /> },
  //   { path: '*', element: <NotFound /> },
];

const router = createBrowserRouter(routes);
export default router;
