import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";
import { Location } from "@/components/common/Onboarding/Location";
import { useState } from "react";

export const SelectLocationPage = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const handleBackClick = () => {
    navigate("/create/price");
  };

  const handleConfirmClick = () => {
    navigate("/create/concept");
  };

  const handleLocationClick = (location: string) => {
    if (selectedLocation.includes(location)) {
      setSelectedLocation(selectedLocation.filter((loc) => loc !== location));
    } else {
      setSelectedLocation([...selectedLocation, location]);
    }
  };

  return (
    <div className="w-full h-screen overflow-y-auto bg-background-dark flex flex-col">
      <div className="flex flex-col flex-grow w-full h-auto px-[24px] pt-[4.75rem] pb-[4.56rem] gap-[0.5rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <BackArrow className="mb-[1.19rem]" onClick={handleBackClick} />
            <Progress value={33.33} />
          </div>
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col gap-[1.56rem]">
            <span className="body1-medium text-grayscale-60">
              선호하는 공연장 위치를 모두 선택해주세요.
            </span>
            <div className="slide-up">
              <Location
                selectedLocation={selectedLocation}
                onLocationClick={handleLocationClick}
              />
            </div>
          </div>
          <ConfirmButton
            isChecked={selectedLocation.length > 0}
            onClick={handleConfirmClick}
            disabled={selectedLocation.length === 0}
          >
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
