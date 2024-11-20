import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { ConcertInfo } from "@/types";
import { useState } from "react";

interface ShowSummaryCardProps {
  data: ConcertInfo;
}

export const extractDateRange = (fromDate: string, toDate: string): string => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}.${String(date.getDate()).padStart(2, "0")}`;
  };
  if (fromDate && toDate) {
    if (fromDate === toDate) {
      return formatDate(fromDate);
    } else {
      return `${formatDate(fromDate)} ~ ${formatDate(toDate)}`;
    }
  }
  return "공연 기간 정보 없음";
};

export const ShowSummaryCard = ({ data }: ShowSummaryCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <div className="flex items-center">
      <div className="relative">
        <img
          src={data.poster}
          alt="poster"
          className="w-[131px] h-[172px] rounded-[5px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-[70px] bg-gradient-to-b from-[rgba(0,0,0,0.40)] to-[rgba(102,102,102,0.00)] pointer-events-none"></div>

        <div className="absolute top-[10px] left-2 ">
          <CategoryTag categoryType={data.genrenm} />
        </div>

        <span
          className="absolute top-[13px] right-[10px]"
          onClick={() => setIsLiked((prev) => !prev)}
        >
          {isLiked ? (
            <Heart className="fill-grayscale-80" />
          ) : (
            <Heart className="fill-none" />
          )}
        </span>
      </div>

      <div className="flex flex-col ml-4 max-w-[207px]">
        <div className="flex flex-col min-w-[186px]">
          <span className="caption-12 text-grayscale-80 border border-grayscale-70 px-2 py-[3px] rounded-[20px] self-start mb-[9px]">
            {data.prfstate}
          </span>
          <span className="body2-semibold text-grayscale-80 mb-[10px]">
            {data.prfnm}
          </span>
          <span className="caption-12 text-grayscale-70 mb-[1px]">
            {data.fcltynm}
          </span>
          <span className="caption-12 text-grayscale-50 mb-[7px]">
            {extractDateRange(data.prfpdfrom, data.prfpdto)}
          </span>

          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#3F3F3F] to-transparent mb-[10px]"></div>
        </div>

        <div className="flex overflow-x-auto whitespace-nowrap space-x-[6px] scrollbar-hide">
          {data.categories.map((category, index) => (
            <span
              key={index}
              className="caption-12 px-[13px] py-1 rounded-[5px] bg-grayscale-20 text-grayscale-60"
            >
              {category.category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
