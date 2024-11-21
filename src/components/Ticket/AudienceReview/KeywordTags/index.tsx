import { ReviewTag } from "@/components/common/ReviewTag";
import useGetTagCategories from "@/hooks/queries/useGetTagCategories";
import { KeywordTagProps } from "@/types";

export const KeywordTags = ({ selectedTags, onTagClick }: KeywordTagProps) => {
  const { data: tagData, isLoading: isTagLoading } = useGetTagCategories();

  const tagCategories = tagData?.result?.categories;

  const handleClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagClick(tag);
    } else if (selectedTags.length < 5) {
      onTagClick(tag);
    }
  };

  if (isTagLoading) {
    return <div>로딩중</div>;
  }

  return (
    <div className="flex flex-col mt-8">
      <span className="body2-semibold text-grayscale-60">
        공연 성격에 해당되는 키워드를 5개 선택해주세요
      </span>
      <div className="flex flex-col mt-5 gap-[14px]">
        {[0, 4, 8].map((startIndex) => (
          <div className="flex gap-2" key={startIndex}>
            {tagCategories?.slice(startIndex, startIndex + 4).map((tag) => (
              <ReviewTag
                key={tag.tagCategoryId}
                onClick={() => handleClick(tag.tagName)}
                isSelected={selectedTags.includes(tag.tagName)}
                isPlace={true}
              >
                {tag.tagName}
              </ReviewTag>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
