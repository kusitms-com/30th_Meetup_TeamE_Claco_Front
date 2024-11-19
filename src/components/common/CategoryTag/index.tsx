import { CategoryTagProps } from "@/types";

export const CategoryTag = ({ categoryType, className }: CategoryTagProps) => {
  const tagStyle = () => {
    switch (categoryType) {
      case "서양음악(클래식)":
        return "bg-[#6370E4]";
      case "무용":
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
      className={`max-h-6 inline-flex items-center caption-12 text-common-white rounded-[20px] px-2 py-[3px] ${tagStyle()} ${className}`}
    >
      {categoryType === "서양음악(클래식)"
        ? "클래식"
        : categoryType === "무용"
          ? "무용"
          : categoryType === "ongoing"
            ? "공연 중"
            : "공연 예정"}
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
