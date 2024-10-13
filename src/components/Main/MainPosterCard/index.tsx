import Poster8 from "@/assets/images/poster8.gif";
import BookMark from "@/assets/svgs/BookMark.svg?react";

export const MainPosterCard = () => {
  return (
    <div className="relative w-[342px] h-[443px] mb-[103px]">
      <div className="absolute top-[26px] left-[19px] z-10">
        <BookMark />
      </div>
      <img
        src={Poster8}
        alt="poster"
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-common-black/20 from-0% to-common-black to-64% opacity-60"></div>
      <div className="absolute bottom-0 left-0 z-10 w-full h-[189px] bg-gradient-to-b from-background-dark/0 to-background-dark/100">
        <div className="flex space-x-[10px] absolute bottom-6 left-[11px]">
          <div className="flex items-center max-h-[24px] justify-center bg-primary-700 rounded-[20px] body4-normal px-2 py-[3px] text-common-white">
            클래식
          </div>
          <div className="heading2-bold text-grayscale-80">
            랑랑 피아노 리사이틀
          </div>
        </div>
      </div>
    </div>
  );
};
