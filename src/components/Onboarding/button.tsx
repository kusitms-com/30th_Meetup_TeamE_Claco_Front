interface ButtonProps {
    isChecked: boolean;
    onClick?: () => void;
    children: React.ReactNode;
  }

export const TypeButton: React.FC<ButtonProps> = ({ isChecked, onClick, children }) => {
    return(
        <button
        className={`min-w-[10rem] items-center justify-center py-[0.88rem] rounded-[0.31rem] body1-medium ${
          isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
        }`}
        onClick={onClick}
        >
        {children}
      </button>
    );
};

export const ConceptButton: React.FC<ButtonProps> = ({ isChecked, onClick, children }) => {
    return(
        <button
        className={`items-center justify-center px-[3rem] py-[3rem] rounded-[0.31rem] body1-medium ${
          isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
        }`}
        onClick={onClick}
        >
        {children}
      </button>
    );
};