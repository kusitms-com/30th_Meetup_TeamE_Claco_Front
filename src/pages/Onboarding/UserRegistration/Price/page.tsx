import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";
import { Price } from "@/components/common/Price";
import { useState } from "react";

export const SelectPricePage = () => {
  const navigate = useNavigate();
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000000);

  const handleBackClick = () => {
    navigate("/create/profile");
  };

  const handleConfirmClick = () => {
    navigate("/create/location");
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark flex flex-col">
      <div className="flex flex-col flex-grow w-full h-auto px-[24px] pt-[4.75rem] pb-[4.56rem] gap-[0.5rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <BackArrow className="mb-[1.19rem]" onClick={handleBackClick} />
            <Progress value={22.22} />
          </div>
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col mb-[200px]">
            <span className="body1-medium text-grayscale-60">
              선호하는 티켓 가격 범위를 설정해주세요.
            </span>
            <div className="slide-up">
              <Price
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
              />
            </div>
          </div>
          <ConfirmButton isChecked={true} onClick={handleConfirmClick}>
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
