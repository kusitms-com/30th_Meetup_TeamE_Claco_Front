import { MainPosterCard } from "@/components/Main/MainPosterCard";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useUserStore } from "@/libraries/store/user";

export const AIRecommend = () => {
  const nickname = useUserStore((state) => state.nickname);

  return (
    <div className="py-[22px] px-6">
      <div className="mb-5 leading-8 text-grayscale-90 heading2-bold">
        {nickname}님만의 취향을 담은
        <br />
        공연을 준비했어요
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
