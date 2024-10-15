import loading from "@/assets/loading.gif";
import poster1 from "@/assets/poster1.gif";
import poster2 from "@/assets/poster2.gif";
import poster3 from "@/assets/poster3.gif";
import { ConfirmButton } from "@/components/Login/button";
import { useEffect, useState } from "react";

export const CompleteRegistrationPage = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen bg-background-dark">
      {showLoading ? (
        <div className="flex flex-col w-full h-full px-[1.25rem] pt-[8rem] gap-[6rem]">
          <span className="heading1-bold text-grayscale-90">
            울랄라님에게 딱 맞는
            <br />
            클래식 공연을 찾고 있어요
          </span>
          <img src={loading} alt="Loading" />
        </div>
      ) : (
        <div className="flex flex-col justify-between w-full h-full px-[1.25rem] pt-[8rem] pb-[4rem]">
          <span className="heading1-bold text-grayscale-90">
            울랄라님에게 딱 맞는
            <br />
            클래식 공연을 확인하세요!
          </span>
          <div className="flex justify-center items-center px-[1rem] pb-[1.5rem]">
            <img
              src={poster1}
              alt="Loading"
              className="min-w-[10rem] min-h-[14rem] rounded-[0.31rem] opacity-50"
            />
            <img
              src={poster2}
              alt="Loading"
              className="absolute z-10 max-w-[15rem] max-h-[18rem] rounded-[0.31rem]"
            />
            <img
              src={poster3}
              alt="Loading"
              className="min-w-[10rem] min-h-[14rem] rounded-[0.31rem] opacity-50"
            />
          </div>
          <ConfirmButton isChecked={true}>보러가기</ConfirmButton>
        </div>
      )}
    </div>
  );
};
