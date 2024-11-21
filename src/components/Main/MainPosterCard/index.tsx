import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { UserBased } from "@/types";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export type MainPosterCardProps = {
  data: UserBased;
};

export const MainPosterCard = ({ data }: MainPosterCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const currentElement = posterRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const gotoShowDetail = () => {
    navigate(`/show/${data.id}`);
  };

  return (
    <div
      ref={posterRef}
      className="relative w-[342px] h-[443px] rounded-[5px]"
      onClick={gotoShowDetail}
    >
      <div
        className="absolute top-[26px] right-[19px] z-10"
        onClick={(e) => {
          e.stopPropagation();
          console.log("좋아요 기능");
        }}
      >
        {data.liked ? (
          <Heart
            className="fill-grayscale-80"
            width="22"
            height="18"
            viewBox="0 0 15 13"
          />
        ) : (
          <Heart
            className="fill-none"
            width="22"
            height="18"
            viewBox="0 0 15 13"
          />
        )}
      </div>

      {isLoading && (
        <div className="absolute top-0 left-0 z-0 w-full h-full rounded-[5px] bg-grayscale-20 animate-pulse" />
      )}

      {isIntersecting && (
        <img
          src={data.poster}
          alt="poster"
          loading="lazy"
          onLoad={handleImageLoad}
          className={`absolute top-0 left-0 z-0 object-cover w-full h-full rounded-[5px] transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      <div className="rounded-[5px] absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-common-black/20 from-0% to-common-black to-64% opacity-60"></div>
      <div className="rounded-[5px] absolute bottom-0 left-0 z-10 w-full h-[189px] bg-gradient-to-b from-background-dark/0 to-background-dark/100">
        <div className="flex items-center space-x-[10px] absolute bottom-6 left-[11px]">
          <CategoryTag categoryType={data.genrenm} />
          <div className="heading2-bold text-grayscale-80 truncate max-w-[220px]">
            {data.prfnm}
          </div>
        </div>
      </div>
    </div>
  );
};
