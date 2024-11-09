import { ReactComponent as Remove } from "@/assets/svgs/remove.svg";
import { ModalProps } from "@/types";

export const Modal = ({
  isDualButton,
  positiveButtonText,
  negativeButtonText,
  singleButtonText,
  onPositiveButtonClick,
  onNegativeButtonClick,
  onSingleButtonClick,
  isSingleButtonDisabled = false,
  onClose,
  title,
  children,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#111111] bg-opacity-80 z-60">
      <div className="relative bg-grayscale-20 pt-5 pb-[30px] px-5 rounded-[5px]">
        <div className="pt-[5px] text-center headline2-bold text-grayscale-80">
          {title}
        </div>
        <div className="absolute top-3 right-3">
          <Remove
            viewBox="0 0 22 22"
            width={34}
            height={34}
            onClick={onClose}
          />
        </div>
        <div className="mt-[33px]">{children && <>{children}</>}</div>

        {isDualButton ? (
          <div className="flex items-center justify-center gap-[10px]">
            <button
              onClick={onNegativeButtonClick}
              className="rounded-[5px] bg-grayscale-30 px-[50px] py-[14px] body1-medium text-grayscale-70 text-center"
            >
              {negativeButtonText}
            </button>
            <button
              onClick={onPositiveButtonClick}
              className="rounded-[5px] bg-primary px-[50px] py-[14px] body1-medium text-white text-center"
            >
              {positiveButtonText}
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              onClick={onSingleButtonClick}
              disabled={isSingleButtonDisabled}
              className={`px-[140px] py-[14px] rounded-[0.3125rem] body1-medium ${
                isSingleButtonDisabled
                  ? "bg-grayscale-30 text-grayscale-60"
                  : "bg-primary text-grayscale-80"
              }`}
            >
              {singleButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
