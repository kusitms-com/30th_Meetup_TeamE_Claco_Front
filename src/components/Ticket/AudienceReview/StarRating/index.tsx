import { ReactComponent as HalfStar } from "@/assets/svgs/halfStarRating.svg";
import { ReactComponent as FullStar } from "@/assets/svgs/StarRating.svg";
import { ReactComponent as Required } from "@/assets/svgs/required.svg";
import { StarRatingProps } from "@/types";

export const StarRating = ({ rating, onRatingChange }: StarRatingProps) => {
  return (
    <div className="flex flex-col mt-[29px] gap-[29px]">
      <div className="flex">
        <span className="headline2-bold text-grayscale-80">
          Q. 공연은 어떠셨나요?
        </span>
        <Required />
      </div>
      <div className="flex gap-[10px]">
        {[1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="relative">
            <HalfStar
              width="11"
              height="19"
              viewBox="0 0 11 19"
              className={`absolute cursor-pointer ${
                rating >= index - 0.5
                  ? "text-secondary2-100/100"
                  : "text-grayscale-40"
              }`}
              onClick={() => onRatingChange(index - 0.5)}
            />
            <FullStar
              width="20"
              height="20"
              viewBox="0 0 13 13"
              className={`cursor-pointer ${
                rating >= index
                  ? "text-secondary2-100/100"
                  : "text-grayscale-40"
              }`}
              onClick={() => onRatingChange(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
