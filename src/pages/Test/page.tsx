import { ClacoTicket } from "@/components/common/ClacoTicket";
import { REVIEW_MOCK_DATA_type } from "@/components/Main/Analysis/TicketRecommend";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useRef } from "react";

const REVIEW_MOCK_DATA: REVIEW_MOCK_DATA_type = {
  title: "히사이시조",
  username: "밍밍보따리",
  review:
    "전문 무용수들의 실력이 눈부시게 빛났습니다. 지젤 역을 맡은 발레리나의 날렵한 동작과 뛰어난 연기는 보는 이의 마음을 울렸습니다. 특히, 2막의 윌리들의 군무는 환상적이었고, 유령들의 통일성이 돋보였습니다. 모든 출연진이 하나가 되어 춤출 때, 진한 감동이 전해졌습니다.",
};

export const TestPage = () => {
  const divRef = useRef<HTMLDivElement>(null);

  const onDownloadBtn = async () => {
    if (!divRef.current) return;

    try {
      const div = divRef.current;
      const canvas = await html2canvas(div, {
        scale: 1,
        backgroundColor: "#1C1C1C",
      });
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, "MyClacoTicket.png");
        }
      });
    } catch (error) {
      console.error("Error converting div to image:", error);
    }
  };

  return (
    <>
      <div className="w-[232px]" ref={divRef}>
        <ClacoTicket data={REVIEW_MOCK_DATA} />
      </div>
      <button className="downBtn" onClick={onDownloadBtn}>
        다운로드 버튼
      </button>
    </>
  );
};
