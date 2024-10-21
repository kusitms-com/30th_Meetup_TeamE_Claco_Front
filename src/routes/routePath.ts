const RoutePath = {
  /*로그인 페이지*/
  Login: "/",

  /*메인 페이지*/
  Main: "/main",

  /*약관 동의 페이지*/
  Tos: "/tos",

  /*닉네임 등록 페이지*/
  Create: "/create",

  /*취향 등록 페이지 - 성별, 연령대*/
  CreateProfile: "/create/profile",

  /*취향 등록 페이지 - 가격*/
  CreatePrice: "/create/price",

  /*취향 등록 페이지 - 위치*/
  CreateLocation: "/create/location",

  /*취향 등록 페이지 - 유형*/
  CreateConcept: "/create/concept",

  /*취향 등록 페이지 - 특징*/
  CreateFeature: "/create/feature",

  /*취향 등록 완료 페이지*/
  CreateComplete: "/create/complete",

  /*리뷰 페이지*/
  Review: "/review",
} as const;

export default RoutePath;
