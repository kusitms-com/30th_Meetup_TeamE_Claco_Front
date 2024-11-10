import { Progress } from "@/components/ui/progress";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Download } from "@/assets/svgs/download.svg";
import { useNavigate } from "react-router-dom";

export const TicketDownloadPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/ticketbook/ticket/review");
  };

  return (
    <div className="flex flex-col min-h-screen pl-6 pr-[21px] pt-[46px] pb-[67px]">
      <div className="flex items-center justify-between mb-[33px]">
        <BackArrow
          width="9"
          height="18"
          viewBox="0 0 11 20"
          onClick={handleBackClick}
        />
        <span className="headline2-bold text-grayscale-80">티켓 다운</span>
        <span className="body1-medium text-grayscale-80">완료</span>
      </div>
      <Progress value={100} />
      <div className="mt-[50px]">
        <span className="headline2-bold text-white mb-[39px]">
          관람 후기를 등록했어요! <br /> 완성된 클라코 티켓을 다운 받으시겠어요?
        </span>
        <div className="mb-[60px]"></div>
        <div className="flex items-center justify-center border border-grayscale-80 rounded-[5px] px-[120px] py-4 gap-[10px]">
          <Download />
          <span className="caption-12 text-grayscale-80">이미지 다운로드</span>
        </div>
      </div>
    </div>
  );
};
