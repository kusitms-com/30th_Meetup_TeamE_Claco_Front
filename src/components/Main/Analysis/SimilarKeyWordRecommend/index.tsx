import Poster6 from "@/assets/images/poster6.gif";
import Poster9 from "@/assets/images/poster9.gif";
import { HorizontalInfoCard } from "@/components/Main/InformationCard";
import { Genre } from "@/components/common/Genre";
import { useCallback, useEffect, useState } from "react";

import dynamic from "@/assets/images/Genre/dynamic.png";
import romantic from "@/assets/images/Genre/romantic.png";
import tragic from "@/assets/images/Genre/tragic.png";

export const SimilarKeyWordRecommend = () => {
  const USER_GENRE = [
    { imgUrl: dynamic, keyWord: "dynamic" },
    { imgUrl: romantic, keyWord: "romantic" },
    { imgUrl: tragic, keyWord: "tragic" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateGenre = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % USER_GENRE.length);
    }, 200);
  }, [USER_GENRE.length]);

  useEffect(() => {
    const interval = setInterval(rotateGenre, 3500);
    return () => clearInterval(interval);
  }, [rotateGenre]);

  const getItemStyle = (index: number) => {
    const baseStyle =
      "absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out";

    const position = index - currentIndex;

    const normalizedPosition =
      position < -1 ? position + 3 : position > 1 ? position - 3 : position;

    if (normalizedPosition === 0) {
      return `${baseStyle} left-1/2 -translate-x-1/2 z-30 scale-100 opacity-100`;
    } else if (normalizedPosition === 1) {
      return `${baseStyle} left-[85%] -translate-x-1/2 z-20 scale-75 opacity-60`;
    } else {
      return `${baseStyle} left-[15%] -translate-x-1/2 z-10 scale-75 opacity-60`;
    }
  };

  return (
    <section>
      <div className="py-[22px]">
        <section className="px-6">
          <div className="leading-8 text-grayscale-90 heading2-bold">
            방금 본{" "}
            <span className="text-primary-400">
              후지타 마오 피아노 리사이틀
            </span>
            <br />
            비슷한 키워드를 가진 작품이에요
          </div>
          <div className="relative h-[355px] overflow-hidden">
            <div className="w-[355px] h-[355px] absolute flex justify-center items-center opacity-70 bg-[radial-gradient(circle_at_50%_50%,rgba(233,102,58,0.3)_0%,rgba(233,102,58,0.00)_70%)] rounded-full" />
            {USER_GENRE.map((item, index) => (
              <div key={index} className={getItemStyle(index)}>
                <Genre
                  genreType={item.imgUrl}
                  genreKeyword={item.keyWord}
                  className={`${index === currentIndex ? "w-[117px] h-[127px]" : ""} `}
                  size={index === currentIndex ? 113 : 48}
                />
              </div>
            ))}
          </div>
        </section>
        <div className="h-[44px] bg-gradient-to-t from-[#F37D55]/60 to-[#1C1C1C] opacity-50 shadow-main" />
        <section className="flex flex-col justify-center items-center space-y-3 mt-[26px] mb-[60px] px-6">
          <HorizontalInfoCard
            image={Poster6}
            title={"라 바야데르"}
            location={"예술의 전당 오페라 극장"}
            date={"2024.11.30(토) 5PM"}
          />
          <HorizontalInfoCard
            image={Poster9}
            title={"피터팬"}
            location={"예술의 전당 오페라 극장"}
            date={"2024.11.30(토) 5PM"}
          />
        </section>
      </div>
    </section>
  );
};
