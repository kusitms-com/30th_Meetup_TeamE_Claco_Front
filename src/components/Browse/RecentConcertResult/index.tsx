import { ShowSummaryCard } from "@/components/common/ShowSummaryCard";
import { GetConcertInfiniteResponse } from "@/types";

export type RecentConcertResultProps = {
  concertData: GetConcertInfiniteResponse;
  isFetchingNextPage: boolean;
};

export const RecentConcertResult = ({
  concertData,
  isFetchingNextPage,
}: RecentConcertResultProps) => {
  return (
    <>
      <span className="caption-12 text-grayscale-60">
        총 {concertData?.pages[0].result.totalCount}개
      </span>
      <div className="flex flex-col gap-[29px] mt-[12px]">
        {concertData &&
          concertData.pages.flatMap((page) =>
            page.result.listPageResponse.map((show) => (
              <ShowSummaryCard key={show.id} data={show} />
            ))
          )}
        {/* 추가 데이터 로드 */}
        {isFetchingNextPage && (
          <div className="mt-4 text-center">
            <span>로딩 중...</span>
          </div>
        )}
      </div>
    </>
  );
};
