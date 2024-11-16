import { CategoryTag } from "@/components/common/CategoryTag";
import { SearchCardProps } from "@/types";
import { HighlightText } from "../HighLight";

export const SearchCard = ({
  id,
  title,
  date,
  categoryType,
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
      <CategoryTag
        categoryType={categoryType}
        className={`${categoryType === "classical" ? "mr-[10px]" : "mr-[20px]"}`}
      >
        {categoryType === "classical" ? "클래식" : "무용"}
      </CategoryTag>
      <div className="flex flex-col gap-1 body2-medium text-grayscale-80">
        <span className="max-w-[253px] truncate">
          <HighlightText text={title} highlight={searchKeyWord} />
        </span>
        <span>{date}</span>
      </div>
    </div>
  );
};
