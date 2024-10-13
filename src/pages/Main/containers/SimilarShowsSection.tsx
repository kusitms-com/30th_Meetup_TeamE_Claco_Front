import { useState } from "react";
import Image1 from "@/assets/images/poster1.gif";
import Image2 from "@/assets/images/poster6.gif";
import Image3 from "@/assets/images/poster7.gif";

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
      style += "-rotate-45 -translate-x-1/2 ";
    } else if (index === 1) {
      style += "z-10 -translate-y-1/3";
    } else if (index === 2) {
      style += "rotate-15 -translate-y-1/2 translate-x-1/2";
    }

    return style.trim();
  };
  return (
    <section className="grid h-screen overflow-hidden place-items-center">
      <ul className="relative w-[245px] h-[324px] flex justify-center items-center p-0 m-0">
        {images.map((image, index) => (
          <li
            key={index}
            className={getItemStyle(index)}
            style={{
              backgroundImage: `url(${image})`,
            }}
            onClick={() => handleItemClick(index)}
          >
            <div className="absolute inset-0 bg-black rounded-lg bg-opacity-20"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SimilarShowsSection;
