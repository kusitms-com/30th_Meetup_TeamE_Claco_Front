export type InfoCardProps = {
  image: string;
  title: string;
  location: string;
  date: string;
};

export type Category = "dance" | "classical" | "ongoing" | "upcoming";

export type CategoryTagProps = {
  categoryType: Category;
  children: React.ReactNode;
};
