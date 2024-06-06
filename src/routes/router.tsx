import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';

import AuthLayout from 'layouts/auth-layout';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import paths, { rootPaths } from './path';

/* ---------------- Lazy loads various components ------------------------- */
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
const NotFoundPage = lazy(() => import('pages/not-found'));
/* -------------------------------------------------------------------------- */
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
        element: <Navigate to={paths.default} />,
      },
      {
        path: rootPaths.pagesRoot,
        element: (
          <Suspense fallback={<PageLoader />}>
            <MainLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={paths.default} />,
          },
          {
            path: paths.default,
            element: <Dashboard />,
          },
          {
            path: paths.categories,
            element: <CategoriesPage />,
          },
          {
            path: paths.products,
            element: <ProductsPage />,
          },
          {
            path: paths.customers,
            element: <CustomersPage />,
          },
          {
            path: paths.orders,
            element: <OrdersPage />,
          },
          {
            path: paths.customers,
            element: <ReportsPage />,
          },
          {
            path: paths.coupons,
            element: <CouponsPage />,
          },
          {
            path: paths.inbox,
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
        path: rootPaths.errorRoot,
        children: [
          {
            path: paths[404],
            element: <NotFoundPage />,
          },
        ],
      },
      {
        path: '*',
        element: <Navigate to={paths[404]} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: '/Modernize-Material-Admin',
});
export default router;
