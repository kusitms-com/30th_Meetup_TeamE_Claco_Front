import { useEffect, useState } from 'react';
import backgroundImage from '../../assets/images/loginbackground.png';

export const AgreementPage = () => {
  const [show, setShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);

  const handleCheckClick = () => {
    setIsChecked(!isChecked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div
      className='w-full h-screen bg-cover bg-center flex flex-col justify-end'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={`flex flex-col bg-background-dark gap-[3.06rem] rounded-t-[1.88rem] transition-transform duration-700 ${
          show ? 'translate-y-0' : 'translate-y-full'
        } ${isModalOpen ? 'hidden' : ''}`} 
      >
        <div className="flex flex-col px-[1.75rem] pt-[2.13rem] gap-[1.25rem]">
          <span className="flex flex-col heading1-semibold text-grayscale-80">
            환영해요!<br />
            클라코가 클래식 공연의 길잡이가<br />
            되어드릴게요
          </span>
          <span className="flex flex-col body3-normal text-grayscale-70">
            클라코 서비스 이용을 위해<br />
            개인정보 수집 및 이용에 대해 동의해 주세요.
          </span>
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
            <button className="body4-normal text-grayscale-80 underline" onClick={openModal}>
              약관 보기
            </button>
          </div>
          <button className={`flex items-center justify-center px-[7.5rem] py-[0.88rem] rounded-[0.3125rem] ${
              isChecked ? 'bg-primary text-white' : 'bg-grayscale-20 text-grayscale-60'
            }`}
            disabled={!isChecked}>
            확인
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="flex flex-col items-center justify-center px-[7rem] w-full h-full top-0 left-0">
          <div className='flex flex-col w-full items-center justify-center px-[1.5rem] bg-background-dark gap-[2.06rem] rounded-[0.63rem]'>
            <span className='headline2-bold text-grayscale-80 pt-[2.5rem]'>
              개인정보 수집 및 이용 동의
            </span>
            <div className='flex flex-col items-center justify-center gap-[3rem] pb-[1.69rem]'>
              <span className='body4-normal text-grayscale-90 justify-start'>
                제휴 및 제안/문의 수집과 안내를 위하여 개인정보보호법에 따라<br />
                다음과 같이 귀하의 개인정보를 수집 및 이용하고자 합니다.<br /><br />
                ※ 귀하께서는 개인정보 제공 및 이용을 거부할 권리가 있으며,<br />
                제공 사항은 제안 수집과 안내를 위하여 반드시 필요한 사항으로<br />
                거부하실 경우 해당 서비스를 제공 받으실 수 없음을 알려 드립니다.<br /><br />
                개인정보의 수집 및 이용 목적 : 제휴 및 문의<br />
                수집 및 이용하려는 개인정보의 항목 : 닉네임, 성별, 나이, 위치<br />
                개인정보 보유 및 이용 기간: 2년
              </span>
              <button className='flex items-center justify-center px-[7.5rem] py-[0.88rem] bg-primary rounded-[0.31rem] text-body1-medium text-grayscale-90' onClick={closeModal}>
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};