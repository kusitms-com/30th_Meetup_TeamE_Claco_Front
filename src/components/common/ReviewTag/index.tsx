import { ReviewTagProps } from "@/types/review";

export const ReviewTag = ({ isPlace = false, children }: ReviewTagProps) => {
  return (
    <div
      className={`rounded-[50px] bg-grayscale-30 inline-flex caption-13 px-[13px] ${isPlace ? "py-[8.5px]" : "py-[5.5px]"} whitespace-nowrap`}
    >
      {children}
    </div>
  );
};
