import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import { UserBased } from "@/types";
import { useEffect } from "react";

export type MainPosterCardProps = {
  data: UserBased;
};

export const MainPosterCard = ({ data }: MainPosterCardProps) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="relative w-[342px] h-[443px] rounded-[5px]">
      <div
        className="absolute top-[26px] right-[19px] z-10"
        onClick={() => console.log("좋아요 기능")}
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
      <img
        src={data.poster}
        alt="poster"
        className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-[5px]"
      />
      <div className="rounded-[5px] absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-common-black/20 from-0% to-common-black to-64% opacity-60"></div>
      <div className="rounded-[5px] absolute bottom-0 left-0 z-10 w-full h-[189px] bg-gradient-to-b from-background-dark/0 to-background-dark/100">
        <div className="flex items-center space-x-[10px] absolute bottom-6 left-[11px]">
          <CategoryTag categoryType="classical">{data.genrenm}</CategoryTag>
          <div className="heading2-bold text-grayscale-80">{data.prfnm}</div>
        </div>
      </div>
    </div>
  );
};
