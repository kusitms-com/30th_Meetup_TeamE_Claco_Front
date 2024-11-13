import loading from "@/assets/images/loading.gif";
import poster10 from "@/assets/images/poster10.gif";
import poster6 from "@/assets/images/poster6.gif";
import poster5 from "@/assets/images/poster5.gif";
import { useEffect, useState } from "react";
import { ConfirmButton } from "@/components/common/Button";
import { useNavigate } from "react-router-dom";

export const CompleteRegistrationPage = () => {
  const [showLoading, setShowLoading] = useState(true);
  const navigate = useNavigate();

  const gotoMain = () => {
    navigate("/main");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-background-dark">
      {showLoading ? (
        <div className="flex flex-col w-full h-full px-6 pt-[144px] gap-[126px]">
          <span className="heading1-bold text-grayscale-90">
            클라코가 달보라님의
            <br />
            클래식 공연 취향을 분석중이에요
          </span>
          <img src={loading} alt="Loading" />
        </div>
      ) : (
        <div className="flex flex-col justify-between w-full h-full px-6 pt-[144px] pb-[73px]">
          <span className="heading1-bold text-grayscale-90 mb-[88px]">
            클라코와 함께 클래식 경험을 넓혀줄
            <br />
            여정을 시작해보세요!
          </span>
          <div className="flex justify-center items-center px-[29px] pb-[127px]">
            <img
              src={poster10}
              alt="Loading"
              className="min-w-[170px] max-h-[242px] rounded-[5px] opacity-50"
            />
            <img
              src={poster6}
              alt="Loading"
              className="absolute z-10 min-w-[220px] max-h-[300px] rounded-[5px]"
            />
            <img
              src={poster5}
              alt="Loading"
              className="min-w-[170px] max-h-[242px] rounded-[5px] opacity-50"
            />
          </div>
          <ConfirmButton isChecked={true} onClick={gotoMain}>
            맞춤 공연 보러가기
          </ConfirmButton>
        </div>
      )}
    </div>
  );
};
