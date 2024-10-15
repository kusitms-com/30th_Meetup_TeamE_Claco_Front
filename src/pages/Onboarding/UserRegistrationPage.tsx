import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { SelectProfile } from "./components/SelectProfile";
import { SelectPrice } from "./components/SelectPrice";
import { SelectLocation } from "./components/SelectLocation";
import { SelectConcept } from "./components/SelectConcept";
import { SelectFeature } from "./components/SelectFeature";
import { useNavigate } from "react-router-dom";

export const UserRegistrationPage = () => {
  const [progressValue, setProgressValue] = useState<number>(20);

  const handleNextStep = () => {
    setProgressValue((prevValue) => Math.min(prevValue + 20, 100));
  };

  const navigate = useNavigate();

  const handleConfirmClick = () => {
      navigate("/create/complete");
  }

  const renderComponent = () => {
    switch (progressValue) {
      case 20:
        return <SelectProfile onConfirm={handleNextStep} />;
      case 40:
        return <SelectPrice onConfirm={handleNextStep} />;
      case 60:
        return <SelectLocation onConfirm={handleNextStep} />;
      case 80:
        return <SelectConcept onConfirm={handleNextStep} />;
      case 100:
        return <SelectFeature onConfirm={handleConfirmClick} />
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-background-dark">
      <div className="flex flex-col w-full h-full px-[1.25rem] pt-[4.45rem] pb-[4rem] gap-[0.75rem]">
        <div className="flex flex-col gap-[2.12rem]">
          <Progress value={progressValue} />
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
        {renderComponent()}
      </div>
    </div>
  );
};
