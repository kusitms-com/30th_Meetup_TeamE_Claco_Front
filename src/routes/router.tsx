import { TosPage } from "@/pages/Login/TosPage";
import { LoginPage } from "@/pages/Login/LoginPage";
import { NicknameCreatePage } from "@/pages/Login/NicknameCreatePage";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { MainPage } from "@/pages/Main/page";
import RoutePath from "./routePath";
import { CompleteRegistrationPage } from "@/pages/Onboarding/CompleteRegistration/CompleteRegistrationPage";
import { SelectProfilePage } from "@/pages/Onboarding/UserRegistration/SelectProfilePage";
import { SelectPricePage } from "@/pages/Onboarding/UserRegistration/SelectPricePage";
import { SelectLocationPage } from "@/pages/Onboarding/UserRegistration/SelectLocationPage";
import { SelectConceptPage } from "@/pages/Onboarding/UserRegistration/SelectConceptPage";
import { SelectFeaturePage } from "@/pages/Onboarding/UserRegistration/SelectFeaturePage";
import Layout from "@/components/Layout";

const routes: RouteObject[] = [
  {
    path: RoutePath.Login,
    element: <Outlet />,
    children: [
      {
        path: RoutePath.Main,
        element: <MainPage />,
      },
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/tos",
        element: <TosPage />,
      },
      {
        path: "/create",
        element: <NicknameCreatePage />,
      },
      {
        path: "/create/profile",
        element: <SelectProfilePage />,
      },
      {
        path: "/create/price",
        element: <SelectPricePage />,
      },
      {
        path: "/create/location",
        element: <SelectLocationPage />,
      },
      {
        path: "/create/concept",
        element: <SelectConceptPage />,
      },
      {
        path: "/create/feature",
        element: <SelectFeaturePage />,
      },
      {
        path: "/create/complete",
        element: <CompleteRegistrationPage />,
      },
    ],
  },
  {
    path: RoutePath.Login,
    element: <Layout />,
    children: [
      {
        path: RoutePath.Main,
      },
    ],
  },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
