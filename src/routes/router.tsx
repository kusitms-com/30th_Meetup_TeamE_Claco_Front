import { AgreementPage } from "@/pages/Login/AgreementPage";
import { LoginPage } from "@/pages/Login/LoginPage";
import { NicknameCreatePage } from "@/pages/Login/NicknameCreatePage";
import { UserRegistrationPage } from "@/pages/Onboarding/UserRegistrationPage";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import RoutePath from "./routePath";
import { CompleteRegistrationPage } from "@/pages/Onboarding/CompleteRegistrationPage";
// import Layout from "@/components/Layout";

const routes: RouteObject[] = [
  {
    path: RoutePath.Login,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/agreement",
        element: <AgreementPage />,
      },
      {
        path: "/create",
        element: <NicknameCreatePage />,
      },
      {
        path: "/create/profile",
        element: <UserRegistrationPage />,
      },
      {
        path: "/create/complete",
        element: <CompleteRegistrationPage />,
      },
    ],
  },
  // {
  //   path: RoutePath.Login,
  //   element: <Layout />,
  //   children: [
  //     {
  //       path: RoutePath.Main,
  //     },
  //   ],
  // },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
