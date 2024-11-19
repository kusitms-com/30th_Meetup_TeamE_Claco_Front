export const runtimeToMinutes = (runtime: string): string => {
  if (!runtime) return "공연 시간 정보 없음";

  const hourMatch = runtime.match(/(\d+)시간/);
  const minuteMatch = runtime.match(/(\d+)분/);

  const hours = hourMatch ? parseInt(hourMatch[1], 10) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1], 10) : 0;

  return `${hours * 60 + minutes}분`;
};
