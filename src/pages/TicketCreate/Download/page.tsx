import { Progress } from "@/components/ui/progress";
import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as Download } from "@/assets/svgs/download.svg";
import { useNavigate } from "react-router-dom";
import { ClacoTicket } from "@/components/common/ClacoTicket";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { Toast } from "@/libraries/toast/Toast";
import { DownLoadModal } from "@/components/Ticket/Modal/DownLoad";
import { usePutTicketImage } from "@/hooks/mutation";
import useGetTicketReviewDetail from "@/hooks/queries/useGetTicketReviewDetail";

export const TicketDownloadPage = () => {
  const navigate = useNavigate();
  const ticketRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<boolean>(false);

  const { mutate: uploadTicketImage } = usePutTicketImage();
  const ticketReviewId = Number(localStorage.getItem("ticketReviewId"));
  const { data, isLoading } = useGetTicketReviewDetail(ticketReviewId);
  const ticketReviewDetail = data?.result;
  const ticketBookId = localStorage.getItem("clacoBookId");
  
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

      if (!blob) {
        throw new Error("이미지 Blob 생성에 실패했습니다.");
      }

      uploadTicketImage({
        id: ticketReviewId,
        file: new File([blob], "ticket.png", { type: "image/png" }),
      });
    } catch (error) {
      console.error("티켓 이미지 변환/업로드 실패:", error);
    }
  };

  useEffect(() => {
    if (!isLoading && ticketReviewDetail) {
      const timer = setTimeout(() => {
        convertToImageAndUpload();
      }, 1000);
  
      return () => clearTimeout(timer);
    }
  }, [isLoading, ticketReviewDetail]);

  const handleBackClick = () => {
    // navigate(`/show/${showId}/reviews/${ticketReviewId}`);
    localStorage.removeItem("ticketReviewId");
  };

  const handleConfirmClick = () => {
    navigate(`/ticketbook/${ticketBookId}`);
    localStorage.removeItem("clacoBookId");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const onDownloadBtn = async () => {
    if (!ticketRef.current) return;

    try {
      const canvas = await html2canvas(ticketRef.current!, {
        scale: 2,
        backgroundColor: "#1C1C1C",
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "MyClacoTicket.png");
          setToast(true);
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
    handleCloseModal();
  };

  return (
    <div className="flex flex-col pt-[46px] pb-[67px]">
      <div className="px-[24px]">
        <div className="flex items-center justify-between mb-[33px]">
          <BackArrow
            width="9"
            height="18"
            viewBox="0 0 11 20"
            onClick={handleBackClick}
            className="mr-4"
          />
          <span className="headline2-bold text-grayscale-80">티켓 저장</span>
          <span
            className="body1-medium text-grayscale-80"
            onClick={handleConfirmClick}
          >
            완료
          </span>
        </div>
        <Progress value={100} />
      </div>

      <div className="mt-[40px]">
        <div className="px-[24px] headline2-bold text-white">
          관람 후기가 등록됐어요! <br /> 나만의 클라코 티켓을 간직해보세요
        </div>
        <div className="mb-[24px] flex items-center justify-center mt-[31px] relative overflow-hidden">
          <div ref={ticketRef} className="z-10">
            <ClacoTicket
              watchDate={ticketReviewDetail?.watchDate || ""}
              concertName={ticketReviewDetail?.concertName || ""}
              watchPlace={ticketReviewDetail?.watchPlace || ""}
              concertTags={ticketReviewDetail?.concertTags || []}
            />
          </div>
          <div className="absolute bottom-0 w-screen h-[269px] bg-gradient-to-t from-[#DB5F35]/30 to-[#F7B29D]/0" />
        </div>
        <div className="flex items-center justify-center border border-grayscale-80 rounded-[5px] mx-[24px] px-[120px] py-4 gap-[10px] cursor-pointer">
          <Download />
          <span
            className="caption-12 text-grayscale-80"
            onClick={handleModalOpen}
          >
            이미지 다운로드
          </span>
          {isModalOpen && (
            <DownLoadModal
              onClose={handleCloseModal}
              onConfirm={onDownloadBtn}
            />
          )}

          {toast && (
            <Toast setToast={setToast} message={"티켓 다운이 완료되었어요"} />
          )}
        </div>
      </div>
    </div>
  );
};
