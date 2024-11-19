import AudienceReviews from "@/components/ShowDetail/AudienceReviews";
import RelatedShowsRecommend from "@/components/ShowDetail/RelatedShowRecommend";
import ShowEssentials, {
  PrfGuidance,
} from "@/components/ShowDetail/ShowInformation/ShowEssentials";
import ShowOverview from "@/components/ShowDetail/ShowInformation/ShowOverview";
import ShowPoster from "@/components/ShowDetail/ShowInformation/ShowPoster";
import { useShowDetail } from "@/hooks/useShowDetailCheck";
import { DaysMapType } from "@/types/day";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const daysMap: DaysMapType[] = [
  { day: "월요일", dayIndex: 0 },
  { day: "화요일", dayIndex: 1 },
  { day: "수요일", dayIndex: 2 },
  { day: "목요일", dayIndex: 3 },
  { day: "금요일", dayIndex: 4 },
  { day: "토요일", dayIndex: 5 },
  { day: "일요일", dayIndex: 6 },
];

export const ShowDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("공연 정보");
  const [isSticky, setIsSticky] = useState(true);
  const [showFullImage, setShowFullImage] = useState(false);

  const tabs = ["공연 정보", "상세정보", "감상 리뷰"];

  const showInfoRef = useRef<HTMLDivElement>(null);
  const detailsInfoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const relatedShowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionRefs = {
      "공연 정보": showInfoRef,
      상세정보: detailsInfoRef,
      "감상 리뷰": reviewRef,
    };

    Object.entries(sectionRefs).forEach(([sectionId, ref]) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setSelectedTab(sectionId);
            }
          });
        },
        {
          threshold: sectionId === "상세정보" && showFullImage ? 0.2 : 0.8,
        },
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });

    const currentRelatedShowsRef = relatedShowsRef.current;
    const endObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSticky(false);
          } else {
            setIsSticky(true);
          }
        });
      },
      { threshold: 0.8 },
    );

    if (currentRelatedShowsRef) {
      endObserver.observe(currentRelatedShowsRef);
    }

    return () => {
      if (currentRelatedShowsRef) {
        endObserver.unobserve(currentRelatedShowsRef);
      }
    };
  }, [showFullImage]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    const yOffset = -100;
    if (ref.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    if (tab === "공연 정보") {
      scrollToSection(showInfoRef);
    } else if (tab === "상세정보") {
      scrollToSection(detailsInfoRef);
    } else if (tab === "감상 리뷰") {
      scrollToSection(reviewRef);
    }
  };

  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useShowDetail(Number(id));
  const showDetail = data?.result;

  if (isLoading) {
    return <div>로딩중</div>;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  };

  const extractPricesWithSeats = (priceString: string) => {
    if (priceString.includes("무료")) {
      return {
        seats: ["전석"],
        prices: ["무료"],
        minPrice: "무료",
        maxPrice: "무료",
      };
    }

    const priceEntries = priceString.split(", ");
    const pricesMap: Record<string, string | number> = {};

    priceEntries.forEach((entry) => {
      const match = entry.match(/(.*)\s(\d{1,3}(,\d{3})*)원/);
      if (match) {
        const seat = match[1];
        const price = match[2];
        pricesMap[seat.trim()] = parseInt(price.replace(/,/g, ""), 10);
      } else if (entry.includes("전석")) {
        const matchFreeSeat = entry.match(/전석\s(\d{1,3}(,\d{3})*)원/);
        if (matchFreeSeat) {
          pricesMap["전석"] = parseInt(matchFreeSeat[1].replace(/,/g, ""), 10);
        }
      }
    });

    const cleanedPrices = Object.values(pricesMap).filter(
      (price) => typeof price === "number",
    ) as number[];

    const minPrice =
      cleanedPrices.length > 0 ? Math.min(...cleanedPrices) : null;
    const maxPrice =
      cleanedPrices.length > 0 ? Math.max(...cleanedPrices) : null;

    return {
      seats: Object.keys(pricesMap),
      prices: Object.values(pricesMap).map((price) =>
        typeof price === "number" ? `${price.toLocaleString()}원` : price,
      ),
      minPrice,
      maxPrice,
    };
  };

  const { seats, prices, minPrice, maxPrice } = extractPricesWithSeats(
    showDetail?.pcseguidance || "",
  );

  const displayedPrice = (pricesInfo: {
    minPrice: number | string | null;
    maxPrice: number | string | null;
  }) => {
    const { minPrice, maxPrice } = pricesInfo;

    if (minPrice === "무료" && maxPrice === "무료") {
      return "무료";
    }
    if (minPrice !== null && maxPrice !== null) {
      return minPrice === maxPrice
        ? `${minPrice.toLocaleString()}원`
        : `${minPrice.toLocaleString()}원-${maxPrice.toLocaleString()}원`;
    }
    return "가격 정보 없음";
  };

  const finalDisplayedPrice = displayedPrice({ minPrice, maxPrice });

  const displayedGenre =
    showDetail?.genrenm === "서양음악(클래식)" ? "클래식" : showDetail?.genrenm;

  const extractSchedule = (dtguidance: string): PrfGuidance[] => {
    if (!dtguidance) return [];

    const scheduleEntries = dtguidance.split(", ");
    const schedule: PrfGuidance[] = [];

    scheduleEntries.forEach((entry) => {
      const match = entry.match(/(.*)\((.*)\)/);
      if (match) {
        let dayRange = match[1].trim();
        const times = match[2].split(",").map((time) => time.trim());

        if (dayRange === "HOL") {
          dayRange = "일요일";
        }

        if (dayRange.includes("~")) {
          // 범위 형태 처리 (예: "월요일~수요일")
          const [startDay, endDay] = dayRange
            .split("~")
            .map((day) => day.trim());
          const startDayIndex = daysMap.find(
            (d) => d.day === startDay,
          )?.dayIndex;
          const endDayIndex = daysMap.find((d) => d.day === endDay)?.dayIndex;

          if (startDayIndex !== undefined && endDayIndex !== undefined) {
            for (let i = startDayIndex; i <= endDayIndex; i++) {
              const fullDay = daysMap.find((d) => d.dayIndex === i)?.day;
              const shortDay = fullDay ? fullDay.slice(0, 1) : null;
              if (shortDay && !schedule.some((item) => item.day === shortDay)) {
                schedule.push({ day: shortDay, times });
              }
            }
          }
        } else {
          const shortDay = dayRange.slice(0, 1);
          if (!schedule.some((item) => item.day === shortDay)) {
            schedule.push({ day: shortDay, times });
          }
        }
      }
    });

    return schedule;
  };

  const schedule = extractSchedule(showDetail?.dtguidance || "");

  return (
    <div className="pt-[73px]">
      <ShowOverview
        prfstate={showDetail?.prfstate || "공연 정보 없음"}
        prfprice={finalDisplayedPrice}
        genrenm={displayedGenre || "공연 정보 없음"}
        prfnm={showDetail?.prfnm || "공연 이름 없음"}
        poster={showDetail?.poster || ""}
        area={showDetail?.area || "지역 정보 없음"}
        prfruntime={showDetail?.prfruntime || "시간 정보 없음"}
        prfage={showDetail?.prfage || "연령 제한 없음"}
        prfdate={
          showDetail?.prfpdfrom && showDetail?.prfpdto
            ? showDetail.prfpdfrom === showDetail.prfpdto
              ? formatDate(showDetail.prfpdfrom)
              : `${formatDate(showDetail.prfpdfrom)}~${formatDate(showDetail.prfpdto)}`
            : "공연 기간 정보 없음"
        }
        summary={showDetail?.summary || "공연 설명 없음"}
        categories={showDetail?.categories || []}
      />

      <div
        className={`bg-dark w-full pt-8 ${!isSticky ? "" : "sticky top-0 z-50"}`}
      >
        <div className="flex flex-col items-center justify-center px-[24px] mb-[49px]">
          <div className="relative flex justify-between w-full mb-[14px] px-[15px]">
            {tabs.map((tab) => (
              <span
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`text-center cursor-pointer pb-2 ${
                  selectedTab === tab
                    ? "body2-semibold text-grayscale-80 border-b-2 border-grayscale-80 z-10"
                    : "body2-medium text-grayscale-60 border-b-2 border-grayscale-30"
                }`}
              >
                {tab}
              </span>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-grayscale-30" />
          </div>
        </div>
      </div>

      <div ref={showInfoRef} data-section-id="공연 정보">
        <ShowEssentials
          fcltynm={showDetail?.fcltynm || "공연 장소 정보 없음"}
          prfruntime={showDetail?.prfruntime || "러닝타임 정보 없음"}
          prfdate={
            showDetail?.prfpdfrom && showDetail?.prfpdto
              ? showDetail.prfpdfrom === showDetail.prfpdto
                ? formatDate(showDetail.prfpdfrom)
                : `${formatDate(showDetail.prfpdfrom)} ~ ${formatDate(showDetail.prfpdto)}`
              : "공연 기간 정보 없음"
          }
          dtguidance={schedule}
          seats={seats}
          prices={prices}
        />
      </div>
      <div ref={detailsInfoRef} data-section-id="상세정보">
        <ShowPoster
          showFullImage={showFullImage}
          setShowFullImage={setShowFullImage}
          styurl={showDetail?.styurl || "공연 상세 정보 없음"}
        />
      </div>
      <div ref={reviewRef} data-section-id="감상 리뷰">
        <AudienceReviews />
      </div>

      <div ref={relatedShowsRef}>
        <RelatedShowsRecommend />
      </div>
    </div>
  );
};
