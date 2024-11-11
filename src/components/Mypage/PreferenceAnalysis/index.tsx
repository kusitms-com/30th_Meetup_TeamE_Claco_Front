import { Genre } from "@/components/common/Genre";
import { useEffect, useState } from "react";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Listen } from "@/assets/svgs/listen.svg";

import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import modern from "@/assets/images/Genre/modern.png";
import lyrical from "@/assets/images/Genre/lyrical.png";
import { PreferenceAnalysisProps } from "@/types";

const USER_GENRE = [
  { imgUrl: grand, keyWord: "grand" },
  { imgUrl: delicate, keyWord: "delicate" },
  { imgUrl: classical, keyWord: "classical" },
  { imgUrl: modern, keyWord: "modern" },
  { imgUrl: lyrical, keyWord: "lyrical" },
];

export const PreferenceAnalysis = ({
  onSettingsOpen,
}: PreferenceAnalysisProps) => {
  const initialGenreIndex = 0;
  const [currentIndex, setCurrentIndex] = useState<number>(initialGenreIndex);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    setCurrentIndex(initialGenreIndex);
  }, []);

  useEffect(() => {
    const rotateGenre = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % USER_GENRE.length);
        setIsTransitioning(false);
      }, 300);
    };

    const timer = setTimeout(() => {
      const interval = setInterval(rotateGenre, 3500);
      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col pb-[79px]">
      <span className="headline2-bold text-white mb-[9px]">
        달보라님의 공연 취향
      </span>
      <div className="flex items-center rounded-[5px] px-[12px] py-[9px] border border-grayscale-40 bg-transparent gap-[7px] mb-5">
        <Listen />
        <span className="caption-12 text-grayscale-70">
          클라코 AI가 달보라님의 활동 내역을 분석해 취향을 알려드려요
        </span>
      </div>

      <div className="relative px-[6px] h-[262px]">
        <div className="relative w-full h-full">
          <div className="absolute top-0 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,102,58,0.3)_0%,rgba(233,102,58,0.00)_70%)] rounded-full" />
          <div
            className={`flex h-[262px] justify-center items-center transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <Genre
              key={`genre-${currentIndex}`}
              genreType={USER_GENRE[currentIndex].imgUrl}
              genreKeyword={USER_GENRE[currentIndex].keyWord}
              className="w-[157px] h-[157px]"
              isShow={true}
            />
          </div>
        </div>
      </div>
      <div className="flex mx-[6px] justify-between mb-[49px]">
        {USER_GENRE.map((item, index) => (
          <Genre
            key={index}
            genreType={item.imgUrl}
            genreKeyword={item.keyWord}
          />
        ))}
      </div>
      <div className="border-2 border-grayscale-30 mb-[19px]" />
      <div className="flex items-center justify-between">
        <span className="headline2-bold text-white">나의 취향 정보 수정</span>
        <BackArrow
          className="rotate-180 cursor-pointer"
          onClick={onSettingsOpen}
        />
      </div>
    </div>
  );
};
