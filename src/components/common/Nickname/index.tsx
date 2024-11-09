import { useEffect, useState } from "react";
import { ReactComponent as ErrorIcon } from "@/assets/svgs/errorIcon.svg";
import { ReactComponent as AgreeIcon } from "@/assets/svgs/agreeIcon.svg";
import { NicknameProps } from "@/types";

export const Nickname = ({ isChecked, setIsChecked, setNickname }: NicknameProps) => {
  const [nickname, setLocalNickname] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [hasStartedTyping, setHasStartedTyping] = useState<boolean>(false);

  const validateNickname = (name: string): string => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (name.length < 2) {
      return "2글자 이상 작성해주세요";
    } else if (specialCharRegex.test(name)) {
      return "특수문자는 사용할 수 없어요";
    }
    return "";
  };

  useEffect(() => {
    if (hasStartedTyping) {
      const error = validateNickname(nickname);
      setErrorMessage(error);
      setIsChecked(!error);
      setNickname(nickname);
    }
  }, [nickname, hasStartedTyping, setIsChecked, setNickname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalNickname(value);
    setNickname(value);
    if (!hasStartedTyping) {
      setHasStartedTyping(true);
    }
  };

  return (
    <>
      <div
        className={`flex bg-grayscale-30 rounded-[0.44rem] p-[1.06rem] border ${
          hasStartedTyping
            ? errorMessage
              ? "border-system-error"
              : "border-system-positive"
            : "border-dark"
        }`}
      >
        <input
          className="bg-grayscale-30 outline-none w-full body2-medium text-grayscale-80"
          value={nickname}
          onChange={handleInputChange}
          maxLength={15}
        />
        <span className="caption-12 tracking-[-0.015rem] self-center text-grayscale-60">
          {nickname.length}/15
        </span>
      </div>
      {hasStartedTyping && errorMessage ? (
        <div className="flex caption-12 items-start text-system-error gap-[0.25rem] pb-[0.6rem]">
          <ErrorIcon />
          <span className="self-center">{errorMessage}</span>
        </div>
      ) : hasStartedTyping && isChecked ? (
        <div className="flex caption-12 items-start text-system-positive gap-[0.25rem] pb-[0.6rem]">
          <AgreeIcon />
          <span className="self-center">사용 가능한 닉네임이에요</span>
        </div>
      ) : null}
      <div className="flex flex-col caption-12 text-grayscale-60">
        <span>*최소 2글자 이상 사용할 수 있어요</span>
        <span>*특수문자는 사용할 수 없어요</span>
      </div>
    </>
  );
};