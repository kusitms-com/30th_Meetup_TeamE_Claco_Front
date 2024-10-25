import { useState } from "react";
import ShowInfoSection from "./containers/ShowInfoSection";
import ReservationRatioSection from "./containers/ReservationRatioSection";
import DetailsInfoSection from "./containers/DetailsInfoSection";
import ReviewSection from "./containers/ReviewSection";
import TopShowInfoSection from "./containers/TopShowInfoSection";
import RelatedShowsSection from "./containers/RelatedShowsSection";

export const ShowDetailPage = () => {
  const [selectedTab, setSelectedTab] = useState("공연 정보");
  const tabs = ["공연 정보", "예매자 비율", "상세정보", "감상 리뷰"];

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="pt-[73px]">
      <div className="px-[24px]">
        <TopShowInfoSection />
        
        <div>
          <div className="flex flex-col items-center justify-center mb-[49px]">
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

          <ShowInfoSection />
          <ReservationRatioSection />
          <DetailsInfoSection />
          <ReviewSection />
        </div>

        <RelatedShowsSection />
      </div>
    </div>
  );
};
