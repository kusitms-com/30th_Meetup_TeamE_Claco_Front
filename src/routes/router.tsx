import { LoginPage } from '@/pages/Login/page';
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
    ],
  },
  { path: '*', element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
