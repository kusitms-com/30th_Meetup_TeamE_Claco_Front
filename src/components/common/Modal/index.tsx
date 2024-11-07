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
  children,
}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#111111] bg-opacity-80 z-50">
      <div className="bg-grayscale-20 pt-5 pb-[30px] px-5 rounded-[5px]">
        <div className="flex justify-end">
          <Remove onClick={onClose} />
        </div>

        {children && <>{children}</>}

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
