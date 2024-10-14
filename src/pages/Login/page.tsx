import { Progress } from "@/components/ui/progress";

export const LoginPage = () => {
  return (
    <div className="text-common-white">
      <p className="display1-bold">폰트 크기 테스트</p>
      <p className="display2-medium">폰트 크기 테스트</p>
      <p className="title1-bold">폰트 크기 테스트</p>
      <p className="title2-bold">폰트 크기 테스트</p>
      <p className="title3-bold">폰트 크기 테스트</p>
      <p className="heading1-bold">폰트 크기 테스트</p>
      <p className="heading1-semibold">폰트 크기 테스트</p>
      <p className="heading2-bold">폰트 크기 테스트</p>
      <p className="heading2-semibold">폰트 크기 테스트</p>
      <p className="headline1-bold">폰트 크기 테스트</p>
      <p className="headline2-bold">폰트 크기 테스트</p>
      <p className="body1-medium">폰트 크기 테스트</p>
      <p className="body1-regular">폰트 크기 테스트</p>
      <p className="body2-medium">폰트 크기 테스트</p>
      <p className="body2-regular">폰트 크기 테스트</p>
      <div className="flex">
        <div className="w-10 h-10 bg-primary-50"></div>
        <div className="w-10 h-10 bg-primary-100"></div>
        <div className="w-10 h-10 bg-primary-200"></div>
        <div className="w-10 h-10 bg-primary-300"></div>
        <div className="w-10 h-10 bg-primary-400"></div>
        <div className="w-10 h-10 bg-primary-500"></div>
        <div className="w-10 h-10 bg-primary-600"></div>
        <div className="w-10 h-10 bg-primary-700"></div>
        <div className="w-10 h-10 bg-primary-800"></div>
        <div className="w-10 h-10 bg-primary-900"></div>
      </div>
      <div className="flex">
        <div className="w-10 h-10 bg-secondary-50"></div>
        <div className="w-10 h-10 bg-secondary-100"></div>
        <div className="w-10 h-10 bg-secondary-200"></div>
        <div className="w-10 h-10 bg-secondary-300"></div>
        <div className="w-10 h-10 bg-secondary-400"></div>
        <div className="w-10 h-10 bg-secondary-500"></div>
        <div className="w-10 h-10 bg-secondary-600"></div>
        <div className="w-10 h-10 bg-secondary-700"></div>
        <div className="w-10 h-10 bg-secondary-800"></div>
        <div className="w-10 h-10 bg-secondary-900"></div>
      </div>
      <div className="flex">
        <div className="w-10 h-10 bg-system-error"></div>
        <div className="w-10 h-10 bg-system-positive"></div>
      </div>
      <div className="flex">
        <div className="w-10 h-10 bg-common-white"></div>
        <div className="w-10 h-10 bg-common-black"></div>
      </div>
      <div className="flex mb-10">
        <div className="w-10 h-10 bg-grayscale-0"></div>
        <div className="w-10 h-10 bg-grayscale-10"></div>
        <div className="w-10 h-10 bg-grayscale-20"></div>
        <div className="w-10 h-10 bg-grayscale-30"></div>
        <div className="w-10 h-10 bg-grayscale-40"></div>
        <div className="w-10 h-10 bg-grayscale-50"></div>
        <div className="w-10 h-10 bg-grayscale-60"></div>
        <div className="w-10 h-10 bg-grayscale-70"></div>
        <div className="w-10 h-10 bg-grayscale-80"></div>
        <div className="w-10 h-10 bg-grayscale-90"></div>
        <div className="w-10 h-10 bg-grayscale-100"></div>
      </div>
      <Progress value={33} />
    </div>
  );
};
