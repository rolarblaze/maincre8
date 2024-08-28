import React from "react";
import {
  BlogIcon,
  DemoIcon,
  GuideIcon,
  ResourceIcon,
  WebinarIcon,
} from "@/public/icons";
import { CircleCancel } from "@/public/svgs";
import Link from "next/link";

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
      link: "#",
    },
    {
      title: "Free Resource",
      description:
        "We collaborate with and the meaningful projects we’re engaged in together.",
      icon: ResourceIcon,
      link: "/help-center",
    },
    {
      title: "Webinar",
      description:
        "Interested in forging a partnership with us? Find out how we can work together to achieve common goals.",
      icon: WebinarIcon,
      link: "#",
    },
    {
      title: "Blog",
      description:
        "Access valuable resources, tools, and support materials for our current partners.",
      icon: BlogIcon,
      link: "#",
    },
    {
      title: "Ultimate Guide",
      description:
        "See how collaboration with us has led to innovative solutions and impactful outcomes.",
      icon: GuideIcon,
      link: "/help-center",
    },
  ];
  return (
    <div className={`flex flex-col bg-grey50 ${className}`}>
      <div className="w-full flex justify-between border-b border-primary500 py-4 px-3">
        <span className="font-medium text-primary500">Resources</span>
        <button className="w-fit h-fit" onClick={onClick}>
          <CircleCancel />
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
              <Link href={resource.link}>
                <div className="flex gap-2">
                  <Icon />
                  <span className="text-grey900 group-hover:text-primary500 font-semibold">
                    {resource.title}
                  </span>
                </div>
                <p className="text-sm group-hover:text-primary500 text-grey600">
                  {resource.description}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileResourcesMenu;
