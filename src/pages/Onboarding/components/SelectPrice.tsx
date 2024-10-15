import { ConfirmButton } from "@/components/Login/button";
import { useState } from "react";

export const SelectPrice = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value <= maxPrice) {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= minPrice) {
      setMaxPrice(value);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col">
          <span className="body1-medium text-grayscale-60">
            선호하는 티켓 가격 범위를 설정해주세요.
          </span>
          <div className="flex self-center justify-center items-center bg-grayscale-30 px-[1.25rem] py-[0.75rem] rounded-[0.31rem] mt-[2.88rem]">
            <span className="body2-medium text-grayscale-90">
              {minPrice.toLocaleString()}원 ~ {maxPrice.toLocaleString()}원
            </span>
          </div>
          <div className="relative w-full h-[0.125rem] bg-grayscale-60 mt-[1.56rem]">
            <div
              className="absolute h-[0.125rem] bg-grayscale-90"
              style={{
                left: `${(minPrice / 1000000) * 100}%`,
                right: `${100 - (maxPrice / 1000000) * 100}%`,
              }}
            />
          </div>
          <div className="relative">
            <input
              type="range"
              min={0}
              max={1000000}
              step={10000}
              value={minPrice}
              onChange={handleMinPriceChange}
              className="absolute w-full appearance-none bg-transparent top-[-9px]"
            />
            <input
              type="range"
              min={0}
              max={1000000}
              step={10000}
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="absolute w-full appearance-none bg-transparent top-[-9px]"
            />
          </div>
          <div className="flex justify-between mt-[0.81rem]">
            <span className="body2-medium text-grayscale-90">0원</span>
            <span className="body2-medium text-grayscale-90">1,000,000원</span>
          </div>
        </div>
      <ConfirmButton isChecked={true}>다음</ConfirmButton>
    </div>
  );
};
