import { TypeButton } from "@/components/Onboarding/Registration";
import { GenderProps } from "@/types";

export const Gender = ({ selectedGender, onGenderSelect }: GenderProps) => {
  return (
    <div className="grid grid-cols-2 gap-[0.62rem]">
      <TypeButton
        isChecked={selectedGender === "남성"}
        onClick={() => onGenderSelect("남성")}
      >
        남성
      </TypeButton>
      <TypeButton
        isChecked={selectedGender === "여성"}
        onClick={() => onGenderSelect("여성")}
      >
        여성
      </TypeButton>
    </div>
  );
};
