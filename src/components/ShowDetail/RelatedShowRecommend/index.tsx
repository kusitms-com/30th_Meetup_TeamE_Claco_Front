import { Swiper, SwiperSlide } from "swiper/react";
import { VerticalInfoCard } from "@/components/Main/InformationCard";
import { forwardRef, useEffect, useState } from "react";
import { ConcertBased } from "@/types";
import { extractDateRange } from "@/hooks/utils/extractDateRange";
import useGetConcertBased from "@/hooks/queries/useGetConcertBased";

const RelatedShowsRecommend = forwardRef<HTMLDivElement>((_, ref) => {
  const [concertBased, setConcertBased] = useState<ConcertBased[]>([]);
  const { data, isLoading } = useGetConcertBased();

  useEffect(() => {
    if (!isLoading && data?.result) {
      setConcertBased(data.result);
    }
  }, [isLoading, data]);

  if (isLoading) {
    return <div>로딩 중..</div>;
  }
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
            {concertBased.map((concert, index) => (
            <SwiperSlide key={index} className="w-[231px]">
            <VerticalInfoCard
              id={concert.id}
              image={concert.poster}
              title={concert.prfnm}
              location={concert.fcltynm}
              date={extractDateRange(
                concert.prfpdfrom || "",
                concert.prfpdto || "",
              )}
            />
            </SwiperSlide>
          ))}
          </Swiper>
        </section>
      </div>
    </section>
  );
});

export default RelatedShowsRecommend;
