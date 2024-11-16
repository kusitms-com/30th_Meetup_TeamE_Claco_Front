import { SearchBar } from "@/components/common/Search/Bar";
import { ShowFilterTab } from "@/components/common/ShowFilterTab";
import { ShowSummaryCard } from "@/components/common/ShowSummaryCard";
import { useState } from "react";
import poster2 from "@/assets/images/poster2.gif";
import poster10 from "@/assets/images/poster10.gif";
import poster13 from "@/assets/images/poster13.png";
import { Show } from "@/types";
import { useDebouncedState } from "@/hooks/useDebouncedState";

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
    defaultLiked: true,
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
    defaultLiked: true,
    title: "라트라비아타",
    location: "예술의 전당 오페라 극장",
    date: "2024.11.30",
    keywords: ["섬세한", "역동적인", "서정적인", "웅장한", "새로운"],
    isLiked: false,
  },
];

export const LikedShow = () => {
  const [activeTab, setActiveTab] = useState<string>("전체");
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedState(query, 1000);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.trim());
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
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
    <div className="flex-col pb-10">
      <ShowFilterTab
        activeTab={activeTab}
        onTabClick={handleTabClick}
        className="mb-[19px]"
      />
      <div className="relative w-full mb-[22px]">
        <SearchBar value={query} onChange={handleSearchChange}>
          공연 이름을 검색해주세요
        </SearchBar>
      </div>
      <div className="flex flex-col gap-[29px]">
        {filteredData.map((show) => (
          <ShowSummaryCard
            key={show.id}
            {...show}
            toggleLike={() => toggleLike(show.id)}
          />
        ))}
      </div>
    </div>
  );
};
