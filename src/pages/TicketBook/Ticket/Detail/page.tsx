import { Progress } from "@/components/ui/progress";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Required } from "@/assets/svgs/required.svg";
import { ReactComponent as Remove } from "@/assets/svgs/remove.svg";
import { ReactComponent as Plus } from "@/assets/svgs/plus.svg";
import { useNavigate } from "react-router-dom";
import { ConfirmButton } from "@/components/common/Button";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/common/Calendar";
import { SearchCard } from "@/components/common/Search/Card";
import { Modal } from "@/components/common/Modal";

export const TicketDetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBackClick = () => {
    handleOpenModal();
  };

  const handleConfirmClick = () => {
    navigate("/ticketbook/ticket/review");
  };

  const showTimesByDate: { [key: string]: { time: string }[] } = {
    "2024-11-26": [{ time: "13:30" }, { time: "19:30" }],
    "2024-11-27": [{ time: "15:00" }, { time: "20:00" }],
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedShowTime, setSelectedShowTime] = useState<string | null>(null);
  const [availableShowTimes, setAvailableShowTimes] = useState<
    { time: string }[]
  >([]);
  const [castingList, setCastingList] = useState<string[]>(["조성진"]);
  const [newCasting, setNewCasting] = useState<string>("");
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    setIsValid(selectedShowTime !== null && castingList.length > 0);
  }, [selectedShowTime, castingList]);

  useEffect(() => {
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const dateString = `${year}-${month}-${day}`;

      setAvailableShowTimes(showTimesByDate[dateString] || []);
      setSelectedShowTime(null);
    }
  }, [selectedDate]);

  const handleShowTimeClick = (time: string) => {
    setSelectedShowTime(time);
  };

  const handleAddCasting = () => {
    if (newCasting.trim() !== "") {
      setCastingList([...castingList, newCasting]);
      setNewCasting("");
      setIsAdding(false);
    }
  };

  const handleRemoveCasting = (index: number) => {
    setCastingList(castingList.filter((_, i) => i !== index));
  };

  const handleCloseCastingModal = () => {
    setIsAdding(false);
    setNewCasting("");
  };

  return (
    <div className="relative flex flex-col min-h-screen px-6 pt-[46px] pb-[60px]">
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
        <Progress value={50} />
      </div>

      {isModalOpen && (
        <Modal
          isDualButton={true}
          positiveButtonText="계속하기"
          negativeButtonText="나가기"
          onPositiveButtonClick={handleCloseModal}
          onNegativeButtonClick={() => navigate("/ticketbook")}
          onClose={handleCloseModal}
        >
          <div className="flex flex-col items-center justify-center mt-[13px] mb-[30px]">
            <span className="headline2-bold text-grayscale-80">
              티켓 등록을 그만두시겠어요?
            </span>
            <span className="caption-12 text-grayscale-70">
              입력된 정보는 저장되지 않습니다
            </span>
          </div>
        </Modal>
      )}

      <div className="mt-[37px]">
        <SearchCard
          title="유니버설발레단 (호두까기인형) - 대구"
          date="2024.11.26. (화) ~ 2024.11.27. (수)"
          categoryType="dance"
        />
        <div className="flex flex-col mt-[37px] mb-[62px] gap-[27px]">
          <div className="flex">
            <span className="headline2-bold text-grayscale-80">
              관람 날짜를 선택해주세요
            </span>
            <Required />
          </div>
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={(date) => setSelectedDate(date)}
            startDate={new Date(2024, 10, 26)}
            endDate={new Date(2024, 10, 27)}
          />
        </div>

        {selectedDate && (
          <>
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex">
                <span className="headline2-bold text-grayscale-80">
                  관람 회차를 선택해주세요
                </span>
                <Required />
              </div>
              <div className="flex flex-wrap gap-[10px] justify-center">
                {availableShowTimes.map((showTime) => (
                  <button
                    key={showTime.time}
                    onClick={() => handleShowTimeClick(showTime.time)}
                    className={`rounded-[5px] flex-1 items-center justify-center py-[14px] px-[61px] ${
                      selectedShowTime === showTime.time
                        ? "bg-grayscale-80 text-grayscale-20"
                        : "bg-grayscale-30 text-grayscale-80"
                    }`}
                  >
                    <span className="body1-medium">{showTime.time}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex">
                <span className="headline2-bold text-grayscale-80">공연장</span>
                <Required />
              </div>
              <div className="rounded-[7px] flex items-center gap-[10px] bg-grayscale-30 p-4">
                <span className="body2-medium text-grayscale-80">
                  세종 문화 회관
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-center gap-1">
                <span className="headline2-bold text-grayscale-80">
                  관람 좌석을 입력해주세요
                </span>
                <span className="body2-medium text-grayscale-60">(선택)</span>
              </div>
              <div className="rounded-[7px] flex items-center gap-[10px] bg-grayscale-30 p-4">
                <input className="flex w-full outline-none body2-medium text-grayscale-60 bg-grayscale-30" />
              </div>
            </div>
          </>
        )}

        {selectedShowTime && (
          <div className="flex flex-col mb-10">
            <div className="flex mb-5">
              <span className="headline2-bold text-grayscale-80">
                캐스팅을 입력해주세요
              </span>
              <Required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {castingList.map((casting, index) => (
                <div
                  key={index}
                  className="flex items-center h-[52px] border border-grayscale-30 justify-between bg-grayscale-30 rounded-[7px] px-4"
                >
                  <div className="relative w-full overflow-hidden body2-medium text-grayscale-80 whitespace-nowrap">
                    {casting}
                    <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-grayscale-30 to-transparent"></div>
                  </div>
                  <button onClick={() => handleRemoveCasting(index)}>
                    <Remove />
                  </button>
                </div>
              ))}

              {isAdding ? (
                <Modal
                  isDualButton={false}
                  singleButtonText="추가하기"
                  onSingleButtonClick={handleAddCasting}
                  isSingleButtonDisabled={newCasting.trim() === ""}
                  onClose={handleCloseCastingModal}
                >
                  <div className="w-full flex flex-col items-center justify-center mt-[12.45px] mb-[37px] gap-[13.1px]">
                    <span className="headline2-bold text-grayscale-80">
                      캐스팅을 입력해주세요
                    </span>
                    <input
                      className="w-full h-[52px] rounded-[7px] text-center body2-medium text-grayscale-80 bg-grayscale-30 outline-none px-3"
                      value={newCasting}
                      onChange={(e) => setNewCasting(e.target.value)}
                    />
                  </div>
                </Modal>
              ) : (
                <button
                  onClick={() => setIsAdding(true)}
                  className="flex items-center justify-center h-[52px] bg-none border border-grayscale-30 rounded-[7px]"
                >
                  <Plus className="text-grayscale-80" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <ConfirmButton
        isChecked={isValid}
        onClick={handleConfirmClick}
        disabled={!isValid}
      >
        다음
      </ConfirmButton>
    </div>
  );
};
