import { ConfirmButton } from "@/components/Login/button";
import { TypeButton } from "@/components/Onboarding/button";
import { useState } from "react";

export const SelectLocation = ({ onConfirm }: { onConfirm: () => void }) => {
  const [selectedLocation, setSelectedLocation] = useState<string[]>([]);

  const handleLocationClick = (location: string) => {
    if (selectedLocation.includes(location)) {
      setSelectedLocation(selectedLocation.filter((loc) => loc !== location));
    } else {
      setSelectedLocation([...selectedLocation, location]);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-[2.87rem]">
        <span className="body1-medium text-grayscale-60">
          선호하는 공연장 위치를 모두 선택해주세요.
        </span>
        <div className="grid grid-cols-2 gap-[0.63rem]">
          <TypeButton
            isChecked={selectedLocation.includes("서울")}
            onClick={() => handleLocationClick("서울")}
          >
            서울
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("경기")}
            onClick={() => handleLocationClick("경기")}
          >
            경기
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("인천")}
            onClick={() => handleLocationClick("인천")}
          >
            인천
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("강원")}
            onClick={() => handleLocationClick("강원")}
          >
            강원
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("충청")}
            onClick={() => handleLocationClick("충청")}
          >
            충청
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("전라")}
            onClick={() => handleLocationClick("전라")}
          >
            전라
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("경상")}
            onClick={() => handleLocationClick("경상")}
          >
            경상
          </TypeButton>
          <TypeButton
            isChecked={selectedLocation.includes("제주")}
            onClick={() => handleLocationClick("제주")}
          >
            제주
          </TypeButton>
        </div>
      </div>
      <ConfirmButton
        isChecked={selectedLocation.length > 0}
        onClick={onConfirm}
      >
        다음
      </ConfirmButton>
    </div>
  );
};
