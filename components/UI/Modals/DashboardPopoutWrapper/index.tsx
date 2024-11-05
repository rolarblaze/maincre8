import BusinessBriefHeader from "@/components/Dashboard/SubmitBrief/shared/BusinessBriefHeader";
import React from "react";
import { twMerge } from "tailwind-merge";

function DashboardPopoutWrapper({
  children,
  title,
  subtitle,
  classNames,
  showSubtitle = true,
  childrenStyles,
  headerStyles,
}: {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  classNames?: string;
  showSubtitle?: boolean;
  childrenStyles?: string;
  headerStyles?: string;
}) {
  return (
    <div
      className={twMerge(
        "relative flex h-[90vh] w-[920px] rounded-2xl",
        classNames,
      )}
    >
      <BusinessBriefHeader
        title={title}
        subtitle={subtitle}
        showSubtitle={showSubtitle}
        headerStyles={headerStyles}
      />
      <main
        className={twMerge(
          "noScrollbar h-full w-full overflow-y-auto rounded-2xl bg-white px-8 pb-32 pt-[7.5rem]",
          childrenStyles,
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardPopoutWrapper;
