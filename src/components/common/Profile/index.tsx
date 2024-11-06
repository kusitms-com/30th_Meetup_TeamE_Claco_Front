import { TypeButton } from "@/components/Onboarding/Registration";
import { ProfileProps } from "@/types";

export const Profile = ({
  selectedGender,
  selectedAge,
  onGenderSelect,
  onAgeSelect,
}: ProfileProps) => {
  return (
    <>
      <div className="flex flex-col gap-[0.87rem] mt-[2.12rem] mb-[2.88rem]">
        <span className="body1-medium text-grayscale-80">성별</span>
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
      </div>
      <div className="flex flex-col gap-[0.87em] mb-[56px]">
        <span className="body1-medium text-grayscale-80">연령대</span>
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
      </div>
    </>
  );
};
