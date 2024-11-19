export type InfoCardProps = {
  image: string;
  title: string;
  location: string;
  dateFrom: string;
  dateTo: string;
  genre: string;
};

// export type Category = "무용" | "서양음악(클래식)" | "ongoing" | "upcoming";

export type CategoryTagProps = {
  categoryType: string;
  className?: string;
};
