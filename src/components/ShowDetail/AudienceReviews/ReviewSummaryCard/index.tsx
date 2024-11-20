import { ReactComponent as StarRating } from "@/assets/svgs/StarRating.svg";
import { TicketSimpleReview } from "@/types";
import { useParams } from "react-router-dom";

export const ReviewSummaryCard = ({
  ticketReviewId,
  nickname,
  starRate,
  content,
}: TicketSimpleReview) => {
  const { id } = useParams<{ id: string }>();
  return (
    <div className="w-[194px] y-[112px] py-[14px] pl-4 pr-[14px] bg-grayscale-40 rounded-[5px]">
      <div className="flex relative h-[22px] mb-[15px]">
        <div className="flex items-center body2-semibold pt-[3px]">
          <span className="truncate max-w-[50px] text-white mr-[5px]">
            {nickname}
          </span>
          <StarRating className="text-secondary-2" />
          <span className="text-secondary-2 ml-[3px]">
            {starRate.toFixed(1)}
          </span>
        </div>
        <a
          href={`/show/${id}/reviews/${ticketReviewId}`}
          className="absolute top-0 right-1 caption-12 text-grayscale-60 underline self-start pb-1"
        >
          더 보기
        </a>
      </div>

      <span className="body2-semibold text-white leading-none tracking-[-0.28px]">
        {content}
      </span>
    </div>
  );
};
