import { ReactComponent as ClacoMain } from "@/assets/svgs/Claco_Main.svg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { CategoryTag } from "@/components/common/CategoryTag";
import Poster10 from "@/assets/images/poster10.gif";
import { ReactComponent as Heart } from "@/assets/svgs/Heart.svg";
import { ReactComponent as Megaphone } from "@/assets/svgs/Megaphone.svg";
import { ReactComponent as Book } from "@/assets/svgs/Book.svg";
import { Genre } from "@/components/common/Genre";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import modern from "@/assets/images/Genre/modern.png";
import lyrical from "@/assets/images/Genre/lyrical.png";

const ShowOverview = () => {
  const USER_GENRE = [
    { imgUrl: grand, keyWord: "grand" },
    { imgUrl: delicate, keyWord: "delicate" },
    { imgUrl: classical, keyWord: "classical" },
    { imgUrl: modern, keyWord: "modern" },
    { imgUrl: lyrical, keyWord: "lyrical" },
  ];
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const gotoBack = () => {
    navigate(-1);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const description =
    "특유의 감수성으로 풍부하고 섬세한 연주를 선보이는 유명 피아니스트 랑랑의 공연이에요 섬세한 연주를 선보이는 유명 피아니스트 랑랑의 공연이에요";

  return (
    <section className="px-6">
      <ClacoMain className="mb-[38px]" />

      <BackArrow
        width="8"
        height="15"
        viewBox="0 0 11 20"
        className="mb-[37px] cursor-pointer"
        onClick={gotoBack}
      />

      <div className="flex space-x-2 mb-[11px]">
        <CategoryTag categoryType="무용" />
        <CategoryTag categoryType="ongoing" />
      </div>

      <span className="heading2-bold text-grayscale-80">
        유니버설발레단 〈호두까기 인형〉 - 성남
      </span>

      <div className="flex gap-[21px] mt-7">
        <div className="relative w-[130px] h-[173px]">
          <div className="absolute top-[10px] right-[10px] z-10">
            <Heart />
          </div>
          <img
            src={Poster10}
            alt="poster"
            className="absolute top-0 left-0 z-0 object-cover w-full h-full rounded-[5px]"
          />
        </div>
        <div className="flex flex-col mb-[45px]">
          <div className="flex space-x-[10px] mb-[23px]">
            <div className="flex flex-col space-y-2 caption-13 text-grayscale-70">
              <span>장소</span>
              <span>기간</span>
              <span>시간</span>
              <span>연령</span>
              <span>가격</span>
            </div>
            <div className="flex flex-col space-y-2 caption-13 text-grayscale-80">
              <span>성남시 분당구</span>
              <span>2024.11.29~2024.11.30</span>
              <span>120분(인터미션 20분 포함)</span>
              <span>만 5세 이상</span>
              <span>20,000원-90,000원</span>
            </div>
          </div>
          <a href="#" className="underline caption-12 text-grayscale-70">
            예매하러가기
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-grayscale-20 rounded-[5px] px-[27px] pt-[30px] pb-[50px] mb-[26px]">
        <div className="flex space-x-2 items-center mb-[18px]">
          <Megaphone />
          <span className="headline2-bold">Claco 쉬운 공연 설명</span>
        </div>

        <p
          className={`body2-medium text-grayscale-70 mb-[10px] ${
            isExpanded ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </p>

        <button
          onClick={toggleExpanded}
          className="flex justify-center mb-[17px]"
        >
          <BackArrow
            width="14"
            height="14"
            viewBox="0 0 11 20"
            className={`text-grayscale-60 ${
              isExpanded ? "rotate-90" : "-rotate-90"
            }`}
          />
        </button>

        <div className="flex space-x-2 items-center mb-[22px]">
          <Book />
          <span className="headline2-bold">이런 느낌의 공연이에요</span>
        </div>
        <div className="flex justify-between px-[13px]">
          {USER_GENRE.map((item, index) => (
            <Genre
              key={index}
              genreImgURL={item.imgUrl}
              genreKeyword={item.keyWord}
              className="caption-12 text-white w-[43px] h-[43px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowOverview;
