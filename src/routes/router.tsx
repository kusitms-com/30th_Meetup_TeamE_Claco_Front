import { AgreementPage } from '@/pages/Login/AgreementPage';
import { LoginPage } from '@/pages/Login/LoginPage';
import { NicknameCreatePage } from '@/pages/Login/NicknameCreatePage';
import { UserProfilePage } from '@/pages/Onboarding/UserProfilePage';
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
      {
        path: '/create',
        element: <NicknameCreatePage />,
      },
      {
        path: '/create/profile',
        element: <UserProfilePage />,
      },
    ],
  },
  { path: '*', element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
