import { CategoryTagProps } from "@/types";

export const CategoryTag = ({ categoryType, children }: CategoryTagProps) => {
  const TagStyle = () => {
    switch (categoryType) {
      case "dance":
        return "bg-[#6370E4]";
      case "classical":
        return "bg-primary-700";
      case "ongoing":
        return "border-[1px] border-grayscale-70";
      case "upcoming":
        return "border-[1px] border-grayscale-70";
      default:
        return;
    }
  };
  return (
    <div
      className={`max-h-6 inline-flex items-center caption-12 text-common-white rounded-[20px] px-2 py-[3px] ${TagStyle()}`}
    >
      {children}
    </div>
  );
};

/**
 * 사용 예시
 * <CategoryTag categoryType="dance">무용</CategoryTag>
 * <CategoryTag categoryType="classical">클래식</CategoryTag>
 * <CategoryTag categoryType="ongoing">공연 중</CategoryTag>
 * <CategoryTag categoryType="upcoming">공연 예정</CategoryTag>
 *
 */
