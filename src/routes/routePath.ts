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
} as const;

export default RoutePath;
