import { SearchBar } from "@/components/common/Search/Bar";
import { useState } from "react";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import poster2 from "@/assets/images/poster2.gif";
import poster3 from "@/assets/images/poster3.webp";
import poster10 from "@/assets/images/poster10.gif";
import poster13 from "@/assets/images/poster13.png";
import poster4 from "@/assets/images/poster4.gif";
import poster8 from "@/assets/images/poster8.gif";
import { ReactComponent as Filter } from "@/assets/svgs/filter.svg";
import { ReactComponent as Refresh } from "@/assets/svgs/refresh.svg";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { SearchCard } from "@/components/common/Search/Card";
import { ClacoPick } from "@/components/Browse/ClacoPick";
import { ShowFilterTab } from "@/components/common/ShowFilterTab";
import { ShowSummaryCard } from "@/components/common/ShowSummaryCard";
import { Show } from "@/types";
import { ShowFilter } from "@/components/Browse/ShowFilter";

const initialShowData: Show[] = [
  {
    id: 1,
    posterImage: poster10,
    showType: "dance",
    status: "upcoming",
    defaultLiked: true,
    title: "유니버설발레단 (호두까기 인형) - 성남",
    location: "예술의 전당 오페라 극장",
    date: "2024.11.30",
    keywords: ["섬세한", "역동적인", "서정적인", "웅장한", "새로운"],
    isLiked: true,
  },
  {
    id: 2,
    posterImage: poster13,
    showType: "classical",
    status: "inProgress",
    defaultLiked: false,
    title: "대니 구 크리스마스 콘서트 <HOME>",
    location: "예술의 전당 오페라 극장",
    date: "2024.11.30",
    keywords: ["섬세한", "역동적인", "서정적인", "웅장한", "새로운"],
    isLiked: false,
  },
  {
    id: 3,
    posterImage: poster2,
    showType: "dance",
    status: "completed",
    defaultLiked: false,
    title: "라트라비아타",
    location: "예술의 전당 오페라 극장",
    date: "2024.11.30",
    keywords: ["섬세한", "역동적인", "서정적인", "웅장한", "새로운"],
    isLiked: false,
  },
];

