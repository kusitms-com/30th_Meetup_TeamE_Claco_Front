import { ReactComponent as Refresh } from "@/assets/svgs/refresh.svg";
import { ReactComponent as X } from "@/assets/svgs/X-icon.svg";
import { ConfirmButton } from "@/components/common/Button";
import { Location } from "@/components/common/Location";
import { Price } from "@/components/common/Price";
import { useState } from "react";
import { ShowFeatureFilter } from "./ShowFeatureFilter";
import { ShowFilterProps } from "@/types";
import { Calendar } from "@/components/common/Calendar";

const features = [
  "웅장한",
  "섬세한",
  "친숙한",
  "새로운",
  "고전적인",
  "현대적인",
  "낭만적인",
  "비극적인",
  "서정적인",
  "역동적인",
];

export const ShowFilter = ({ onClose, onApply }: ShowFilterProps) => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [rangeStart, setRangeStart] = useState<Date | null>(null);
  const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

  const handleApply = () => {
    const priceRange = `${minPrice}~${maxPrice}원`;
    const location = selectedLocation.join(", ");
    const dateRange = "2024.10.10~2024.10.24";
    const feature = selectedFeatures.join(", ");
    onApply(priceRange, location, dateRange, feature);
  };

  const handleLocationClick = (location: string) => {
    if (selectedLocation.includes(location)) {
      setSelectedLocation(selectedLocation.filter((loc) => loc !== location));
    } else {
      setSelectedLocation([...selectedLocation, location]);
    }
  };

  const handleFeatureClick = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== feature));
    } else if (selectedFeatures.length < 5) {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleRefreshClick = () => {
    setMinPrice(0);
    setMaxPrice(1000000);
    setSelectedLocation([]);
    setSelectedFeatures([]);
    setRangeStart(null);
    setRangeEnd(null);
  };

  return (
    <div className="fixed inset-0 bg-dark flex justify-center items-center">
      <div className="w-full px-6 pt-[46px] pb-[100px] bg-dark overflow-y-auto max-h-screen">
        <div className="flex items-center justify-between mb-10">
          <Refresh
            width="18"
            height="18"
            viewBox="0 0 14 14"
            onClick={handleRefreshClick}
          />
          <span className="headline2-bold text-grayscale-80">필터 설정</span>
          <X
            width="18"
            height="18"
            viewBox="0 0 16 16"
            className="text-white"
            onClick={onClose}
          />
        </div>
        <div className="mb-[55px]">
          <span className="headline1-bold text-grayscale-90">가격</span>
          <Price
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
          />
        </div>
        <div className="mb-[71px]">
          <span className="headline1-bold text-grayscale-90 mb-[32px] block">
            공연장 위치
          </span>
          <Location
            selectedLocation={selectedLocation}
            onLocationClick={handleLocationClick}
          />
        </div>
        <div className="flex flex-col mb-[58px] gap-8">
          <span className="headline1-bold text-grayscale-90">공연 날짜</span>
          <Calendar
            mode="range"
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            onRangeSelect={(start, end) => {
              setRangeStart(start);
              setRangeEnd(end);
            }}
            startDate={new Date(2024, 9, 1)}
            endDate={new Date(2024, 10, 31)}
          />
        </div>
        <div className="mb-[38px]">
          <div className="flex flex-col gap-[7px] mb-[27px]">
            <span className="headline1-bold text-grayscale-90">공연 특성</span>
            <span className="caption-12 text-grayscale-60">
              *최대 5개까지 선택 가능해요
            </span>
          </div>
          <div className="grid grid-cols-3 gap-[10px]">
            {features.map((feature) => (
              <ShowFeatureFilter
                key={feature}
                isChecked={selectedFeatures.includes(feature)}
                onClick={() => handleFeatureClick(feature)}
              >
                {feature}
              </ShowFeatureFilter>
            ))}
          </div>
        </div>
        <ConfirmButton
          isChecked={true}
          onClick={handleApply}
          className="w-full"
        >
          적용하기
        </ConfirmButton>
      </div>
    </div>
  );
};
