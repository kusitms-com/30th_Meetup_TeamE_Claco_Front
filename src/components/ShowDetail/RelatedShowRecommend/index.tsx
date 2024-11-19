import { Swiper, SwiperSlide } from "swiper/react";
import { VerticalInfoCard } from "@/components/Main/InformationCard";
import Poster6 from "@/assets/images/poster6.gif";
import Poster9 from "@/assets/images/poster9.gif";
import Poster11 from "@/assets/images/poster11.gif";
import { forwardRef } from "react";

const RelatedShowsRecommend = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="px-6 pb-[161px]">
        <span className="headline2-bold text-grayscale-80">
          이 공연도 마음에 들 거예요!
        </span>
        <section className="mt-6">
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
                dateFrom={"2024-11-30 (토요일)"}
                dateTo={"2024-11-30 (토요일)"}
                genre={"무용"}
              />
            </SwiperSlide>
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster9}
                title={"피터팬"}
                location={"예술의 전당 오페라 극장"}
                dateFrom={"2024-11-30 (토요일)"}
                dateTo={"2024-11-30 (토요일)"}
                genre={"무용"}
              />
            </SwiperSlide>
            <SwiperSlide className="w-[231px]">
              <VerticalInfoCard
                image={Poster11}
                title={"The Night In NewYork"}
                location={"예술의 전당 오페라 극장"}
                dateFrom={"2024-11-30 (토요일)"}
                dateTo={"2024-11-30 (토요일)"}
                genre={"무용"}
              />
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </section>
  );
});

export default RelatedShowsRecommend;
