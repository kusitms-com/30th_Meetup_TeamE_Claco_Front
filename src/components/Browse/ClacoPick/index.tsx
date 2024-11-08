import { ClacoPickProps } from "@/types";
import { ClacoPickShow } from "./ClacoPickShow";

export const ClacoPick = ({ userName, picks }: ClacoPickProps) => {
  return (
    <div className="flex gap-5 flex-col">
      <div className="flex flex-col">
        <span className="headline1-bold text-grayscale-80">Claco Pick!</span>
        <span className="body2-semibold text-grayscale-60">
          {userName}님이 좋아할 만한 공연이에요
        </span>
      </div>

      <div className="flex gap-[13.84px]">
        {picks.map((pick, index) => (
          <ClacoPickShow
            key={index}
            imageSrc={pick.imageSrc}
            title={pick.title}
          />
        ))}
      </div>
    </div>
  );
};
