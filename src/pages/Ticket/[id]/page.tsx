import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Trash } from "@/assets/svgs/trash.svg";
import { ReactComponent as Edit } from "@/assets/svgs/Edit.svg";
import { ReactComponent as Star } from "@/assets/svgs/StarRating.svg";
import { useNavigate } from "react-router-dom";
import { DeleteClacoTicketModal } from "@/components/Ticket/Modal/Delete/ClacoTicket";
import { useState } from "react";
import { CategoryTag } from "@/components/common/CategoryTag";
import ClacoTicketImage1 from "@/assets/images/MyClacoTicket1.png";
import { PerformanceAttributes } from "@/components/Ticket/PerformanceAttributes";

import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import modern from "@/assets/images/Genre/modern.png";
import lyrical from "@/assets/images/Genre/lyrical.png";
import { REVIEW_MOCK_DATA } from "@/components/Review/ReviewCard/const";
import { ReviewTag } from "@/components/common/ReviewTag";

export const ClacoTicketDetailPage = () => {
  const USER_GENRE = [
    { imgURL: grand, category: "grand" },
    { imgURL: delicate, category: "delicate" },
    { imgURL: classical, category: "classical" },
    { imgURL: modern, category: "modern" },
    { imgURL: lyrical, category: "lyrical" },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative flex flex-col pt-[46px] items-center justify-center px-6 mb-[234px]">
      <div className="flex justify-between items-center w-full mb-[27px] h-[26px]">
        <BackArrow onClick={gotoBack} />
        <Trash onClick={() => setIsModalOpen(true)} />
      </div>
      <div className="flex-col justify-start w-full space-y-2 mb-[54px]">
        <CategoryTag categoryType="dance">무용</CategoryTag>
        <div className="heading2-bold">
          유니버설발레단 〈호두까기 인형〉 - 성남
        </div>
      </div>
      <div className="mb-[60px]">
        <img
          src={ClacoTicketImage1}
          alt="클라코 티켓 이미지"
          className="w-[213px] h-[471px]"
        />
      </div>
      <div className="w-full h-[154px] bg-grayscale-20 px-[27px] pt-[18px] pb-[45px] rounded-[5px] mb-12">
        <PerformanceAttributes
          categories={USER_GENRE}
          title={"공연을 보며 이런 느낌이 떠올랐어요"}
        />
      </div>
      <div className="flex flex-col w-full space-y-5">
        <div className="flex items-center justify-start gap-[5px]">
          <div className="headlin2-bold">나의 공연 감상</div>
          <Edit
            viewBox="0 0 18 18"
            width={14}
            height={14}
            className="text-grayscale-60"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[3px] text-secondary2-100/100">
            <Star />
            <div className="body2-medium">4.0</div>
          </div>
          <div className="caption-12 text-grayscale-50">2024.11.11 작성</div>
        </div>
        <div className="mb-4 body2-medium">
          {REVIEW_MOCK_DATA[4].reviewContent}
        </div>
        <div className="flex space-x-[11px] mb-[35px] overflow-scroll scrollbar-hide">
          {REVIEW_MOCK_DATA[1].reviewImageList?.map((image, index) => (
            <img
              // onClick={() => {
              //   handleImageClick();
              //   setSelectIndex(index);
              // }}
              key={index}
              src={image}
              alt="리뷰 이미지"
              className="min-w-[90px] max-h-[90px] rounded-[5px]"
            />
          ))}
        </div>
        <div className="mb-[60px]">
          <div className="headline2- mb-[15px]">공연장</div>
          <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
            {REVIEW_MOCK_DATA[4].locationReview.map((lReview, index) => (
              <ReviewTag key={index} isPlace={true}>
                {lReview}
              </ReviewTag>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-5 headline2-bold">관람 정보</div>
          <div className="grid grid-cols-[100px_1fr] gap-y-4">
            <div className="headline2-bold text-grayscale-70">관람 날짜</div>
            <div className="body1-regular text-grayscale-90">2024.10.10</div>

            <div className="headline2-bold text-grayscale-70">공연장소</div>
            <div className="body1-regular text-grayscale-90">세종문화회관</div>

            <div className="headline2-bold text-grayscale-70">회차</div>
            <div className="body1-regular text-grayscale-90">19:30</div>

            <div className="headline2-bold text-grayscale-70">캐스팅</div>
            <div className="body1-regular text-grayscale-90">유서진 정의연</div>

            <div className="headline2-bold text-grayscale-70">좌석</div>
            <div className="flex items-center body1-regular text-grayscale-90">
              9층 B열 14번
            </div>
          </div>
        </div>
      </div>
      {/* 모달 컴포넌트 영역 */}
      {isModalOpen && (
        <DeleteClacoTicketModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => null}
        />
      )}
    </div>
  );
};
