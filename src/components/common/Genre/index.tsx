import Grand from "@/assets/svgs/Grand.svg?react";
import Romantic from "@/assets/svgs/Romantic.svg?react";
import Elegant from "@/assets/svgs/Elegant.svg?react";
import Passionate from "@/assets/svgs/Passionate.svg?react";
import Classical from "@/assets/svgs/Classical.svg?react";
import { GenreProps, GenreType } from "@/types/genre";

const GENRE: GenreType[] = [
  { type: "Dynamic", content: "동화적인" },
  { type: "Classical", content: "고전적인" },
  { type: "Modern", content: "현대적인" },
  { type: "Romantic", content: "낭만적인" },
  { type: "Lyrical", content: "서사적인" },
  { type: "Elegant", content: "우아한" },
  { type: "Grand", content: "웅장한" },
  { type: "Passionate", content: "격정적인" },
  { type: "Restrained", content: "절제된" },
  { type: "Imaginative", content: "창의적인" },
  { type: "Innovative", content: "신비로운" },
  { type: "Natural", content: "자연적인" },
  { type: "Movie_ost", content: "영화 OST" },
  { type: "Spectacular", content: "회망적인" },
  { type: "Dramatic", content: "역동적인" },
  { type: "Calm", content: "잔잔한" },
  { type: "Majestic", content: "웅장한" },
];

export const Genre = ({ genreType }: GenreProps) => {
  const genreLogo = () => {
    switch (genreType) {
      case "Dynamic":
        return <Classical />;
      case "Classical":
        return <Classical />;
      case "Modern":
        return <Classical />;
      case "Romantic":
        return <Romantic />;
      case "Lyrical":
        return <Classical />;
      case "Elegant":
        return <Elegant />;
      case "Grand":
        return <Grand />;
      case "Passionate":
        return <Passionate />;
      case "Restrained":
        return <Classical />;
      case "Imaginative":
        return <Classical />;
      case "Innovative":
        return <Classical />;
      case "Natural":
        return <Classical />;
      case "Movie_ost":
        return <Classical />;
      case "Spectacular":
        return <Classical />;
      case "Dramatic":
        return <Classical />;
      case "Calm":
        return <Classical />;
      case "Majestic":
        return <Classical />;
      default:
        return null; // 또는 기본 아이콘을 반환할 수 있습니다
    }
  };

  const genreContent = () => {
    return GENRE.filter((genre) => genre.type === genreType)[0].content;
  };

  return (
    <div className="flex-col items-center justify-center inline-block space-y-2 text-center text-common-white">
      <span className="flex justify-center">{genreLogo()}</span>
      <div className="body2-medium">{genreContent()}</div>
    </div>
  );
};
