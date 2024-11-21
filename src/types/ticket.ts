import { PlaceCategory, TagCategory } from "./category";

export type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  placeholder: string;
};

export type SearchCardProps = {
  id?: number;
  title: string;
  date: string;
  onClick?: () => void;
  className?: string;
  categoryType: "classical" | "dance";
  searchKeyWord?: string;
};

export type KeywordTagProps = {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
  tagCategories: TagCategory[];
};

export type ReviewQuestionProps = {
  selectedSoundTag: string | null;
  setSelectedSoundTag: (value: string | null) => void;
  selectedSeatTag1: string | null;
  setSelectedSeatTag1: (value: string | null) => void;
  selectedSeatTag2: string | null;
  setSelectedSeatTag2: (value: string | null) => void;
  selectedSightTag: string | null;
  setSelectedSightTag: (value: string | null) => void;
  selectedAccessibilityTag: string | null;
  setSelectedAccessibilityTag: (value: string | null) => void;
  placeCategories: PlaceCategory[];
};

export type TextReviewProps = {
  value: string;
  onChange: (text: string) => void;
};

export type ImageReviewProps = {
  files: File[];
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ReviewContentProps = TextReviewProps & ImageReviewProps;

export type StarRatingProps = {
  rating: number;
  onRatingChange: (newRating: number) => void;
};

export type GenreTag = {
  tagCategoryId: number;
  tagName: string;
  iconUrl: string;
};

export type PlaceReview = {
  placeCategoryId: number;
  categoryName: string;
};

export type ImageUrl = {
  imageUrl: string;
};

export type TicketReview = {
  ticketReviewId: number;
  concertName: string;
  nickname: string;
  watchDate: string;
  createdDate: string;
  watchPlace: string;
  watchRound: string;
  runningTime: string;
  castings: string;
  watchSit: string;
  concertTags: GenreTag[];
  starRate: number;
  content: string;
  placeReviews: PlaceReview[];
  imageUrlS: ImageUrl[];
  editor: boolean;
};

export type ClacoBookList = {
  id: number;
  title: string;
  color: string;
};

export type ClacoBookListResult = {
  clacoBookList: ClacoBookList[];
};

export type ClacoBookListResponse = {
  code: string;
  message: string;
  result: ClacoBookListResult;
  refreshed: boolean;
};
