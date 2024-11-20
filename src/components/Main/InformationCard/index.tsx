import { ReactComponent as Location_Gray } from "@/assets/svgs/Location_gray.svg";
import { ReactComponent as Calendar } from "@/assets/svgs/Calendar.svg";
import { InfoCardProps } from "@/types/poster";
import { formatDate, useTruncateText } from "@/hooks/utils";
import { CategoryTag } from "@/components/common/CategoryTag";
import { useNavigate } from "react-router-dom";

export const VerticalInfoCard = ({
  id,
  image,
  title,
  location,
  dateFrom,
  dateTo,
  genre,
}: InfoCardProps) => {
  const _title = useTruncateText(title, 14);
  const _dateFrom = formatDate(dateFrom);
  const _dateTo = formatDate(dateTo);

  const navigate = useNavigate();
  const gotoShowDetail = () => {
    navigate(`/show/${id}`);
  };

  return (
    <div onClick={gotoShowDetail}>
      <div className="flex-col w-[219px] min-h-[430px] p-[22px] bg-[#242424] rounded-[5px]">
        <img
          className="max-w-[104px] max-h-[132px] object-contain rounded-[5px] mb-[18px]"
          src={image}
        />
        <CategoryTag categoryType={genre} />
        <p className="headline2-bold text-grayscale-80 my-[10px]">{_title}</p>
        <div className="body2-medium text-grayscale-70">
          <div className="flex items-center">
            <Location_Gray />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Calendar />
            <span>
              {_dateFrom === _dateTo ? (
                <span>{_dateFrom}</span>
              ) : (
                <span className="truncate max-w-[170px]">
                  {_dateFrom}~{_dateTo}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HorizontalInfoCard = ({
  id,
  image,
  title,
  location,
  dateFrom,
  dateTo,
  genre,
}: InfoCardProps) => {
  const _title = useTruncateText(title, 14);
  const _dateFrom = formatDate(dateFrom);
  const _dateTo = formatDate(dateTo);
  const navigate = useNavigate();
  const gotoShowDetail = () => {
    navigate(`/show/${id}`);
  };
  return (
    <div
      className="w-[342px] h-[176px] bg-[#242424] rounded-[5px] py-[22px] px-5"
      onClick={gotoShowDetail}
    >
      <div className="flex space-x-5">
        <img
          className="max-w-[104px] max-h-[132px] object-contain rounded-[5px] mb-[18px]"
          src={image}
        />
        <div className="flex-col space-y-[14px]">
          <CategoryTag categoryType={genre} />
          <p className="headline2-bold text-grayscale-80 mb-[10px]">{_title}</p>
          <div className="body2-medium text-grayscale-70">
            <div className="flex items-center">
              <Location_Gray />
              <span className="truncate max-w-[170px]">{location}</span>
            </div>
            <div className="flex items-center">
              <Calendar />
              {_dateFrom === _dateTo ? (
                <span>{_dateFrom}</span>
              ) : (
                <span className="truncate max-w-[170px]">
                  {_dateFrom}~{_dateTo}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
