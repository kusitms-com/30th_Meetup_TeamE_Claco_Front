export type ReviewTagProps = {
  isPlace?: boolean;
  children: string;
  onClick?: () => void;
  isSelected?: boolean;
};

export type ReviewSummaryCardProps = {
  username: string;
  rating: number;
  reviewSummaryContent: string;
};

export type Review = {
  ticketReviewId: number;
  userName: string;
  profileImage: string;
  createdDate: string;
  watchSit: string;
  starRate: number;
  content: string;
  reviewImages: Array<{ imageUrl: string }>;
  placeReviews: Array<{
    placeCategoryId: number;
    categoryName: string;
  }>;
  tagReviews: Array<{
    tagCategoryId: number;
    tagName: string;
    iconUrl: string;
  }>;
};

export type OrederByType = "HIGH_RATE" | "LOW_RATE" | "RECENT";

export type GetConcertReviewListProps = {
  concertId: number;
  page: number;
  size: number;
  orderBy: OrederByType;
};

export type GetConcertReviewListResponse = {
  code: string;
  message: string;
  result: {
    totalPage: number;
    currentPage: number;
    size: number;
    reviewList: Review[];
  };
  refreshed: boolean;
};

export type GetConcertReviewInfiniteResponse = {
  pageParams: number[];
  pages: GetConcertReviewListResponse[];
};

export type ReviewCardProps = {
  review: Review;
  onClick: () => void;
};
