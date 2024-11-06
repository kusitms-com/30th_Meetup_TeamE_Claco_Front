import { useState } from "react";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { CalendarProps } from "@/types";

export const Calendar = ({
  selectedDate,
  onDateSelect,
  startDate,
  endDate,
}: CalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getYear = () => currentDate.getFullYear();
  const getMonth = () => currentDate.getMonth();

  const startOfMonth = new Date(getYear(), getMonth(), 1);
  const endOfMonth = new Date(getYear(), getMonth() + 1, 0);

  const startDay = startOfMonth.getDay();

  const changeMonth = (months: number) => {
    setCurrentDate(new Date(getYear(), getMonth() + months, 1));
  };

  const handleDateClick = (day: number) => {
    const date = new Date(getYear(), getMonth(), day);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const getCalendarDays = () => {
    const days: (number | null)[] = [];
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= endOfMonth.getDate(); day++) {
      days.push(day);
    }
    return days;
  };

  const isDateInRange = (date: Date) => {
    if (!startDate || !endDate) return true;
    return date >= startDate && date <= endDate;
  };

  return (
    <div className="mx-auto flex-col items-center justify-center bg-grayscale-20 px-8 py-[23px] rounded-[5px]">
      <div className="flex justify-between items-center mb-[35px]">
        <BackArrow
          width="18"
          height="18"
          viewBox="0 0 11 20"
          className="cursor-pointer text-grayscale-60"
          onClick={() => changeMonth(-1)}
        />
        <span className="text-grayscale-80 headline2-bold">
          {`${getYear()}년 ${getMonth() + 1}월`}
        </span>
        <BackArrow
          width="18"
          height="18"
          viewBox="0 0 11 20"
          className="cursor-pointer text-grayscale-60 rotate-180"
          onClick={() => changeMonth(1)}
        />
      </div>

      <div className="grid grid-cols-7 gap-6 place-items-center">
        {getCalendarDays().map((day, index) => {
          const date = day ? new Date(getYear(), getMonth(), day) : null;
          const isInRange = date && isDateInRange(date);
          const isSelected =
            date &&
            selectedDate &&
            selectedDate.toDateString() === date.toDateString();

          return (
            <div
              key={index}
              className={`flex items-center justify-center w-9 h-9 body1-medium rounded-full ${
                day
                  ? isSelected
                    ? "bg-grayscale-80 text-grayscale-30"
                    : isInRange
                      ? "text-grayscale-80 hover:bg-grayscale-80 hover:text-grayscale-30 cursor-pointer"
                      : "text-grayscale-50"
                  : ""
              }`}
              onClick={() => day && isInRange && handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
};