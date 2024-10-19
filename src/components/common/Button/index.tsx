interface ButtonProps {
    isChecked: boolean;
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
  }
  
  export const ConfirmButton: React.FC<ButtonProps> = ({ isChecked, onClick, disabled, children }) => {
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