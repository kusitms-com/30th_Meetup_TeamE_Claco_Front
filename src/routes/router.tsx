import Layout from "@/components/Layout";
import RoutePath from "./routePath";
import { createBrowserRouter, Outlet, RouteObject } from "react-router-dom";
import ScrollTop from "@/components/common/ScrollTop";

import { TosPage } from "@/pages/Tos/page";
import { LoginPage } from "@/pages/Login/page";
import { NicknameCreatePage } from "@/pages/Onboarding/UserRegistration/Nickname/page";
import { MainPage } from "@/pages/Main/page";
import { CompleteRegistrationPage } from "@/pages/Onboarding/CompleteRegistration/page";
import { SelectProfilePage } from "@/pages/Onboarding/UserRegistration/Profile/page";
import { SelectPricePage } from "@/pages/Onboarding/UserRegistration/Price/page";
import { SelectLocationPage } from "@/pages/Onboarding/UserRegistration/Location/page";
import { SelectConceptPage } from "@/pages/Onboarding/UserRegistration/Concept/page";
import { SelectFeaturePage } from "@/pages/Onboarding/UserRegistration/Feature/page";
import { ReviewPage } from "@/pages/Review/page";
import { ReviewDetailPage } from "@/pages/Review/[id]/page";
import { ShowDetailPage } from "@/pages/ShowDetail/page";
import { BrowsePage } from "@/pages/Browse/page";
import { ClacoBookPage } from "@/pages/TicketBook/page";
import { ClacoBookDetailPage } from "@/pages/TicketBook/[id]/page";
import { TicketInfoPage } from "@/pages/TicketCreate/Info/page";
import { TicketSearchPage } from "@/pages/TicketCreate/Search/page";
import { TicketReviewPage } from "@/pages/TicketCreate/Review/page";
import { TicketDownloadPage } from "@/pages/TicketCreate/Download/page";
import { ClacoTicketDetailPage } from "@/pages/Ticket/[id]/page";
import { MyPage } from "@/pages/Mypage/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <ScrollTop />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <LoginPage /> },
      { path: RoutePath.Tos, element: <TosPage /> },
      {
        path: RoutePath.Create,
        children: [
          { index: true, element: <NicknameCreatePage /> },
          { path: RoutePath.CreateProfile, element: <SelectProfilePage /> },
          { path: RoutePath.CreatePrice, element: <SelectPricePage /> },
          { path: RoutePath.CreateLocation, element: <SelectLocationPage /> },
          { path: RoutePath.CreateConcept, element: <SelectConceptPage /> },
          { path: RoutePath.CreateFeature, element: <SelectFeaturePage /> },
          {
            path: RoutePath.CreateComplete,
            element: <CompleteRegistrationPage />,
          },
        ],
      },
      {
        element: <Layout />,
        children: [{ path: RoutePath.Main, element: <MainPage /> }],
      },
      { path: RoutePath.Show, element: <ShowDetailPage /> },
      {
        path: RoutePath.ShowReviews,
        children: [
          { index: true, element: <ReviewPage /> },
          { path: RoutePath.ShowReviewDetail, element: <ReviewDetailPage /> },
        ],
      },
      {
        path: RoutePath.Browse,
        element: <Layout />,
        children: [{ index: true, element: <BrowsePage/> }],
      },
      {
        path: RoutePath.TicketBook,
        element: <Layout />,
        children: [{ index: true, element: <ClacoBookPage /> }],
      },
      { path: RoutePath.TicketDetail, element: <ClacoTicketDetailPage /> },
      { path: RoutePath.TicketBookDetail, element: <ClacoBookDetailPage /> },
      {
        path: RoutePath.TicketCreate,
        children: [
          { path: RoutePath.TicketSearch, element: <TicketSearchPage /> },
          { path: RoutePath.TicketInfo, element: <TicketInfoPage /> },
          { path: RoutePath.TicketReview, element: <TicketReviewPage /> },
          { path: RoutePath.TicketDownload, element: <TicketDownloadPage /> },
        ],
      },
      {
        path: RoutePath.MyPage,
        element: <Layout />,
        children: [{ index: true, element: <MyPage/> }],
      },
    ],
  },
  { path: "*", element: <div>Not found page</div> },
];

const Router = createBrowserRouter(routes);

export default Router;
