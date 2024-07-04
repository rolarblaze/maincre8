import React from 'react';
import Spinner from '../Spinner';

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  onClick: () => void;
  classNames?: string;
}

const Button: React.FC<ButtonProps> = ({ label, isLoading = false, onClick, classNames }) => {
  return (
    <button
      className={`w-full flex justify-center items-center gap-2 py-4 px-8 rounded-lg bg-primary500 text-white font-semi-bold text-center text-sm md:text-base ${classNames}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
};

export default Button;
