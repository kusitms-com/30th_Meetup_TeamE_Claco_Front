import Location_Gray from "@/assets/svgs/Location_gray.svg?react";
import Calendar from "@/assets/svgs/Calendar.svg?react";
import { InfoCardProps } from "@/types/poster";
import { useTruncateText } from "@/hooks";

export const VerticalInfoCard = ({
  image,
  title,
  location,
  date,
}: InfoCardProps) => {
  return (
    <div className="w-[219px] h-[418px] bg-[#242424] rounded-[5px] p-[22px]">
      <div className="flex-col">
        <img
          className="w-[174px] h-[232px] rounded-[5px] object-contain mb-[18px]"
          src={image}
        />
        <div className="body4-normal rounded-[20px] bg-[#6370E4] inline-block py-1 px-2 mb-[14px] text-common-white">
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

export const HorizontalInfoCard = ({
  image,
  title,
  location,
  date,
}: InfoCardProps) => {
  const _title = useTruncateText(title, 14);
  return (
    <div className="w-[342px] h-[176px] bg-[#242424] rounded-[5px] py-[22px] px-5">
      <div className="flex space-x-5">
        <img
          className="w-[104px] h-[132px] rounded-[5px] object-contain mb-[18px]"
          src={image}
        />
        <div className="flex-col space-y-[14px]">
          <div className="items-center max-h-[24px] inline-block bg-primary-700 rounded-[20px] body4-normal px-2 py-[3px] text-common-white">
            클래식
          </div>
          <p className="headline2-bold text-grayscale-80 mb-[10px]">{_title}</p>
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
    </div>
  );
};
