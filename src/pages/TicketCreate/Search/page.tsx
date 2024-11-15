import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ConfirmButton } from "@/components/common/Button";
import { SearchBar } from "@/components/common/Search/Bar";
import { SearchCard } from "@/components/common/Search/Card";
import { Progress } from "@/components/ui/progress";
import { useDebouncedState } from "@/hooks/useDebouncedState";
import { SearchCardProps } from "@/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const TicketSearchPage = () => {
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  const [query, setQuery] = useState<string>("");
  const debouncedQuery = useDebouncedState(query, 1000);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/ticketbook");
  };

  const handleConfirmClick = () => {
    navigate("/ticketcreate/info");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleShowClick = (id: number) => {
    setSelectedShow(id);
  };

  const shows: SearchCardProps[] = [
    {
      id: 1,
      title: "유니버설발레단 (호두까기인형) - 대구",
      date: "2024.11.26. (화) ~ 2024.11.27. (수)",
      categoryType: "dance",
    },
    {
      id: 2,
      title: "2024 호두겨울클래식 (조성현X함경 듀오 리사이틀)",
      date: "2024.11.26. (화) ~ 2024.11.27. (수)",
      categoryType: "classical",
    },
    {
      id: 3,
      title: "2024 류경희드림호두댄스 정기공연",
      date: "2024.11.26. (화) ~ 2024.11.27. (수)",
      categoryType: "classical",
    },
  ];

  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(debouncedQuery.toLowerCase()),
  );

  return (
    <div className="relative flex flex-col h-screen px-[24px] pt-[46px] pb-[60px]">
      <div className="flex flex-col gap-[33px]">
        <div className="relative flex items-center justify-center">
          <BackArrow
            width="9"
            height="18"
            viewBox="0 0 11 20"
            className="absolute left-0"
            onClick={handleBackClick}
          />
          <span className="headline2-bold text-grayscale-80">티켓 등록</span>
        </div>
        <Progress value={30} />
        <SearchBar value={query} onChange={handleSearchChange}>
          관람한 공연을 검색해주세요
        </SearchBar>
      </div>

      <div className="flex-grow overflow-y-auto mt-[20px]">
        <div
          className={`flex flex-col gap-[11px] ${query === "" ? "hidden" : ""}`}
        >
          {filteredShows.map((show) => (
            <SearchCard
              key={show.id}
              onClick={() => handleShowClick(show.id!)}
              className={`cursor-pointer ${
                selectedShow === show.id ? "border-grayscale-80" : ""
              }`}
              title={show.title}
              date={show.date}
              categoryType={show.categoryType}
            />
          ))}
        </div>
        <div className="sticky bottom-0 h-[102px] w-full bg-gradient-to-b from-transparent to-[#1C1C1C] pointer-events-none" />
      </div>

      <ConfirmButton
        isChecked={selectedShow !== null}
        onClick={handleConfirmClick}
        disabled={selectedShow === null}
      >
        다음
      </ConfirmButton>
    </div>
  );
};
