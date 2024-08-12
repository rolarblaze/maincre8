import { twMerge } from "tailwind-merge";

interface PillDivProps {
  children: React.ReactNode;
  className?: string;
}

const PillDiv: React.FC<PillDivProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `mb-4.5 border w-fit p-2 text-lg font-semibold leading-7 border-primary500 text-grey900 rounded-[0.625rem]`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default PillDiv;
