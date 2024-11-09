export type ModalProps = {
  isDualButton: boolean;
  positiveButtonText?: string;
  negativeButtonText?: string;
  singleButtonText?: string;
  onPositiveButtonClick?: () => void;
  onNegativeButtonClick?: () => void;
  onSingleButtonClick?: () => void;
  isSingleButtonDisabled?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
};
