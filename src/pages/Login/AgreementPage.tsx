import { useEffect, useState } from 'react';
import backgroundImage from '../../assets/images/loginbackground.png';

export const AgreementPage = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  const handleCheckClick = () => {
    setIsChecked(!isChecked); // 체크박스 상태 토글
  };

  return (
    <div
      className='w-full h-screen bg-cover bg-center flex flex-col justify-end'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`flex flex-col bg-background-dark gap-[3.06rem] rounded-t-[1.88rem] transition-transform duration-700 ${
          show ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex flex-col px-[1.75rem] pt-[2.13rem] gap-[1.25rem]">
          <div className="flex flex-col heading1-semibold text-grayscale-80">
            <span>환영해요!</span>
            <span>클라코가 클래식 공연의 길잡이가</span>
            <span>되어드릴게요</span>
          </div>
          <div className="flex flex-col body3-normal text-grayscale-70">
            <span>클라코 서비스 이용을 위해</span>
            <span>개인정보 수집 및 이용에 대해 동의해 주세요.</span>
          </div>
        </div>
        <div className="flex flex-col px-[1.25rem] pb-[2.75rem] gap-[2rem]">
          <div className={`flex justify-between items-center px-[1.25rem] py-[0.88rem] rounded-[0.44rem] gap-[4.75rem] border ${
              isChecked ? 'border-primary' : 'border-transparent'
            }`}>
            <div className="flex gap-[0.94rem] items-center cursor-pointer" onClick={handleCheckClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="8"
                viewBox="0 0 16 13"
                fill="none"
              >
                <path
                  d="M1 6.5L4.7307 11.51C4.82282 11.6297 4.94086 11.727 5.07595 11.7945C5.21104 11.8621 5.35968 11.8981 5.5107 11.9C5.6593 11.9017 5.80641 11.8703 5.94133 11.808C6.07626 11.7458 6.19561 11.6542 6.2907 11.54L15.0007 1"
                  stroke={isChecked ? '#F47F59' : '#B3B3B3'}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="body1-medium text-grayscale-80">
                개인정보 수집 및 이용 동의
              </span>
            </div>
            <a className="body4-normal text-grayscale-80 underline">
              약관 보기
            </a>
          </div>
          <button className={`flex items-center justify-center px-[7.5rem] py-[0.88rem] rounded-[0.3125rem] ${
              isChecked ? 'bg-primary text-white' : 'bg-grayscale-20 text-grayscale-60'
            }`}
            disabled={!isChecked}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};