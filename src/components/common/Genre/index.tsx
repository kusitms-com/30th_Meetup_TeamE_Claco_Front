import { cn } from "@/lib/utils";
import { GenreProps } from "@/types/genre";

// const GENRE: GenreType[] = [
//   { type: "grand", content: "웅장한" },
//   { type: "delicate", content: "섬세한" },

//   { type: "classical", content: "고전적인" },
//   { type: "modern", content: "현대적인" },

//   { type: "lyrical", content: "서정적인" },
//   { type: "dynamic", content: "역동적인" },

//   { type: "romantic", content: "낭만적인" },
//   { type: "tragic", content: "비극적인" },

//   { type: "familiar", content: "친숙한" },
//   { type: "novel", content: "새로운" },
// ];

export const Genre = ({
  genreType,
  genreKeyword,
  className,
  isShow = false,
}: GenreProps) => {
  return (
    <div
      className={`flex-col items-center justify-center inline-block space-y-2 text-center ${className}`}
    >
      <img
        src={genreType}
        alt="공연 성격 키워드 이미지"
        className={cn(`w-12 h-12 object-contain`, className)}
      />
      {isShow ? null : (
        <div className={cn(`text-common-white body2-medium`, className)}>
          {/* {GENRE.find((genre) => genre.type === genreKeyword)?.content} */}
          {genreKeyword}
        </div>
      )}
    </div>
  );
};
