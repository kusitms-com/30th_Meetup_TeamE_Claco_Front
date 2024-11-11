import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { CategoryTag } from "@/components/common/CategoryTag";

interface ShowSummaryCardProps {
  posterImage: string;
  showType: string;
  status: string;
  isLiked: boolean;
  toggleLike: () => void;
  title: string;
  location: string;
  date: string;
  keywords: string[];
}

export const ShowSummaryCard = ({
  posterImage,
  showType,
  status,
  isLiked,
  toggleLike,
  title,
  location,
  date,
  keywords,
}: ShowSummaryCardProps) => {
  return (
    <div className="flex items-center">
      <div className="relative">
        <img
          src={posterImage}
          alt="poster"
          className="w-[131px] h-[172px] rounded-[5px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[70px] bg-gradient-to-b from-[rgba(0,0,0,0.40)] to-[rgba(102,102,102,0.00)] pointer-events-none"></div>

        <div className="absolute top-[10px] left-2 ">
          {showType === "dance" && (
            <CategoryTag categoryType="dance">무용</CategoryTag>
          )}
          {showType === "classical" && (
            <CategoryTag categoryType="classical">클래식</CategoryTag>
          )}
        </div>

        <span className="absolute top-[13px] right-[10px]" onClick={toggleLike}>
          {isLiked ? (
            <Heart className="fill-grayscale-80" />
          ) : (
            <Heart className="fill-none" />
          )}
        </span>
      </div>

      <div className="flex flex-col ml-4 max-w-[207px]">
        <div className="flex flex-col max-w-[186px]">
          <span className="caption-12 text-grayscale-80 border border-grayscale-70 px-2 py-[3px] rounded-[20px] self-start mb-[9px]">
            {status === "upcoming"
              ? "공연 예정"
              : status === "inProgress"
                ? "공연 중"
                : "공연 종료"}
          </span>
          <span className="body2-semibold text-grayscale-80 mb-[10px]">
            {title}
          </span>
          <span className="caption-12 text-grayscale-70 mb-[1px]">
            {location}
          </span>
          <span className="caption-12 text-grayscale-50 mb-[7px]">{date}</span>

          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#3F3F3F] to-transparent mb-[10px]"></div>
        </div>

        <div className="flex overflow-x-auto whitespace-nowrap space-x-[6px] scrollbar-none">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="caption-12 px-[13px] py-1 rounded-[5px] bg-grayscale-20 text-grayscale-60"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
