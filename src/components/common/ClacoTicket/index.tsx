import { ReactComponent as ClacoTicketContainer } from "@/assets/svgs/Claco_Ticket.svg";
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
        className="absolute top-[7.54px] left-[7px] w-[199px] h-[266px] rounded-[5px]"
      />
      <div className="absolute bottom-[105px] left-[40.5px]">
        <div className="flex flex-col">
          <div className="font-Nonchalance text-dark text-[26.31px]">
            2024. 10. 16
          </div>
          <div className="text-center font-medium text-[10px] text-dark">
            <div>{data.title}</div>
            <div>LG ART CENTER</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[55.18px] px-[13px] w-[213px] flex justify-between">
        {USER_GENRE.map((item, index) => (
          <Genre
            key={index}
            genreType={item.imgUrl}
            genreKeyword={item.keyWord}
            className="w-[29px] h-[29px] text-primary-800 font-medium text-[8px]"
          />
        ))}
      </div>

      <ClacoTicketContainer />
    </div>
  );
};
