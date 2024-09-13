import React from "react";
import { solutionsData } from "../SolutionsMenu/solutionsData";
import { CircleCancel } from "@/public/svgs";
import Link from "next/link";

interface MobileSolutionsMenuProps {
  onClick: () => void;
  className?: string;
}

const MobileSolutionsMenu: React.FC<MobileSolutionsMenuProps> = ({
  onClick,
  className,
}) => {
  return (
    <div className={`flex flex-col bg-grey50 ${className}`}>
      <div className="w-full flex justify-between border-b border-primary500 py-4 px-3">
        <span className="font-medium text-primary500">Solutions</span>
        <button className="w-fit h-fit" onClick={onClick}>
          <CircleCancel />
        </button>
      </div>
      <div className="flex flex-col">
        {solutionsData.map((solu, soluIdx) => {
          const Icon = solu.icon;
          return (
            <Link href={solu.link} key={soluIdx}>
              <div
                key={soluIdx}
                className="group hover:text-primary500 flex flex-col gap-3 py-4 border-b border-t border-grey100 px-3"
              >
                <div className="flex gap-4">
                  <div className="w-[13px] h-[13px]">
                    <Icon />
                  </div>
                  <span className="text-grey900 group-hover:text-primary500 font-semibold">
                    {solu.title}
                  </span>
                </div>
                <p className="text-sm group-hover:text-primary500 text-grey600">
                  {solu.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSolutionsMenu;
