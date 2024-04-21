import MainLayout from 'layouts/main-layout';
import LoginPage from 'pages/authentication/default/Login';
import SignUpPage from 'pages/authentication/default/SignUp';
import AutomotivePage from 'pages/automotive/Automotive';
import CRMPage from 'pages/crm/CRM';
import DefaultDashboardPage from 'pages/dashboard/default/Default';
import LandingPage from 'pages/dashboard/landing/Landing';
import SmartHomePage from 'pages/smarthome/SmartHome';
import VirtualRealityPage from 'pages/vr/VirtualReality';
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';

export const routes = [
  { path: '/', element: <Navigate to="/dashboard" /> },
  {
    path: 'dashboard',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),

    children: [
      {
        index: true,
        element: <Navigate to="default" />,
      },
      {
        path: 'default',
        element: <DefaultDashboardPage />,
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
  //   { path: 'authentication/sign-up', element: <RegisterPage /> },
  //   { path: 'authentication/forgot-password', element: <ForgotPassword /> },
  //   { path: '*', element: <NotFound /> },
];
const router = createBrowserRouter(routes);
export default router;
