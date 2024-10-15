import { ConfirmButton } from "@/components/Login/button";
import { ConceptButton } from "@/components/Onboarding/button";
import { useState } from "react";

export const SelectConcept = ({ onConfirm }: { onConfirm: () => void }) => {
  const [selectedConcept, setSelectedConcept] = useState<string[]>([]);

  const handleConceptClick = (concept: string) => {
    if (selectedConcept.includes(concept)) {
      setSelectedConcept(selectedConcept.filter((con) => con !== concept));
    } else {
      setSelectedConcept([...selectedConcept, concept]);
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col gap-[1.5rem]">
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
      <ConfirmButton isChecked={selectedConcept.length > 0} onClick={onConfirm}>
        다음
      </ConfirmButton>
    </div>
  );
};
