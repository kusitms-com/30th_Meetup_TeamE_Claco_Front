import { ReactComponent as ClacoBook } from "@/assets/svgs/ClacoBook.svg";
import Image from "@/assets/images/poster6.gif";
import { Genre } from "@/components/common/Genre";

import grand from "@/assets/images/Genre/grand.png";
import delicate from "@/assets/images/Genre/delicate.png";
import classical from "@/assets/images/Genre/classical.png";
import dynamic from "@/assets/images/Genre/dynamic.png";
import familiar from "@/assets/images/Genre/familiar.png";
import { REVIEW_MOCK_DATA_type } from "@/components/Main/Analysis/TicketRecommend";

export type ClacoTicketProps = {
  data: REVIEW_MOCK_DATA_type;
};

export const ClacoTicket = ({ data }: ClacoTicketProps) => {
  const USER_GENRE = [
    { imgUrl: grand, keyWord: "grand" },
    { imgUrl: delicate, keyWord: "delicate" },
    { imgUrl: classical, keyWord: "classical" },
    { imgUrl: dynamic, keyWord: "dynamic" },
    { imgUrl: familiar, keyWord: "familiar" },
  ];

  return (
    <div className="relative">
      <img
        src={Image}
        alt="claco book 포스터 이미지"
        className="absolute top-[11.41px] left-[12.13px] w-[208.42px] h-[278.2px] rounded-[5px]"
      />
      <div className="absolute bottom-[106.02px] left-[52px] font-unicaOne text-dark text-[26.31px]">
        2024. 10. 16
      </div>
      <div className="absolute bottom-[71.8px] w-full body2-medium text-center text-dark">
        <div>{data.title}</div>
        <div>LG ART CENTER</div>
      </div>
      <div className="absolute bottom-[35.18px] w-full px-[19px] flex justify-between">
        {USER_GENRE.map((item, index) => (
          <Genre
            key={index}
            genreType={item.imgUrl}
            genreKeyword={item.keyWord}
            isShow={true}
            className="w-[29px] h-[29px]"
          />
        ))}
      </div>
      <div className="absolute bottom-[10.96px] w-full body2-medium text-center text-dark">
        Claco
      </div>
      <ClacoBook />
    </div>
  );
};
