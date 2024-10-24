// import { useState } from "react";
// import Review from "@/assets/images/review.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Swiper as SwiperType } from "swiper";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/thumbs";

// import { FreeMode, Thumbs } from "swiper/modules";

import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Like } from "@/assets/svgs/Like.svg";
import { ReactComponent as Star } from "@/assets/svgs/StarRating.svg";

import Profile from "@/assets/images/profile.png";
import Review from "@/assets/images/review.png";
import { ReviewTag } from "@/components/common/ReviewTag";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ReviewDetailPage = () => {
  // const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(-1);
  };
  return (
    <div className="pt-[60px] px-6">
      <section className="relative flex justify-center mb-[53px]">
        <BackArrow onClick={gotoBack} className="absolute left-0" />
        <div className="headline2-bold">리뷰</div>
      </section>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-[10px]">
          <img
            src={Profile}
            alt="프로필 이미지"
            className="object-fill w-8 h-8 rounded-full"
          />
          <div className="headline2-bold">울랄라</div>
          <div className="flex items-center space-x-1 ml-[3px]">
            <Star />
            <div className="body2-medium text-secondary2-100/100">4.0</div>
          </div>
        </div>
        <div>
          <div className="caption-12 text-grayscale-50">2024.11.11</div>
        </div>
      </div>
      <div className="mb-4 body2-medium">
        크리스마스 밤, 클라라의 집에서 뭐가 벌어지는 것 같긴한데, 내용이 어떻게
        될까요. 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지
        않을까 지금은 열시..열심히 디자인 작업 중 입니다만 저는 모르겠습니다만
        이렇게 두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히
        디자인 작업 중 입니다만 화이탱~~!! 크리스마스 밤, 클라라의 집에서 뭐가
        벌어지는 것 같긴한데, 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게
        두줄이 넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인
        작업 중 입니다만 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이
        되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중 입니다만
        화이탱~~!! 내용이 어떻게 될까요. 저는 모르겠습니다만 이렇게 두줄이
        넘어가면 말줄임이 되어야 하지 않을까 지금은 열시..열심히 디자인 작업 중
        입니다만 저는 모르겠습니다만 이렇게 두줄이 넘어가면 말줄임이 되어야 하지
        않을까 지금은 열시다
      </div>
      <div className="flex space-x-[11px] mb-[35px]">
        <img
          src={Review}
          alt="리뷰 이미지"
          className="min-w-[90px] max-h-[90px] rounded-[5px]"
        />
        <img
          src={Review}
          alt="리뷰 이미지"
          className="min-w-[90px] max-h-[90px] rounded-[5px]"
        />
        <img
          src={Review}
          alt="리뷰 이미지"
          className="min-w-[90px] max-h-[90px] rounded-[5px]"
        />
      </div>
      <div className="mb-12">
        <div className="body2-medium mb-[15px]">공연 특징</div>
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
          <ReviewTag>웅장한</ReviewTag>
          <ReviewTag>섬세한</ReviewTag>
          <ReviewTag>고전적인</ReviewTag>
          <ReviewTag>현대적인</ReviewTag>
          <ReviewTag>서정적인</ReviewTag>
          <ReviewTag>역동적인</ReviewTag>
          <ReviewTag>낭만적인</ReviewTag>
          <ReviewTag>비극적인</ReviewTag>
          <ReviewTag>친숙한</ReviewTag>
          <ReviewTag>새로운</ReviewTag>
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="flex items-center justify-start space-x-2 mb-[15px]">
          <div className="body2-semibold">공연장</div>
          <div className="text-[12px] font-medium leading-normal tracking-[-0.02em] text-[#8A8585]">
            9층 B열 14번
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-x-2 gap-y-4">
          <ReviewTag isPlace={true}>시야가 탁 트혀있어요</ReviewTag>
          <ReviewTag isPlace={true}>주차 공간이 부족해요</ReviewTag>
          <ReviewTag isPlace={true}>좌석 간격이 넓어요</ReviewTag>
        </div>
      </div>
      <div className="pb-[170px]">
        <div
          className={`flex items-center space-x-1 ${isLiked ? "text-secondary2-100" : "text-grayscale-60"}`}
          onClick={() => setIsLiked((prev) => !prev)}
        >
          <Like />
          <span className="body2-medium">10</span>
        </div>
      </div>
    </div>
  );
};

// <div className="pt-[60px]">
//   <Swiper
//     loop={true}
//     spaceBetween={10}
//     thumbs={{ swiper: thumbsSwiper }}
//     modules={[FreeMode, Thumbs]}
//     className="mb-11"
//   >
//     <SwiperSlide>
//       <img src={Review} alt="리뷰 이미지" />
//     </SwiperSlide>
//     <SwiperSlide>
//       <img src={Review} alt="리뷰 이미지" />
//     </SwiperSlide>
//     <SwiperSlide>
//       <img src={Review} alt="리뷰 이미지" />
//     </SwiperSlide>
//   </Swiper>
//   <div className="px-6">
//     <Swiper
//       onSwiper={setThumbsSwiper}
//       loop={true}
//       spaceBetween={10}
//       slidesPerView={4}
//       freeMode={true}
//       watchSlidesProgress={true}
//       modules={[FreeMode, Thumbs]}
//     >
//       <SwiperSlide>
//         <img src={Review} alt="리뷰 이미지" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={Review} alt="리뷰 이미지" />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={Review} alt="리뷰 이미지" />
//       </SwiperSlide>
//     </Swiper>
//   </div>
// </div>
