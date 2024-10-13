import { useState } from "react";
import Image1 from "@/assets/images/poster1.gif";
import Image2 from "@/assets/images/poster6.gif";
import Image3 from "@/assets/images/poster7.gif";
import Arrow from "@/assets/svgs/Arrow 2.svg?react";

const SimilarShowsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image1, Image2, Image3];

  const handleItemClick = (index: number) => {
    console.log(index);
    setActiveIndex(index);
  };

  const getItemStyle = (index: number) => {
    const isActive = index === activeIndex;
    let style =
      "absolute w-[217px] h-[308px] bg-cover bg-center shadow-lg transition-all duration-500 ease-in-out cursor-pointer rounded-lg ";

    if (isActive) {
      style += "z-30 opacity-100 brightness-100 ";
    } else {
      style += "opacity-80 brightness-75 ";
    }

    if (index === 0) {
      style += "-rotate-20 -translate-x-[11.5rem] -translate-y-8 ";
    } else if (index === 1) {
      style += "z-10 -translate-y-1/3";
    } else if (index === 2) {
      style += "rotate-12 -translate-y-1/2 translate-x-3/4";
    }

    return style.trim();
  };
  return (
    <section>
      <div className="w-full h-[62px] bg-gradient-to-b from-[#F37D55]/60 to-background-dark opacity-50 shadow-main"></div>
      <div className="py-[22px] relative">
        <div className="px-6 mb-[22px] leading-8 text-grayscale-90 heading2-bold">
          울랄라님과 비슷한 취향을 가진 <br />
          고릴라님의 컬렉션이에요
        </div>
        <div className="grid min-h-[700px] overflow-hidden place-items-center">
          <ul className="relative flex items-center justify-center p-0 m-0">
            {images.map((image, index) => (
              <li
                key={index}
                className={getItemStyle(index)}
                onClick={() => handleItemClick(index)}
              >
                <img
                  src={image}
                  alt="poster"
                  className="min-w-[245px] min-h-[324px] rounded-[5px]"
                />
                <div className="absolute inset-0 bg-black rounded-lg bg-opacity-20"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-[200px] right-6 body3-normal flex-col space-y-[11px] text-common-white">
          <Arrow />
          <div>컬렉션 보러가기</div>
        </div>
      </div>
    </section>
  );
};

export default SimilarShowsSection;
