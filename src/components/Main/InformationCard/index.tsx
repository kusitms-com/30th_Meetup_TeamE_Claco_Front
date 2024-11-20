import { ReactComponent as Location_Gray } from "@/assets/svgs/Location_gray.svg";
import { ReactComponent as Calendar } from "@/assets/svgs/Calendar.svg";
import { InfoCardProps } from "@/types/poster";
import { useTruncateText } from "@/hooks/utils";
import { CategoryTag } from "@/components/common/CategoryTag";

export const VerticalInfoCard = ({
  id,
  image,
  title,
  genrenm,
  location,
  date,
}: InfoCardProps) => {
  return (
    <a href={`/show/${id}`}>
      <div className="flex-col w-[219px] min-h-[460px] p-[22px] bg-[#242424] rounded-[5px]">
        <img
          className="w-[174px] h-[232px] rounded-[5px] object-contain mb-[18px]"
          src={image}
        />
        <CategoryTag categoryType={genrenm || "공연 장르 정보 없음"} />
        <p className="headline2-bold text-grayscale-80 my-[10px]">{title}</p>
        <div className="body2-medium text-grayscale-70">
          <div className="flex items-center">
            <Location_Gray />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar />
            <span className="truncate max-w-[150px]">{date}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export const HorizontalInfoCard = ({
  id,
  image,
  title,
  genrenm,
  location,
  date,
}: InfoCardProps) => {
  const _title = useTruncateText(title, 14);
  return (
    <a
      href={`/show/${id}`}
      className="w-[342px] h-[176px] bg-[#242424] rounded-[5px] py-[22px] px-5"
    >
      <div className="flex space-x-5">
        <img
          className="w-[104px] h-[132px] rounded-[5px] object-contain mb-[18px]"
          src={image}
        />
        <div className="flex-col space-y-[14px]">
          <CategoryTag categoryType={genrenm || "공연 장르 정보 없음"} />
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
    </a>
  );
};
