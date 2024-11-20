import { CategoryTag } from "@/components/common/CategoryTag";
import { SearchCardProps } from "@/types";
import { HighlightText } from "../HighLight";

export const SearchCard = ({
  id,
  title,
  date,
  onClick,
  className,
  searchKeyWord = "",
}: SearchCardProps) => {
  return (
    <div
      className={`flex rounded-[5px] bg-grayscale-30 pl-[14px] pr-5 py-[19px] border border-grayscale-30 cursor-pointer ${className}`}
      onClick={onClick}
      data-id={id}
    >
      {/* 임시 */}
      <CategoryTag categoryType="서양음악(클래식)" className="mr-[10px]" />
      {/* <CategoryTag
        categoryType={categoryType}
        className={`${categoryType === "서양무용(클래식)" ? "mr-[10px]" : "mr-[20px]"}`}
      /> */}

      <div className="flex flex-col gap-1 body2-medium text-grayscale-80">
        <span className="max-w-[253px] truncate">
          <HighlightText text={title} highlight={searchKeyWord} />
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
};
