import { TosPage } from "@/pages/Tos/page";
import { LoginPage } from "@/pages/Login/page";
import { NicknameCreatePage } from "@/pages/Onboarding/UserRegistration/Nickname/page";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { MainPage } from "@/pages/Main/page";
import RoutePath from "./routePath";
import { CompleteRegistrationPage } from "@/pages/Onboarding/CompleteRegistration/page";
import { SelectProfilePage } from "@/pages/Onboarding/UserRegistration/Profile/page";
import { SelectPricePage } from "@/pages/Onboarding/UserRegistration/Price/page";
import { SelectLocationPage } from "@/pages/Onboarding/UserRegistration/Location/page";
import { SelectConceptPage } from "@/pages/Onboarding/UserRegistration/Concept/page";
import { SelectFeaturePage } from "@/pages/Onboarding/UserRegistration/Feature/page";
import Layout from "@/components/Layout";

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
        element: <MainPage />,
      },
    ],
  },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
