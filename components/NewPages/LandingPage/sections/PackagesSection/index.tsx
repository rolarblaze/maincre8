"use client";
import Link from "next/link";
import { useState } from "react";
import { packages } from "./constants";
import {
  getTabClass,
  getBackgroundClass,
  getUnderClass,
  getArrowClass,
  getFocusClass,
} from "./helperFunc";
import { FadeUpDiv, ResizablePanel } from "@/components";
import { FillArrowIcon } from "@/public/svgs";

const PackagesSection = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <FadeUpDiv className="flex min-h-[500px] flex-wrap items-start justify-center gap-4 sm:gap-8 lg:min-h-72 lg:justify-between">
      {packages.map(({ title, icon, under }) => (
        <Link
          href={`/shop/${title.toLowerCase().replaceAll(" ","-")}`}
          key={title}
          onFocus={() => setHovered(title)}
          onMouseEnter={() => setHovered(title)}
          onMouseLeave={() => setHovered(null)}
          className={`group size-fit cursor-pointer rounded-2xl border px-2 pb-2 pt-3.5 transition-colors duration-700 ease-out sm:px-2.5 sm:pb-2.5 sm:pt-5 ${getFocusClass(title)} ${getTabClass(title)} `}
        >
          <h3 className="mb-5 px-2.5 text-sm font-bold leading-[1.6875rem] text-grey900 sm:text-xl">
            {title}
          </h3>

          <div
            className={`flex h-[7.5rem] w-36 items-center justify-center overflow-hidden rounded-[0.625rem] bg-error-50 transition-colors duration-700 ease-out sm:h-40 sm:w-[12.25rem] ${getBackgroundClass(title)} `}
          >
            {icon}
          </div>

          <ResizablePanel className="w-full">
            {hovered === title && (
              <div className="mt-2 flex w-full items-center justify-between px-2 pb-2">
                <p
                  className={`text-xs font-semibold sm:text-sm ${getUnderClass(title)}`}
                >
                  {under}
                </p>

                <FillArrowIcon fillColor={getArrowClass(title)} />
              </div>
            )}
          </ResizablePanel>
        </Link>
      ))}
    </FadeUpDiv>
  );
};
export default PackagesSection;
