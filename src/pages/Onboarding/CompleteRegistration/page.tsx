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
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-background-dark">
      {showLoading ? (
        <div className="flex flex-col w-full h-full px-[24px] pt-[8rem] gap-[6rem]">
          <span className="heading1-bold text-grayscale-90">
            울랄라님에게 딱 맞는
            <br />
            클래식 공연을 찾고 있어요
          </span>
          <img src={loading} alt="Loading" />
        </div>
      ) : (
        <div className="flex flex-col justify-between w-full h-full px-[24px] pt-[8rem] pb-[4rem]">
          <span className="heading1-bold text-grayscale-90">
            울랄라님에게 딱 맞는
            <br />
            클래식 공연을 확인하세요!
          </span>
          <div className="flex justify-center items-center px-[1.8rem] pb-[1.5rem]">
            <img
              src={poster10}
              alt="Loading"
              className="min-w-[10rem] min-h-[15rem] rounded-[0.31rem] opacity-50"
            />
            <img
              src={poster6}
              alt="Loading"
              className="absolute z-10 max-w-[14rem] min-h-[18rem] rounded-[0.31rem]"
            />
            <img
              src={poster5}
              alt="Loading"
              className="min-w-[10rem] min-h-[15rem] rounded-[0.31rem] opacity-50"
            />
          </div>
          <ConfirmButton isChecked={true} onClick={gotoMain}>
            보러가기
          </ConfirmButton>
        </div>
      )}
    </div>
  );
};
