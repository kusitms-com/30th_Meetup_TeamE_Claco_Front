export type CalendarProps = {
  selectedDate: Date | null;
  onDateSelect?: (date: Date) => void;
  startDate?: Date;
  endDate?: Date;
};
