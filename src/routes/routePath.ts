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

  /*클라코북 페이지 */
  TicketBook: "/ticketbook",
  TicketBookDetail: "/ticketbook/:id",

  /*클라코 티켓 페이지 */
  TicketDetail: "/ticket/:id",

  /*클라코 티켓 등록 페이지 */
  TicketCreate: "/ticketcreate",
  TicketSearch: "/ticketcreate/search",
  TicketInfo: "/ticketcreate/info",
  TicketReview: "/ticketcreate/review",
  TicketDownload: "/ticketcreate/download",
} as const;

export default RoutePath;
