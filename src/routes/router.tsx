import { LoginPage } from "@/pages/Login/page";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import RoutePath from "./routePath";
import Layout from "@/components/Layout";

const routes: RouteObject[] = [
  {
    path: RoutePath.Login,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
