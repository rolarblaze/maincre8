import React from "react";
import { leftResourcesData, rightResourcesData } from "./resourcesData";
import DropdownWrapper from "@/components/UI/Modals/DropdownWrapper";
import Link from "next/link";

interface ResourcesMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const ResourcesMenu: React.FC<ResourcesMenuProps> = ({
  isVisible,
  onClose,
}) => {
  return (
    <DropdownWrapper
      top="70%"
      left="45%"
      isVisible={isVisible}
      onClose={onClose}
    >
      <div className="item-start flex w-full max-w-[745px] gap-16">
        <div className="flex w-full max-w-[276px] flex-col gap-7">
          {leftResourcesData.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link href={resource.link} key={index}>
                <div className="group flex items-start gap-3 hover:text-primary500">
                  <div>
                    <Icon />
                  </div>
                  <div>
                    <p className="font-medium text-grey900 group-hover:text-primary500">
                      {resource.title}
                    </p>
                    <p className="text-sm group-hover:text-primary500">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex w-full max-w-[276px] flex-col gap-7">
          {rightResourcesData.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link href={resource.link} key={index}>
                <div
                  key={index}
                  className="group flex items-start gap-3 hover:text-primary500"
                >
                  <div>
                    <Icon />
                  </div>
                  <div>
                    <p className="font-medium text-grey900 group-hover:text-primary500">
                      {resource.title}
                    </p>
                    <p className="text-sm group-hover:text-primary500">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </DropdownWrapper>
  );
};

export default ResourcesMenu;
