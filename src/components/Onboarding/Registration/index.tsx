interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isChecked: boolean;
}

export const TypeButton = ({ isChecked, children, onClick }: ButtonProps) => {
  return (
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

export const ConceptButton = ({ isChecked, children, onClick }: ButtonProps) => {
  return (
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

export const FeatureButton = ({ isChecked, children, onClick }: ButtonProps) => {
  return (
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