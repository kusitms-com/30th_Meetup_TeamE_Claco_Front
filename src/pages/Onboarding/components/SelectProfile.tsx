import { ConfirmButton } from "@/components/Login/button";
import { TypeButton } from "@/components/Onboarding/button";
import { useState } from "react";

export const SelectProfile = ({ onConfirm }: { onConfirm: () => void }) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleGenderClick = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleAgeClick = (age: string) => {
    setSelectedAge(age);
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-[0.9rem]">
        <span className="body1-medium text-grayscale-60">
          성별과 연령대를 알려주세요.
        </span>
        <div className="flex flex-col gap-[0.5rem]">
          <span className="body1-medium text-grayscale-80">성별</span>
          <div className="grid grid-cols-2 gap-[0.63rem]">
            <TypeButton
              isChecked={selectedGender === "남성"}
              onClick={() => handleGenderClick("남성")}
            >
              남성
            </TypeButton>
            <TypeButton
              isChecked={selectedGender === "여성"}
              onClick={() => handleGenderClick("여성")}
            >
              여성
            </TypeButton>
          </div>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <span className="body1-medium text-grayscale-80">연령대</span>
          <div className="grid grid-cols-2 gap-[0.63rem]">
            <TypeButton
              isChecked={selectedAge === "10대"}
              onClick={() => handleAgeClick("10대")}
            >
              10대
            </TypeButton>
            <TypeButton
              isChecked={selectedAge === "20대"}
              onClick={() => handleAgeClick("20대")}
            >
              20대
            </TypeButton>
            <TypeButton
              isChecked={selectedAge === "30대"}
              onClick={() => handleAgeClick("30대")}
            >
              30대
            </TypeButton>
            <TypeButton
              isChecked={selectedAge === "40대"}
              onClick={() => handleAgeClick("40대")}
            >
              40대
            </TypeButton>
            <TypeButton
              isChecked={selectedAge === "50대"}
              onClick={() => handleAgeClick("50대")}
            >
              50대
            </TypeButton>
            <TypeButton
              isChecked={selectedAge === "60대 이상"}
              onClick={() => handleAgeClick("60대 이상")}
            >
              60대 이상
            </TypeButton>
          </div>
        </div>
      </div>
      <ConfirmButton
        isChecked={!!selectedGender && !!selectedAge}
        onClick={onConfirm}
      >
        다음
      </ConfirmButton>
    </div>
  );
};
