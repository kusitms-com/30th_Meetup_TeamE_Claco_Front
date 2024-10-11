import backgroundImage from '../../assets/images/loginbackground.png';
import logo from '../../assets/images/logo.png';

export const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex flex-col w-full h-1/3 px-[2rem] pt-[52rem] gap-[1.69rem]'>
        <div className='flex flex-col p-[1rem]'>
          <div className='flex items-center gap-[0.56rem]'>
            <img className='py-[0.37rem]' src={logo} alt='로고 이미지' />
            <span className='self-end title3-bold text-grayscale-90'>에</span>
          </div>
          <span className='items-center title3-bold text-grayscale-90'>오신 것을 환영해요!</span>
        </div>
        <button className='flex bg-login items-center justify-center rounded-[0.31rem] px-[7.5rem] py-[1rem]'>
          <span className='body1-regular text-grayscale-20'>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
};