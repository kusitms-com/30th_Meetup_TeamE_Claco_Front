export type SearchBarProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  children: string;
};

export type SearchCardProps = {
  id?: number;
  title: string;
  date: string;
  onClick?: () => void;
  className?: string;
  categoryType: "classical" | "dance";
};

export type KeywordTagProps = {
  selectedTags: string[];
  onTagClick: (tag: string) => void;
};

export type ReviewQuestionProps = {
  title: string;
  tags: string[];
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
};

export type ReviewContentsProps = {
  value: string;
  onChange: (text: string) => void;
  files: File[];
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type SeatQuestionsProps = {
  selectedTag1: string | null;
  selectedTag2: string | null;
  onTagClick1: (tag: string) => void;
  onTagClick2: (tag: string) => void;
};

export type StarRatingProps = {
  rating: number;
  onRatingChange: (newRating: number) => void;
};
