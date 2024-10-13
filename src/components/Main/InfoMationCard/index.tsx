import Location_Gray from "@/assets/svgs/Location_gray.svg?react";
import Calendar from "@/assets/svgs/Calendar.svg?react";
import { InfoCardProps } from "@/types/poster";

export const VerticalInfoCard = ({
  image,
  title,
  location,
  date,
}: InfoCardProps) => {
  return (
    <div className="w-[219px] h-[418px] bg-grayscale-20 rounded-[5px] p-[22px]">
      <div className="flex-col">
        <img
          className="w-[174px] h-[232px] rounded-[5px] object-contain mb-[18px]"
          src={image}
        />
        <div className="body4-normal rounded-[20px] bg-[#6370E4] inline-block py-1 px-2 mb-[14px]">
          무용
        </div>
        <p className="headline2-bold text-grayscale-80 mb-[10px]">{title}</p>
        <div className="body2-medium text-grayscale-70">
          <div className="flex items-center">
            <Location_Gray />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HorizontalInfoCard = () => {
  return <div></div>;
};
