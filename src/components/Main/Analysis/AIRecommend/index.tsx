import { MainPosterCard } from "@/components/Main/MainPosterCard";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export const AIRecommend = () => {
  return (
    <div className="py-[22px] px-6">
      <div className="mb-5 leading-8 text-grayscale-90 heading2-bold">
        클라코의 AI가 클래식 취향 키워드를
        <br /> 분석하여 추천한 작품들이에요
      </div>
      <div className="relative flex justify-center h-[555px]">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={100}
          className="max-w-[342px] rounded-[5px]"
        >
          <SwiperSlide>
            <MainPosterCard />
          </SwiperSlide>
          <SwiperSlide>
            <MainPosterCard />
          </SwiperSlide>
          <SwiperSlide>
            <MainPosterCard />
          </SwiperSlide>
          <SwiperSlide>
            <MainPosterCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
