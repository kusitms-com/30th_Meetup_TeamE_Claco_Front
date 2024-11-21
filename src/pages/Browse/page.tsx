import { SearchBar } from "@/components/common/Search/Bar";
import { ShowFilterTab } from "@/components/common/ShowFilterTab";
import { useEffect, useRef, useState } from "react";
import { ReactComponent as Filter } from "@/assets/svgs/filter.svg";
import { ReactComponent as Refresh } from "@/assets/svgs/refresh.svg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";

import { SearchCard } from "@/components/common/Search/Card";
import { ShowFilter } from "@/components/Browse/ShowFilter";
import { ShowSummaryCard } from "@/components/common/ShowSummaryCard";

import poster13 from "@/assets/images/poster13.png";
import poster4 from "@/assets/images/poster4.gif";
import poster8 from "@/assets/images/poster8.gif";
import { ClacoPick } from "@/components/Browse/ClacoPick";
import {
  useDebouncedState,
  useDeferredLoading,
  useRefFocusEffect,
  useShowFilter,
} from "@/hooks/utils";
import { AutoCompleteSearchCard, TabMenu } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import useGetAutoCompleteSearch from "@/hooks/queries/useGetAutoCompleteSearch";
import useGetInfiniteConcerts from "@/hooks/queries/useGetConcertList";
import useGetSearch from "@/hooks/queries/useGetSearch";

