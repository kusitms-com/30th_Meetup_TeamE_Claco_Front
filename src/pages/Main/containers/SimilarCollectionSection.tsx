import Location from "@/assets/svgs/Location.svg?react";
import Poster6 from "@/assets/images/poster6.gif";
import Poster9 from "@/assets/images/poster9.gif";
import Poster11 from "@/assets/images/poster11.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { VerticalInfoCard } from "@/components/Main/InformationCard";

const SimilarCollectionSection = () => {
  return (
    <section>
      <div className="w-full h-[62px] bg-gradient-to-b from-secondary-300/60 to-background-dark opacity-40 shadow-main"></div>
      <div className="py-[22px] px-6">
        <section className="mb-[34px]">
          <div className="leading-8 text-grayscale-90 heading2-bold">
            울랄라님 주변에서 <br />
            이런 공연을 하고 있어요
          </div>
          <div className="flex items-center mt-5">
            <Location />
            <span className="mr-3 text-secondary heading2-bold">
              현재 내 위치
            </span>
            <span className="text-grayscale-90 body1-medium">서울 성북구</span>
          </div>
        </section>

        <section className="mb-[60px]">
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            className="max-w-screen-sm"
          >
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster6}
                title={"라 바야데르"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster9}
                title={"피터팬"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster11}
                title={"The Night In NewYork"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </section>
  );
};

export default SimilarCollectionSection;
