import { AgreementPage } from '@/pages/Login/AgreementPage';
import { LoginPage } from '@/pages/Login/LoginPage';
import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        path: '',
        element: <LoginPage />,
      },
      {
        path: '/agreement',
        element: <AgreementPage />,
      },
    ],
  },
  { path: '*', element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
