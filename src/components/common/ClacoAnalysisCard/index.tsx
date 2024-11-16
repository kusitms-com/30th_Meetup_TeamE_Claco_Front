import { useEffect, useState } from "react";
import { ReactComponent as Listen } from "@/assets/svgs/listen.svg";
import { Genre } from "@/components/common/Genre";
import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import modern from "@/assets/images/Genre/modern.png";
import lyrical from "@/assets/images/Genre/lyrical.png";
import { useUserStore } from "@/libraries/store/user";

/** 퍼블리싱 테스트 더미 데이터 */
const USER_GENRE = [
  { imgUrl: grand, keyWord: "웅장한" },
  { imgUrl: delicate, keyWord: "섬세한" },
  { imgUrl: classical, keyWord: "고전적인" },
  { imgUrl: modern, keyWord: "현대적인" },
  { imgUrl: lyrical, keyWord: "서정적인" },
];

export type ClacoAnalysisCardProps = {
  type: string;
};

export const ClacoAnalysisCard = ({ type }: ClacoAnalysisCardProps) => {
  const nickname = useUserStore((state) => state.nickname);

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
    <div>
      <div className="mb-[10px] leading-8 text-grayscale-90 heading2-bold">
        {type === "main" ? (
          <>
            클라코가 분석한
            <br />
            {nickname}님의 클래식 취향이에요
          </>
        ) : (
          <>{nickname}님의 공연 취향</>
        )}
      </div>

      <div className="caption-12 text-grayscale-70 border-[1px] border-grayscale-40 rounded-[5px] py-[9px] px-[11px]">
        <span className="flex items-center gap-[11px]">
          <Listen />
          {type === "main"
            ? "클라코 AI가 취향에 꼭 맞는 공연을 추천해드릴게요"
            : "클라코 AI가 활동 내역을 분석해 클래식 취향을 알려드려요"}
        </span>
      </div>

      <div className="relative h-[340px] mb-4">
        <div className="relative w-full h-full">
          {/* 배경 그라데이션 */}
          <div className="z-20 absolute top-0 inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(233,102,58,0.3)_0%,rgba(233,102,58,0.00)_70%)] rounded-full" />

          {/* 장르 컴포넌트 컨테이너 */}
          <div
            className={`flex h-[340px] justify-center items-center transition-all duration-300 ease-in-out ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
          >
            <Genre
              key={`genre-${currentIndex}`}
              genreType={USER_GENRE[currentIndex].imgUrl}
              genreKeyword={USER_GENRE[currentIndex].keyWord}
              className={`${type === "main" ? "w-[200px] h-[200px]" : "w-[157px] h-[157px]"} object-contain`}
              isShow={true}
            />
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between mb-[21px] ${type === "mypage" ? "px-5" : ""}`}
      >
        {USER_GENRE.map((item, index) => (
          <Genre
            key={index}
            genreType={item.imgUrl}
            genreKeyword={item.keyWord}
          />
        ))}
      </div>
    </div>
  );
};
