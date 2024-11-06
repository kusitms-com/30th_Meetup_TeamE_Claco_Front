// const USER_STATE = true; // 초기 유저와 클라코북 보유 중인 유저 분리를 위한 테스트 상수

export const TicketPage = () => {
  return (
    <div className="flex flex-col pt-[46px] items-center justify-center">
      <span className="headline2-bold text-grayscale-80 mb-[243px]">
        클라코북
      </span>
      <div className="flex flex-col items-center justify-center">
        <span className="heading2-bold text-grayscale-80 mb-[15px]">
          공연은 즐겁게 관람하셨나요?
        </span>
        <span className="body2-regular text-grayscale-70 mb-[33px] text-center">
          클라코북에 공연 후기를 등록하고
          <br />
          나만의 티켓을 공유해보세요!
        </span>
        <a
          href="/ticket/create"
          className="rounded-[5px] px-[89px] py-[14px] text-center bg-primary text-grayscale-80 cursor-pointer"
        >
          공연 후기 등록하기
        </a>
      </div>
    </div>
  );
};