export const BrowsePage = () => {
  const [query, setQuery] = useState<string>("");
  const [activeTab, setActiveTab] = useState<TabMenu>(null);
  const [skipDebounce, setSkipDebounce] = useState<boolean>(false);
  const debouncedQuery = useDebouncedState(query, 1000, skipDebounce);

  const {
    data: concertData,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetInfiniteConcerts({
    genre: activeTab,
    size: 9,
  });

  const { data: autoCompleteData, isLoading: autoCompleteDataLoading } =
    useGetAutoCompleteSearch(debouncedQuery);

  const { data: searchData, fetchNextPage: searchFetchNextPage } = useGetSearch(
    {
      query: debouncedQuery,
      size: 9,
    }
  );

  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [showSearchResult, setShowSearchResult] = useState<boolean>(false);
  const [autoCompleteList, setAutoCompleteList] = useState<
    AutoCompleteSearchCard[]
  >([]);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const {
    filterState,
    showFilter,
    hasActiveFilters,
    handleFilterClick,
    handleRefreshClick,
    applyFilter,
    closeFilter,
  } = useShowFilter();

  const { shouldShowSkeleton } = useDeferredLoading(isLoading);

  const { elementRef } = useRefFocusEffect<HTMLDivElement>(fetchNextPage, [
    concertData,
    isSearch,
  ]);
  const { elementRef: searchRef } = useRefFocusEffect<HTMLDivElement>(
    searchFetchNextPage,
    [searchData]
  );

  useEffect(() => {
    if (autoCompleteData && !autoCompleteDataLoading) {
      // console.log(autoCompleteData);
      setAutoCompleteList(autoCompleteData.result);
    }
  }, [
    debouncedQuery,
    autoCompleteDataLoading,
    setAutoCompleteList,
    autoCompleteData,
  ]);

  const handleTabClick = (tab: TabMenu) => {
    setActiveTab(tab);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSkipDebounce(newValue === "");
    setQuery(newValue);
    if (newValue.trim().length === 0) setAutoCompleteList([]);
  };

  const isProcessing = useRef(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isProcessing.current) {
      e.preventDefault();
      e.stopPropagation();

      isProcessing.current = true;

      setIsSearch(false);
      setShowSearchResult(true);
      setSkipDebounce(true);
      setActiveTab(null);

      setTimeout(() => {
        isProcessing.current = false;
        searchInputRef.current?.blur();
      }, 300);
    }
  };

  useEffect(() => {
    if (skipDebounce) {
      const timer = setTimeout(() => {
        setSkipDebounce(false);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [skipDebounce]);

  if (shouldShowSkeleton) {
    return (
      <div className="px-6 pb-[110px] min-h-screen relative">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-[46px] mb-[30px] flex items-center relative w-full justify-center">
            <span className="headline2-bold text-grayscale-80">둘러보기</span>
          </div>
          <div className="relative w-full">
            <SearchBar
              ref={searchInputRef}
              value={query}
              onFocus={() => setIsSearch(true)}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              placeholder={"공연명, 출연자, 극단 등을 검색하세요."}
            />
            <ShowFilterTab
              activeTab={activeTab}
              onTabClick={handleTabClick}
              className="mt-6 mb-[14px]"
            />
            <div className="flex justify-between mb-[10px]">
              <Skeleton className="w-[68px] h-[16px]" />
              <Skeleton className="w-[68px] h-[16px]" />
            </div>
            <div className="flex flex-col gap-[22px]">
              {Array.from(Array(5).keys()).map((_, index) => (
                <ShowSummaryCard.Skeleton key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 pb-[110px] min-h-screen relative">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[46px] mb-[30px] flex items-center relative w-full justify-center">
          {isSearch ? (
            <BackArrow
              className="absolute left-0"
              onClick={() => {
                setIsSearch(false);
                setShowSearchResult(false);
              }}
            />
          ) : null}

          <span className="headline2-bold text-grayscale-80">둘러보기</span>
        </div>
        <div className="relative w-full">
          <SearchBar
            ref={searchInputRef}
            value={query}
            onFocus={() => setIsSearch(true)}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            placeholder={"공연명, 출연자, 극단 등을 검색하세요."}
          />

          {/* 검색어 자동 완성 영역 */}
          {isSearch ? (
            <div className="flex flex-col space-y-[11px] mt-[11px]">
              {debouncedQuery.trim().length !== 0 ? (
                <>
                  {autoCompleteList?.map((show) => (
                    <SearchCard
                      key={show.id}
                      data={show}
                      searchKeyWord={query}
                    />
                  ))}
                </>
              ) : null}
            </div>
          ) : (
            <>
              {debouncedQuery.trim().length === 0 ? (
                <ShowFilterTab
                  activeTab={activeTab}
                  onTabClick={handleTabClick}
                  className="mt-6 mb-[14px]"
                />
              ) : null}

              {showFilter && (
                <ShowFilter onClose={closeFilter} onApply={applyFilter} />
              )}

              <div className="flex items-center justify-between gap-3 py-1">
                {hasActiveFilters ? (
                  <div className="flex text-center gap-[5px] pl-1 overflow-x-auto scrollbar-hide">
                    {filterState.priceRange && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.priceRange}
                      </div>
                    )}
                    {filterState.selectedLocation && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.selectedLocation}
                      </div>
                    )}
                    {filterState.dateRange && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.dateRange}
                      </div>
                    )}
                    {filterState.selectedFeature && (
                      <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                        {filterState.selectedFeature}
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="headline1-bold text-grayscale-80">
                    {debouncedQuery.trim().length === 0 ? "최근 공연" : null}
                  </span>
                )}
                {debouncedQuery.trim().length === 0 ? (
                  <div className="flex gap-2">
                    <Filter onClick={handleFilterClick} />
                    <Refresh onClick={handleRefreshClick} />
                  </div>
                ) : null}
              </div>
              <div className="mt-4">
                {hasActiveFilters && (
                  <span className="headline1-bold text-grayscale-80">
                    {debouncedQuery.trim().length === 0 ? "최근 공연" : null}
                  </span>
                )}
              </div>
              {debouncedQuery.trim().length === 0 ? (
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
              ) : (
                // 검색 이후 로직
                <>
                  <div className="flex flex-col gap-[29px] mt-[12px]">
                    {searchData?.pages[0].result.totalCount === 0 ? (
                      <div className="flex flex-col items-center mt-[121px]">
                        <div className="flex flex-col gap-1 mb-[112px]">
                          <span className="headline1-bold text-grayscale-90">
                            찾으시는 공연 정보가 없어요
                          </span>
                          <span className="caption-13 text-grayscale-50">
                            입력하신 단어가 정확한지 확인해주세요
                          </span>
                        </div>

                        <div className="w-full max-w-screen-sm">
                          <ClacoPick
                            userName="달보라"
                            picks={[
                              {
                                imageSrc: poster8,
                                title: "랑랑 피아노 리사이틀",
                              },
                              { imageSrc: poster13, title: "빈 필하모닉" },
                              { imageSrc: poster4, title: "피아노 리사이틀" },
                            ]}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="headline1-bold">
                          총 {searchData?.pages[0].result.totalCount}개의 공연
                        </span>
                        {searchData &&
                          searchData.pages.flatMap((page) =>
                            page.result.listPageResponse.map((show) => (
                              <ShowSummaryCard key={show.id} data={show} />
                            ))
                          )}
                      </>
                    )}
                  </div>
                </>
              )}
            </>
          )}
        </div>
        {!isSearch ? (
          <div
            className="h-1"
            ref={!showSearchResult ? elementRef : searchRef}
          />
        ) : null}
      </div>
    </div>
  );
};
