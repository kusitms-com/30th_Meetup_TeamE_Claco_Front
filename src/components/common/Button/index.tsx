interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
}

export const ConfirmButton = ({ isChecked, onClick, disabled, children }: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center px-[7.5rem] py-[0.88rem] rounded-[0.3125rem] body1-medium ${
        isChecked ? 'bg-primary text-grayscale-90' : 'bg-grayscale-20 text-grayscale-60'
      }`}
      disabled={disabled ?? !isChecked}
      onClick={onClick}
    >
      {children}
    </button>
  );
};