import { ReactComponent as ClacoMain } from "@/assets/svgs/Claco_Main.svg";
import { Genre } from "@/components/common/Genre";
import { MainPosterCard } from "@/components/Main/MainPosterCard";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const NearbyEventsSection = () => {
  return (
    <section>
      <div className="py-[22px] px-6">
        <div className="mb-[29px]">
          <ClacoMain />
        </div>
        <div className="mb-5 leading-8 text-grayscale-90 heading2-bold">
          달보라님의 클래식 취향
        </div>
        <div className="flex justify-between mb-12">
          <Genre genreType={"Majestic"} />
          <Genre genreType={"Romantic"} />
          <Genre genreType={"Lyrical"} />
          <Genre genreType={"Fresh"} />
          <Genre genreType={"Classical"} />
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
    </section>
  );
};

export default NearbyEventsSection;
