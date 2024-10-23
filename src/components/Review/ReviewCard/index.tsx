import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Like } from "@/assets/svgs/Like.svg";
import { ReactComponent as Star } from "@/assets/svgs/StarRating.svg";

import Review from "@/assets/images/review.png";
import Profile from "@/assets/images/profile.png";
import { useTruncateText } from "@/hooks";
import { useState } from "react";
import { ReviewTag } from "@/components/common/ReviewTag";
import { useNavigate } from "react-router-dom";

export const ReviewCard = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigate = useNavigate();
  const gotoReviewDetail = () => {
    navigate("/show/1/reviews/1");
  };
  const _review =
    "크리스마스 밤, 클라라의 집에서 뭐가 벌어지는 것 같긴한데, 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까";

  return (
    <div className="py-5 pl-[17px] pr-5 bg-grayscale-20 text-grayscale-80 rounded-[5px]">
      <div className="flex justify-between mb-[17px]">
        <div className="flex items-center space-x-[10px]">
          <img
            src={Profile}
            alt="프로필 이미지"
            className="object-fill w-8 h-8 rounded-full"
          />
          <div className="headline2-bold">울랄라</div>
        </div>
        <div
          className={`flex items-center space-x-1 ${isLiked ? "text-secondary2-100" : "text-grayscale-60"}`}
          onClick={() => setIsLiked((prev) => !prev)}
        >
          <Like />
          <span className="body2-medium">10</span>
        </div>
      </div>

      <div className="flex space-x-[14px] max-h-[90px] mb-[19px]">
        <div className="relative">
          <img
            src={Review}
            alt="공연 이미지"
            className="min-w-[90px] h-[90px] rounded-[5px]"
          />
          <div className="absolute bottom-0 right-0 w-[19px] h-[19px] bg-[#8A8585] text-center caption-12 rounded-br-[5px]">
            3
          </div>
        </div>
        <div className="flex-col space-y-2">
          <div className="flex items-center space-x-1">
            <Star />
            <div className="body2-medium text-secondary2-100/100">4.0</div>
          </div>
          <div className="body2-medium">{useTruncateText(_review, 50)}</div>
        </div>
      </div>

      <div className="flex items-center justify-start space-x-2 mb-[10px]">
        <div className="body2-semibold">공연장</div>
        <div className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-[#8A8585]">
          9층 B열 14번
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto scrollbar-hide mb-[19px]">
        <ReviewTag>음향이 좋아요</ReviewTag>
        <ReviewTag>음향이 나빠요</ReviewTag>
        <ReviewTag>좌석 간격이 넓어요</ReviewTag>
        <ReviewTag>좌석 간격이 좁아요</ReviewTag>
        <ReviewTag>좌석이 편안해요</ReviewTag>
        <ReviewTag>좌석이 불편해요</ReviewTag>
        <ReviewTag>시야가 탁 트여있어요</ReviewTag>
        <ReviewTag>시야 확보가 어려워요</ReviewTag>
        <ReviewTag>주차가 편리해요</ReviewTag>
        <ReviewTag>주차 공간이 부족해요</ReviewTag>
      </div>

      <div className="flex justify-between caption-12">
        <div className="text-grayscale-50">2024.11.11</div>
        <div className="flex items-center space-x-2 text-grayscale-60">
          <div onClick={gotoReviewDetail}>더 보기</div>
          <BackArrow
            width="5"
            height="11"
            viewBox="0 0 11 20"
            className="-rotate-180"
          />
        </div>
      </div>
    </div>
  );
};
