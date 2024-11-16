import { TypeButton } from "@/components/Onboarding/Registration";
import { AgeProps } from "@/types";

export const Age = ({ selectedAge, onAgeSelect }: AgeProps) => {
  return (
    <div className="grid grid-cols-2 gap-[0.62rem]">
      {["10대", "20대", "30대", "40대", "50대", "60대 이상"].map((age) => (
        <TypeButton
          key={age}
          isChecked={selectedAge === age}
          onClick={() => onAgeSelect(age)}
        >
          {age}
        </TypeButton>
      ))}
    </div>
  );
};
