import { CalendarDayProps } from "@/types";

export const CalendarDay = ({
  day,
  isSelected,
  isInRange,
  isWithinRange,
  isRangeStart,
  isRangeEnd,
  mode,
  onClick,
}: CalendarDayProps) => {
  return (
    <div className="relative flex items-center justify-center w-10 h-10 px-4">
      {isWithinRange && (
        <div
          className={`absolute inset-0 z-30 ${
            isRangeStart ? "rounded-l-full" : isRangeEnd ? "rounded-r-full" : ""
          } bg-grayscale-30`}
        />
      )}

      <div
        className={`flex items-center justify-center rounded-full px-4 w-10 h-10 body1-medium z-50 ${
          day
            ? isSelected || isRangeStart || isRangeEnd
              ? "bg-grayscale-80 text-grayscale-30"
              : isInRange
                ? "text-grayscale-80"
                : !isWithinRange && mode !== "single"
                  ? "text-grayscale-60"
                  : isWithinRange
                    ? "text-grayscale-60"
                    : "text-grayscale-50"
            : ""
        }`}
        onClick={day ? onClick : undefined}
      >
        {day}
      </div>
    </div>
  );
};
