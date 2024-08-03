import React from "react";
import { CancelIcon } from "@/public/icons";
import DemoIcon from '@/public/icons/book.svg';
import ResourceIcon from '@/public/icons/file-cloud.svg';
import WebinarIcon from '@/public/icons/devices.svg';
import BlogIcon from '@/public/icons/box.svg';
import GuideIcon from '@/public/icons/gps.svg';

interface MobileResourcesMenuProps {
  onClick: () => void;
  className?: string;
}

const MobileResourcesMenu: React.FC<MobileResourcesMenuProps> = ({
  onClick,
  className,
}) => {
  const resourcesData = [
    {
      title: "Book a Demo",
      description:
        "Learn how we create synergies and mutually beneficial relationships with team members.",
      icon: DemoIcon,
    },
    {
      title: "Free Resource",
      description:
        "We collaborate with and the meaningful projects we’re engaged in together.",
      icon: ResourceIcon,
    },
    {
      title: "Webinar",
      description:
        "Interested in forging a partnership with us? Find out how we can work together to achieve common goals.",
      icon: WebinarIcon,
    },
    {
      title: "Blog",
      description:
        "Access valuable resources, tools, and support materials for our current partners.",
      icon: BlogIcon,
    },
    {
      title: "Ultimate Guide",
      description:
        "See how collaboration with us has led to innovative solutions and impactful outcomes.",
      icon: GuideIcon,
    },
  ];
  return (
    <div className={`flex flex-col bg-grey50 ${className}`}>
      <div className="w-full flex justify-between border-b border-primary500 py-4 px-3">
        <span className="font-semibold text-primary500">Resources</span>
        <button className="w-fit h-fit" onClick={onClick}>
          <CancelIcon />
        </button>
      </div>
      <div className="flex flex-col">
        {resourcesData.map((resource, resourceIdx) => {
          const Icon = resource.icon;
          return (
            <div
              key={resourceIdx}
              className="group hover:text-primary500 flex flex-col gap-3 py-4 border-b border-t border-grey100 px-3"
            >
              <div className="flex gap-2">
                <Icon />
                <span className="text-grey900 group-hover:text-primary500 font-semibold">
                  {resource.title}
                </span>
              </div>
              <p className="text-sm group-hover:text-primary500">
                {resource.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileResourcesMenu;
