const RoutePath = {
  /*로그인 페이지 */
  Login: "/",

  /*약관동의 페이지 */
  Tos: "/tos",

  /*온보딩 관련 페이지 */
  Create: "/create",
  CreateProfile: "/create/profile",
  CreatePrice: "/create/price",
  CreateLocation: "/create/location",
  CreateConcept: "/create/concept",
  CreateFeature: "/create/feature",
  CreateComplete: "/create/complete",

  /*메인 페이지 */
  Main: "/main",

  /*공연 상세보기 페이지 */
  Show: "/show/:id",

  /*공연 리뷰 보기 페이지 */
  ShowReviews: "/show/:id/reviews",
  ShowReviewDetail: "/show/:id/reviews/:reviewId",

  /*티켓 등록 페이지 */
  Ticket: "/ticket",
  TicketTitle: "/ticket/create",
  TicketDetail: "/ticket/create/detail",
  TicketReview: "/ticket/create/review",
  TicketDownload: "/ticket/create/download",
  
  /*마이 페이지 */
  MyPage: "/mypage",
} as const;

export default RoutePath;
