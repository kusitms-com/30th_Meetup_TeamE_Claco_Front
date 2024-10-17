import { ConfirmButton } from "@/components/Login/button";
import { ConceptButton } from "@/components/Onboarding/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SelectConceptPage = () => {
  const [selectedConcept, setSelectedConcept] = useState<string[]>([]);

  const handleConceptClick = (concept: string) => {
    if (selectedConcept.includes(concept)) {
      setSelectedConcept(selectedConcept.filter((con) => con !== concept));
    } else {
      setSelectedConcept([...selectedConcept, concept]);
    }
  };

  const navigate = useNavigate();

  const handleConfirmClick = () => {
      navigate("/create/feature");
  }

  return (
    <div className="w-full h-screen bg-background-dark">
      <div className="flex flex-col w-full h-full px-[1.25rem] pt-[4.45rem] pb-[4rem] gap-[0.75rem]">
        <div className="flex flex-col gap-[2.12rem]">
          <Progress value={80} />
          <span className="heading1-bold text-grayscale-90">
            울랄라님의 취향에 맞는
            <br />
            클래식 공연을 알아볼까요?
          </span>
        </div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-[2.87rem]">
          <span className="body1-medium text-grayscale-60">
            선호하는 클래식 공연 유형을 모두 선택해주세요.
          </span>
          <div className="flex flex-col gap-[0.75rem]">
            <ConceptButton
              isChecked={selectedConcept.includes("1")}
              onClick={() => handleConceptClick("1")}
            >
              음악 자체에 깊이 집중할 수 있는
              <br />
              클래식 공연이 좋아요.
            </ConceptButton>
            <ConceptButton
              isChecked={selectedConcept.includes("2")}
              onClick={() => handleConceptClick("2")}
            >
              무용, 발레 등 음악과 퍼포먼스를
              <br />
              모두 감상할 수 있는 공연이 좋아요.
            </ConceptButton>
          </div>
        </div>
        <ConfirmButton isChecked={selectedConcept.length > 0} onClick={handleConfirmClick}>
          다음
        </ConfirmButton>
      </div>
      </div>
    </div>
  );
};
