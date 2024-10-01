import React from "react";
import DropdownWrapper from "@/components/UI/Modals/DropdownWrapper";
import { solutionsData } from "./solutionsData";
import Link from "next/link";

interface SolutionsMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const SolutionsMenu: React.FC<SolutionsMenuProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <DropdownWrapper
      top="70%"
      left="43%"
      isVisible={isVisible}
      onClose={onClose}
    >
      <div className="flex w-full max-w-[340px] flex-col gap-7">
        {solutionsData.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <Link href={solution.link} key={index}>
              <div
                key={index}
                className="group flex w-full max-w-[276px] items-start gap-3 hover:text-primary500"
              >
                <div>
                  <Icon />
                </div>
                <div>
                  <p className="font-medium text-grey900 group-hover:text-primary500">
                    {solution.title}
                  </p>
                  <p className="text-sm group-hover:text-primary500">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </DropdownWrapper>
  );
};

export default SolutionsMenu;
