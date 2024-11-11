import { ReactComponent as BackArrow } from "@/assets/svgs/BackArrow.svg";
import { ReactComponent as UserProfile } from "@/assets/svgs/UserProfile.svg";
import { ConfirmButton } from "@/components/common/Button";
import { Nickname } from "@/components/common/Nickname";
import { eSettingsProps } from "@/types";
import { useState } from "react";

export const UserSettings = ({ onBack }: eSettingsProps) => {
  const [nickname, setNickname] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleConfirmClick = () => {
    if (isChecked) {
      console.log(nickname);
    }
  };

  return (
    <div className="pt-[46px] flex flex-col h-screen justify-between pb-[100px]">
      <div className="flex-col">
        <div className="relative flex items-center justify-center mb-[41px]">
          <BackArrow
            className="absolute left-0 cursor-pointer"
            onClick={onBack}
          />
          <span className="headline2-bold text-grayscale-80">프로필 설정</span>
        </div>
        <div className="flex flex-col gap-[18px] mb-12">
          <span className="headline1-bold text-grayscale-90">내 정보</span>
          <div className="flex gap-5">
            <div className="rounded-full p-[27px] bg-grayscale-30 mb-4">
              <UserProfile />
            </div>
            <div className="flex flex-col">
              <span className="headline2-bold text-white mb-[10px]">
                울랄라
              </span>
              <button className="w-fit flex items-center justify-center text-center px-[14px] py-[6px] border border-grayscale-70 rounded-[5px] mb-2">
                <span className="caption-12 text-center text-grayscale-80">
                  프로필 이미지 업로드
                </span>
              </button>
              <span className="caption-12 text-grayscale-60">
                *10MB 이내의 이미지 파일을 업로드 해주세요.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="headline1-bold text-grayscale-90">닉네임 설정</span>
          <Nickname
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            setNickname={setNickname}
          />
        </div>
      </div>

      <ConfirmButton
        isChecked={isChecked}
        onClick={handleConfirmClick}
        className="w-full"
      >
        적용하기
      </ConfirmButton>
    </div>
  );
};
