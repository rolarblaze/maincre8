import React from 'react';

interface SpinnerProps {
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-5 h-5 border-2 border-t-2 border-t-transparent border-white rounded-full animate-spin ${className}`}
    ></div>
  );
};

export default Spinner;
