import showReview from "@/assets/images/showReview.png";

export const TicketPage = () => {
  return (
    <div className="flex flex-col pt-[46px] items-center justify-center">
      <span className="headline2-bold text-grayscale-80 mb-[152px]">
        클라코북
      </span>
      <div className="flex flex-col items-center justify-center">
        <span className="heading2-bold text-grayscale-80">
          공연은 즐겁게 관람하셨나요?
        </span>
        <div className="relative flex items-center justify-center">
          <img
            src={showReview}
            alt="showReview"
            className="object-contain mb-[53px]"
          />
          <div className="absolute bottom-0 flex text-center">
            <span className="body2-regular text-grayscale-70 mb-[39px]">
              클라코북에 공연 후기를 등록하고
              <br />
              나만의 티켓을 공유해보세요!
            </span>
          </div>
        </div>

        <a
          href="/ticket/create"
          className="rounded-[5px] px-[89px] py-[14px] text-center bg-grayscale-30 text-grayscale-80 cursor-pointer"
        >
          공연 후기 등록하기
        </a>
      </div>
    </div>
  );
};
