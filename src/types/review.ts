import { PlaceCategory, TagCategory } from "./category";

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

export type ReviewCardProps = {
  review: Review;
  onClick: () => void;
};

export type TicketReviewRequest = {
  concertId: number;
  clacoBookId: number;
  watchDate: string;
  watchRound: string;
  watchSit: string;
  starRate: number;
  casting: string;
  content: string;
  placeReviewIds: PlaceCategory[];
  tagCategoryIds: TagCategory[];
  files: File[];
};

export type TicketReviewResponse = {
  code: string;
  message: string;
  result: TicketReviewRequest;
  refreshed: boolean;
};
