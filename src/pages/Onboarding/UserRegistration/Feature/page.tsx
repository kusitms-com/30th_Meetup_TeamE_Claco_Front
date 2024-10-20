import { FeatureButton } from "@/components/Onboarding/Registration";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";
import { FeatureType } from "@/types/feature";

export const SelectFeaturePage = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progressValue, setProgressValue] = useState<number>(55.55);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [selectedAllFeature, setSelectedAllFeature] = useState<string[]>([]);

  const features: FeatureType[] = [
    {
      title: "웅장한",
      description: [
        "큰 규모의 오케스트라나",
        "무대 장치, 강렬한 감정이 느껴지는 공연",
      ],
    },
    {
      title: "섬세한",
      description: [
        "작은 규모의 연주나 무대",
        "미세한 감정의 변화와 정교함이 돋보이는 공연",
      ],
    },
    {
      title: "고전적인",
      description: [
        "고전적인 형식과 규칙을 따르는 클래식 공연",
        "예) 고전 교향곡",
      ],
    },
    {
      title: "현대적인",
      description: ["혁신적이고 새로운 형식의 공연", "예) 현대 무용, 클래식"],
    },
    {
      title: "서정적인",
      description: ["감정적으로 부드럽고 서정적인 음악과 무대"],
    },
    {
      title: "역동적인",
      description: ["강한 움직임과 템포가 특징인", "빠르고 에너지 넘치는 공연"],
    },
    {
      title: "낭만적인",
      description: [
        "따뜻하고 감미로운 분위기로",
        "사랑과 감성을 주제로 한 공연",
      ],
    },
    {
      title: "비극적인",
      description: ["슬프고 어두운 감정을 전달하는 공연"],
    },
    {
      title: "친숙한",
      description: [
        "대중들에게 친숙한 곡이나 춤을 기반으로 한 공연",
        "예) 지브리 OST 공연, 비발디 ‘사계’ ",
      ],
    },
    {
      title: "새로운",
      description: ["평소 자주 들어보지 못했던 새로운 곡을 기반으로 한 공연"],
    },
  ];

  const navigate = useNavigate();

  const handleBackClick = () => {
    if (currentStep === 0) {
      navigate("/create/concept");
    } else {
      setCurrentStep(currentStep - 2);
    }
  };

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  const handleNextClick = () => {
    if (selectedFeature) {
      setSelectedAllFeature((prevFeatures) => [
        ...prevFeatures,
        selectedFeature,
      ]);
      setSelectedFeature(null);

      setProgressValue((prevValue) => Math.min(prevValue + 11.11, 100));
      if (progressValue === 99.99) setProgressValue(100);

      if (currentStep >= features.length - 2) {
        navigate("/create/complete");
        console.log(selectedAllFeature); // eslint 오류 방지용
      } else {
        setCurrentStep((prevStep) => prevStep + 2);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-background-dark">
      <div className="flex flex-col w-full h-full px-[1.25rem] pt-[4.75rem] pb-[4.56rem] gap-[0.5rem]">
        <div className="flex flex-col gap-[2.44rem]">
          <div className="flex-col">
            <img
              className="mb-[1.19rem]"
              src={BackArrow}
              alt="뒤로가기"
              onClick={handleBackClick}
            />
            <Progress value={progressValue} />
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
              선호하는 공연의 특징을 선택해주세요.
            </span>
            <div className="flex flex-col gap-[0.75rem]">
              {features.slice(currentStep, currentStep + 2).map((feature) => (
                <FeatureButton
                  key={feature.title}
                  isChecked={selectedFeature === feature.title}
                  onClick={() => handleFeatureClick(feature.title)}
                >
                  <span className="heading1-bold mb-[0.62rem]">
                    {feature.title}
                  </span>
                  <br />
                  <span className="body3-normal">
                    {feature.description.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </FeatureButton>
              ))}
            </div>
          </div>

          <ConfirmButton
            isChecked={!!selectedFeature}
            onClick={handleNextClick}
          >
            다음
          </ConfirmButton>
        </div>
      </div>
    </div>
  );
};
