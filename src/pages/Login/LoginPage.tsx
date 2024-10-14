import backgroundImage from '../../assets/images/loginbackground.png';
import logo from '../../assets/images/logo.png';

export const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='flex flex-col w-full px-[1.5rem] pt-[30rem] gap-[1.69rem]'>
        <div className='flex flex-col pl-[0.63rem]'>
          <div className='flex items-center gap-[0.56rem]'>
            <img className='self-center py-[0.38rem]' src={logo} alt='로고 이미지' />
            <span className='self-end pt-[0.19rem] title3-bold text-grayscale-90'>에</span>
          </div>
          <span className='items-center title3-bold text-grayscale-90'>오신 것을 환영해요!</span>
        </div>
        <button className='flex w-full bg-login items-center justify-center rounded-[0.31rem] py-[0.88rem]'>
          <span className='body1-regular text-grayscale-20'>카카오로 시작하기</span>
        </button>
      </div>
    </div>
  );
};