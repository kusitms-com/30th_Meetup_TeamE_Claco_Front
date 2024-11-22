import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { ReviewCard } from "@/components/Review/ReviewCard";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useThumbnailModal } from "@/hooks/utils";
import { ThumbnailModal } from "@/components/common/Modal/ThumbnailModal";
import useRefFocusEffect from "@/hooks/utils/useRefFocusEffect";
import useGetConcertReviewList from "@/hooks/queries/useGetConcertReviewList";
import { OrederByType } from "@/types";
import { SelectThumbnail } from "@/hooks/utils/useThumbnailModal";
import useGetConcertReviewSize from "@/hooks/queries/useGetConcertReviewSize";

export type OptionType = {
  value: OrederByType;
  label: string;
};

const options: OptionType[] = [
  {
    value: "RECENT",
    label: "최신 순",
  },
  {
    value: "HIGH_RATE",
    label: "별점 높은 순",
  },
  {
    value: "LOW_RATE",
    label: "별점 낮은 순",
  },
];

export const ReviewPage = () => {
  const { id } = useParams();
  const [selectOption, setSelectOption] = useState<OptionType>({
    value: options[0].value,
    label: options[0].label,
  });

  const {
    data: reviewList,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetConcertReviewList({
    concertId: Number(id),
    size: 9,
    orderBy: selectOption.value,
  });

  const { data: reviewTotalCount } = useGetConcertReviewSize(Number(id));

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    thumbsSwiper,
    isThumbnailShow,
    isAnimating,
    selectIndex,
    setThumbsSwiper,
    setSelectIndex,
    handleImageClick,
  } = useThumbnailModal();

  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };

  const handlePreviewImage = (index: SelectThumbnail) => {
    setSelectIndex(index);
    handleImageClick();
  };

  const { elementRef } = useRefFocusEffect<HTMLDivElement>(fetchNextPage, [
    reviewList,
  ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {reviewList && reviewList?.pages[0].result.reviewList.length > 0 && (
        <ThumbnailModal
          isShow={isThumbnailShow}
          isAnimating={isAnimating}
          thumbsSwiper={thumbsSwiper}
          selectIndex={0}
          images={
            (reviewList &&
              reviewList?.pages[selectIndex.page - 1].result.reviewList[
                selectIndex.index
              ]?.reviewImages.map((img) => img.imageUrl)) ||
            []
          }
          onClose={handleImageClick}
          setThumbsSwiper={setThumbsSwiper}
        />
      )}

      <div className="pt-[60px] px-6">
        <section className="relative flex justify-center mb-[53px]">
          <BackArrow onClick={gotoBack} className="absolute left-0" />
          <div className="headline2-bold">리뷰</div>
        </section>

        <section className="flex-col space-y-[10px] mb-[3px]">
          <div className="flex space-x-2">
            <CategoryTag categoryType="무용" />
            <CategoryTag categoryType="공연중" />
          </div>
          <div className="flex-col">
            <div className="heading2-bold">
              유니버설발레단 〈호두까기 인형〉 - 성남
            </div>
            <div className="body2-medium text-grayscale-60">
              리뷰 {reviewTotalCount?.result.total}개
            </div>
          </div>
        </section>

        <section>
          <div
            ref={dropdownRef}
            className="relative flex items-center justify-end w-[80px] ml-auto space-x-2 cursor-pointer text-common-white mb-[19px]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="caption-13">{selectOption.label}</div>
            <BackArrow
              width="4"
              height="8"
              viewBox="0 0 11 20"
              className={`transition-transform duration-300 ease-in-out ${isOpen ? "rotate-90" : "-rotate-90"} `}
            />
            <div
              className={`absolute top-6 bg-grayscale-10 py-[10px] px-5 rounded-[5px] transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {isOpen && (
                <ul className="text-center caption-13 space-y-[12px] w-[65px]">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() =>
                        setSelectOption({
                          value: option.value,
                          label: option.label,
                        })
                      }
                      className={`${selectOption.value === option.value ? "text-common-white" : "text-grayscale-60"}`}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex-col space-y-[11px] pb-[100px]">
            {reviewList &&
              reviewList?.pages.flatMap((page) =>
                page.result.reviewList.map((review, index) => (
                  <ReviewCard
                    key={review.ticketReviewId}
                    review={review}
                    onClick={() =>
                      review.reviewImages.length &&
                      handlePreviewImage({
                        page: page.result.currentPage,
                        index: index,
                      })
                    }
                  />
                ))
              )}
            {/* 추가 데이터 로드 */}
            {isFetchingNextPage && (
              <div className="mt-4 text-center">
                <span>로딩 중...</span>
              </div>
            )}
          </div>
        </section>
      </div>
      <div ref={elementRef} className="h-1" />
    </div>
  );
};
