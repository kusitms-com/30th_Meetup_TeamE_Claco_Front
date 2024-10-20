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
        path: RoutePath.Login,
        element: <Layout />,
        children: [
          {
            path: RoutePath.Main,
            element: <MainPage />,
          },
        ],
      },
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: RoutePath.Tos,
        element: <TosPage />,
      },
      {
        path: RoutePath.Create,
        element: <NicknameCreatePage />,
      },
      {
        path: RoutePath.CreateProfile,
        element: <SelectProfilePage />,
      },
      {
        path: RoutePath.CreatePrice,
        element: <SelectPricePage />,
      },
      {
        path: RoutePath.CreateLocation,
        element: <SelectLocationPage />,
      },
      {
        path: RoutePath.CreateConcept,
        element: <SelectConceptPage />,
      },
      {
        path: RoutePath.CreateFeature,
        element: <SelectFeaturePage />,
      },
      {
        path: RoutePath.CreateComplete,
        element: <CompleteRegistrationPage />,
      },
    ],
  },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
