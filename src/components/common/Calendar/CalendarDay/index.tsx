import { CalendarDayProps } from "@/types";

export const CalendarDay = ({
  day,
  isSelected,
  isInRange,
  isWithinRange,
  isRangeStart,
  isRangeEnd,
  onClick,
}: CalendarDayProps) => {
  return (
    <div className="relative flex items-center justify-center">
      {isWithinRange && !isRangeStart && !isRangeEnd && (
        <div className="w-full h-full absolute left-0 top-0 bg-grayscale-30" />
      )}

      <div
        className={`flex items-center justify-center rounded-full w-9 h-9 body1-medium ${
          day
            ? isSelected
              ? "bg-grayscale-80 text-grayscale-30"
              : isRangeStart
                ? "bg-grayscale-80 text-grayscale-30"
                : isRangeEnd
                  ? "bg-grayscale-80 text-grayscale-30"
                  : "text-grayscale-60 cursor-pointer"
            : "text-grayscale-60"
        } relative z-10`}
        onClick={day && isInRange ? onClick : undefined}
      >
        {day}
      </div>
    </div>
  );
};
