import { ReactComponent as ClacoMain } from "@/assets/svgs/Claco_Main.svg";
import { ReactComponent as Light } from "@/assets/svgs/Light.svg";
import { Genre } from "@/components/common/Genre";
import { useEffect, useState } from "react";

import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import modern from "@/assets/images/Genre/modern.png";
import lyrical from "@/assets/images/Genre/lyrical.png";

/** 퍼블리싱 테스트 더미 데이터 */
const USER_GENRE = [
  { imgUrl: grand, keyWord: "웅장한" },
  { imgUrl: delicate, keyWord: "섬세한" },
  { imgUrl: classical, keyWord: "고전적인" },
  { imgUrl: modern, keyWord: "현대적인" },
  { imgUrl: lyrical, keyWord: "서정적인" },
];

export const ClassicalPalette = () => {
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
    <div className="py-[22px] px-6">
      <div className="mb-[29px]">
        <ClacoMain />
      </div>
      <div className="mb-5 leading-8 text-grayscale-90 heading2-bold">
        달보라님의 클래식 취향
      </div>
      <div className="relative h-[340px] mb-4">
        <div className="relative w-full h-full">
          {/* 배경 그라데이션 */}
          <div className="absolute top-0 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,102,58,0.3)_0%,rgba(233,102,58,0.00)_70%)] rounded-full" />

          {/* 장르 컴포넌트 컨테이너 */}
          <div
            className={`flex h-[355px] justify-center items-center transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <Genre
              key={`genre-${currentIndex}`}
              genreType={USER_GENRE[currentIndex].imgUrl}
              genreKeyword={USER_GENRE[currentIndex].keyWord}
              className="w-[200px] h-[200px]"
              isShow={true}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-[21px]">
        {USER_GENRE.map((item, index) => (
          <Genre
            key={index}
            genreType={item.imgUrl}
            genreKeyword={item.keyWord}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Light />
      </div>
    </div>
  );
};
