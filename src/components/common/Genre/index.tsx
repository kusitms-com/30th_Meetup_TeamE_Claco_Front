import { ReactComponent as Grand } from "@/assets/svgs/Majestic.svg";
import { ReactComponent as Romantic } from "@/assets/svgs/Romantic.svg";
import { ReactComponent as Lyrical } from "@/assets/svgs/Lyrical.svg";
import { ReactComponent as Fresh } from "@/assets/svgs/Fresh.svg";
import { ReactComponent as Classical } from "@/assets/svgs/Classical.svg";
import { GenreProps, GenreType } from "@/types/genre";

const GENRE: GenreType[] = [
  { type: "Majestic", content: "웅장한" },
  { type: "Delicate", content: "섬세한" },

  { type: "Classical", content: "고전적인" },
  { type: "Modern", content: "현대적인" },

  { type: "Lyrical", content: "서정적인" },
  { type: "Dynamic", content: "역동적인" },

  { type: "Romantic", content: "낭만적인" },
  { type: "Tragic", content: "비극적인" },

  { type: "Familiar", content: "친숙한" },
  { type: "Fresh", content: "새로운" },
];

export const Genre = ({ genreType }: GenreProps) => {
  const genreLogo = () => {
    switch (genreType) {
      case "Majestic":
        return <Grand />;
      case "Delicate":
        return <Grand />;
      case "Classical":
        return <Classical />;
      case "Modern":
        return <Classical />;
      case "Lyrical":
        return <Lyrical />;
      case "Dynamic":
        return <Lyrical />;
      case "Romantic":
        return <Romantic />;
      case "Tragic":
        return <Grand />;
      case "Familiar":
        return <Grand />;
      case "Fresh":
        return <Fresh />;
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
