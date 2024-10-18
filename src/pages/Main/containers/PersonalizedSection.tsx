import { Genre } from "@/components/common/Genre";
import Poster7 from "@/assets/images/poster7.gif";
import Poster12 from "@/assets/images/poster12.gif";
import { HorizontalInfoCard } from "@/components/Main/InformationCard";

import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const PersonalizedSection = () => {
  return (
    <section>
      <div className="w-full h-[62px] bg-gradient-to-b from-[#F37D55]/60 to-background-dark opacity-50 shadow-main"></div>
      <div className="py-[22px] px-6">
        <div className="mb-[30px] leading-8 text-grayscale-90 heading2-bold">
          방금 본 <br />
          후지타 마오 피아노 리사이틀과
          <br />
          비슷한 작품들이에요
        </div>

        {/* 디자인 수정 예상 */}
        <div className="flex justify-between mb-[53px]">
          <Genre genreType={"Grand"} />
          <Genre genreType={"Romantic"} />
          <Genre genreType={"Passionate"} />
          <Genre genreType={"Elegant"} />
          <Genre genreType={"Classical"} />
        </div>
        <div className="flex justify-center mb-8">
          <img
            src={Poster12}
            alt="poster"
            className="w-[203px] h-[267px] rounded-[5px]"
          />
        </div>
        <div className="flex justify-center mb-[33px]">
          <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={100}
            className="max-w-[341px] rounded-[5px] relative h-[289px]"
          >
            <SwiperSlide>
              <HorizontalInfoCard
                image={Poster7}
                title={"정명훈 & 라 페니체 오케스트라"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HorizontalInfoCard
                image={Poster7}
                title={"정명훈 & 라 페니체 오케스트라"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HorizontalInfoCard
                image={Poster7}
                title={"정명훈 & 라 페니체 오케스트라"}
                location={"예술의 전당 오페라 극장"}
                date={"2024.11.30(토) 5PM"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSection;
