import { Progress } from "@/components/ui/progress";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Download } from "@/assets/svgs/download.svg";
import { useNavigate } from "react-router-dom";
import { ClacoTicket } from "@/components/common/ClacoTicket";
import { REVIEW_MOCK_DATA_type } from "@/components/Main/Analysis/TicketRecommend";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";

const REVIEW_MOCK_DATA: REVIEW_MOCK_DATA_type = {
  title: "히사이시조",
  username: "밍밍보따리",
  review:
    "전문 무용수들의 실력이 눈부시게 빛났습니다. 지젤 역을 맡은 발레리나의 날렵한 동작과 뛰어난 연기는 보는 이의 마음을 울렸습니다. 특히, 2막의 윌리들의 군무는 환상적이었고, 유령들의 통일성이 돋보였습니다. 모든 출연진이 하나가 되어 춤출 때, 진한 감동이 전해졌습니다.",
};

export const TicketDownloadPage = () => {
  const navigate = useNavigate();
  const ticketRef = useRef<HTMLDivElement>(null);

  const convertToImageAndUpload = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        backgroundColor: "#1C1C1C",
        useCORS: true,
        allowTaint: true,
        logging: true,
      });

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => resolve(blob!), "image/png", 1.0);
      });

      const formData = new FormData();
      formData.append("ticket", blob, "ticket.png");

      for (const i of formData.entries()) {
        console.log(i);
      }
    } catch (error) {
      console.error("티켓 이미지 변환/업로드 실패:", error);
    }
  };

  useEffect(() => {
    convertToImageAndUpload();
  }, []);

  const handleBackClick = () => {
    navigate("/ticketcreate/review");
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
        <div className="mb-[60px]">
          <div ref={ticketRef}>
            <ClacoTicket data={REVIEW_MOCK_DATA} />
          </div>
        </div>
        <div className="flex items-center justify-center border border-grayscale-80 rounded-[5px] px-[120px] py-4 gap-[10px]">
          <Download />
          <span className="caption-12 text-grayscale-80">이미지 다운로드</span>
        </div>
      </div>
    </div>
  );
};
