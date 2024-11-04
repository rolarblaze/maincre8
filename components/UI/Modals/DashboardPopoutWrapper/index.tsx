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
          "absolute inset-x-0 top-0 space-y-2 rounded-t-2xl border-b border-grey200 px-8 py-6",
          headerStyles,
        )}
      >
        <h4>{title}</h4>
        <p>{showSubtitle && subtitle}</p>
      </header>
      <main
        className={twMerge(
          "h-full w-full flex-grow rounded-2xl bg-white px-8 pt-32",
          childrenStyles,
        )}
      >
        {children}
      </main>
    </div>
  );
}

export default DashboardPopoutWrapper;
