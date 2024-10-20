import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import { LoginPage } from "@/pages/Login/page";
import { MainPage } from "@/pages/Main/page";
import RoutePath from "./routePath";
import Layout from "@/components/Layout";
import { ReviewPage } from "@/pages/Review/page";
import { ReviewDetailPage } from "@/pages/Review/[id]/page";

const routes: RouteObject[] = [
  {
    path: RoutePath.Login,
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <LoginPage />,
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
      {
        path: RoutePath.Review,
        children: [
          {
            index: true,
            element: <ReviewPage />,
          },
          {
            path: ":id",
            element: <ReviewDetailPage />,
          },
        ],
      },
    ],
  },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