export const BrowsePage = () => {
  const [activeTab, setActiveTab] = useState<string>("전체");
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedState(query, 1000);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [selectedShow, setSelectedShow] = useState<Show | null>(null);
  const [showAllResults, setShowAllResults] = useState<boolean>(false);
  const totalShows: number = 1234;

  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("");
  const [selectedFeature, setSelectedFeature] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
    setShowSearchResults(e.target.value.trim().length > 0);
    setSelectedShow(null);
    setShowAllResults(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && filteredData.length === 0) {
      setShowAllResults(true);
      setShowSearchResults(false);
    }
  };

  const handleSearchCardClick = (show: Show) => {
    setSelectedShow(show);
    setShowSearchResults(false);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setShowAllResults(false);
  };

  const handleFilterClick = () => {
    setShowFilter(true);
  };

  const closeFilter = () => {
    setShowFilter(false);
  };

  const applyFilter = (
    price: string,
    location: string,
    date: string,
    feature: string,
  ) => {
    setPriceRange(price);
    setSelectedLocation(location);
    setDateRange(date);
    setSelectedFeature(feature);
    closeFilter();
  };

  const handleRefreshClick = () => {
    setPriceRange("");
    setSelectedLocation("");
    setDateRange("");
    setSelectedFeature("");
  };

  const handleBackClick = () => {
    setQuery("");
    setShowSearchResults(false);
    setSelectedShow(null);
  };

  const [showData, setShowData] = useState<Show[]>(
    initialShowData.map((show) => ({
      ...show,
      isLiked: show.defaultLiked,
    })),
  );

  const toggleLike = (id: number) => {
    setShowData((prevData) =>
      prevData.map((show) =>
        show.id === id ? { ...show, isLiked: !show.isLiked } : show,
      ),
    );
  };

  const toggleLikeForSelectedShow = () => {
    if (selectedShow) {
      setSelectedShow((prevShow) =>
        prevShow ? { ...prevShow, isLiked: !prevShow.isLiked } : null,
      );
    }
  };

  const categoryFilteredData = showData.filter((show) => {
    return (
      activeTab === "전체" ||
      (activeTab === "클래식" && show.showType === "classical") ||
      (activeTab === "무용" && show.showType === "dance")
    );
  });

  const filteredData = categoryFilteredData.filter((show) => {
    return (
      debouncedQuery === "" ||
      show.title.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  });

  return (
    <div className="px-6 pb-[110px] min-h-screen relative">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-[46px] mb-[30px] flex items-center relative w-full justify-center">
          {(showAllResults || selectedShow || filteredData.length === 0) && (
            <BackArrow
              onClick={handleBackClick}
              className="absolute left-0 cursor-pointer"
            />
          )}
          <span className="headline2-bold text-grayscale-80">둘러보기</span>
        </div>
        <div className="relative w-full">
          <SearchBar
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          >
            공연명, 출연자, 극단 등을 검색하세요.
          </SearchBar>

          {debouncedQuery &&
            showSearchResults &&
            !showAllResults &&
            filteredData.length !== 0 && (
              <div className="absolute flex flex-col w-full bg-grayscale-20 z-50 p-2 gap-3">
                {filteredData.length > 0
                  ? filteredData.map((show) => (
                      <SearchCard
                        key={show.id}
                        id={show.id}
                        title={show.title}
                        date={show.date}
                        categoryType={show.showType}
                        onClick={() => handleSearchCardClick(show)}
                      />
                    ))
                  : ""}
              </div>
            )}
        </div>
      </div>
      {!debouncedQuery && !selectedShow && !showAllResults && (
        <>
          <ShowFilterTab
            activeTab={activeTab}
            onTabClick={handleTabClick}
            className="mt-6 mb-[14px]"
          />
          <div className="flex flex-col gap-[15px] mb-3">
            <div className="flex items-center justify-between gap-3 py-1">
              {priceRange ||
              selectedLocation ||
              dateRange ||
              selectedFeature ? (
                <div className="flex text-center gap-[5px] pl-1 overflow-x-auto scrollbar-none">
                  {priceRange && (
                    <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                      {priceRange}
                    </div>
                  )}
                  {selectedLocation && (
                    <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                      {selectedLocation}
                    </div>
                  )}
                  {dateRange && (
                    <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                      {dateRange}
                    </div>
                  )}
                  {selectedFeature && (
                    <div className="rounded-[20px] px-[10px] py-1 border-[0.5px] border-grayscale-60 bg-transparent caption-12 text-grayscale-60 whitespace-nowrap">
                      {selectedFeature}
                    </div>
                  )}
                </div>
              ) : (
                <span className="headline1-bold text-grayscale-80">
                  최근 공연
                </span>
              )}
              <div className="flex gap-2">
                <Filter onClick={handleFilterClick} />
                <Refresh onClick={handleRefreshClick} />
              </div>
            </div>
            <span className="caption-12 text-grayscale-60">
              총 {totalShows}개
            </span>
          </div>

          <div className="flex flex-col gap-[29px]">
            {categoryFilteredData.map((show) => (
              <ShowSummaryCard
                key={show.id}
                {...show}
                toggleLike={() => toggleLike(show.id)}
              />
            ))}
          </div>
        </>
      )}

      {showFilter ? (
        <ShowFilter onClose={closeFilter} onApply={applyFilter} />
      ) : (
        <>
          {(showAllResults || selectedShow) && (
            <div className="mt-[25px]">
              <span className="headline1-bold text-grayscale-80">
                총 {totalShows}개의 공연
              </span>
              <div className="flex flex-col gap-11 mt-4">
                {selectedShow ? (
                  <div className="flex flex-col gap-11">
                    <ShowSummaryCard
                      {...selectedShow}
                      toggleLike={toggleLikeForSelectedShow}
                    />
                  </div>
                ) : (
                  filteredData.map((show) => (
                    <ShowSummaryCard
                      key={show.id}
                      {...show}
                      toggleLike={() => toggleLike(show.id)}
                    />
                  ))
                )}
              </div>
            </div>
          )}

          {debouncedQuery && filteredData.length === 0 && (
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
                  userName="울랄라"
                  picks={[
                    { imageSrc: poster8, title: "랑랑 피아노 리사이틀" },
                    { imageSrc: poster3, title: "빈 필하모닉" },
                    { imageSrc: poster4, title: "피아노 리사이틀" },
                  ]}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
