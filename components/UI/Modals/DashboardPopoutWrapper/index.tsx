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
      <header
        className={twMerge(
          "absolute z-30 inset-x-0 top-0 space-y-2 rounded-t-2xl border-b border-grey200 bg-white px-8 py-6",
          headerStyles,
        )}
      >
        <h4>{title}</h4>
        <p>{showSubtitle && subtitle}</p>
      </header>
      <main
        className={twMerge(
          "noScrollbar h-full w-full overflow-y-auto rounded-2xl px-8 pb-[400px] pt-[5.5rem]",
          childrenStyles,
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardPopoutWrapper;
