interface ButtonProps {
    isChecked: boolean;
    onClick?: () => void;
    children: React.ReactNode;
  }

export const TypeButton: React.FC<ButtonProps> = ({ isChecked, onClick, children }) => {
    return(
        <button
        className={`h-screen min-w-[8rem] max-h-[3.5rem] items-center justify-center rounded-[0.31rem] body1-medium ${
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
        className={`items-center justify-center py-[3rem] rounded-[0.31rem] body1-medium ${
          isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
        }`}
        onClick={onClick}
        >
        {children}
      </button>
    );
};

export const FeatureButton: React.FC<ButtonProps> = ({ isChecked, onClick, children }) => {
  return(
      <button
      className={`h-screen items-center justify-center max-h-[9rem] py-[1rem] rounded-[0.31rem] body1-medium ${
        isChecked ? 'bg-grayscale-80 text-dark' : 'bg-grayscale-30 text-grayscale-80'
      }`}
      onClick={onClick}
      >
      {children}
    </button>
  );
};