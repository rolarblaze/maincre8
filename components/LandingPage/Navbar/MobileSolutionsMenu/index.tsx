import React from "react";
import { solutionsData } from "../SolutionsMenu/solutionsData";
import { CancelIcon } from "@/public/icons";

interface MobileSolutionsMenuProps {
  onClick: () => void;
  className?: string
}

const MobileSolutionsMenu: React.FC<MobileSolutionsMenuProps> = ({
  onClick,
  className
}) => {
  return (
    <div className={`flex flex-col bg-grey50 ${className}`}>
      <div className="w-full flex justify-between border-b border-primary500 py-4 px-3">
        <span className="font-medium text-primary500">Solutions</span>
        <button className="w-fit h-fit" onClick={onClick}>
          <CancelIcon />
        </button>
      </div>
      <div className="flex flex-col">
        {solutionsData.map((solu, soluIdx) => {
          const Icon = solu.icon;
          return (
            <div
              key={soluIdx}
              className="group hover:text-primary500 flex flex-col gap-3 py-4 border-b border-t border-grey100 px-3"
            >
              <div className="flex gap-2">
                <Icon />
                <span className="text-grey900 group-hover:text-primary500 font-semibold">
                  {solu.title}
                </span>
              </div>
              <p className="text-sm group-hover:text-primary500">
                {solu.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSolutionsMenu;
