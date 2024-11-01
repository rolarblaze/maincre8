import React from "react";
import { twMerge } from "tailwind-merge";

function DashboardPopoutWrapper({
  children,
  title,
  subtitle,
  classNames,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  classNames?: string;
}) {
  return (
    <div
      className={twMerge("relative h-[90vh] w-[920px] bg-white", classNames)}
    >
      <header className="absolute inset-x-0 top-0 space-y-2 border-b border-grey200 bg-white px-8 py-6">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </header>
      <main className="h-full w-full px-8 py-32">{children}</main>
    </div>
  );
}

export default DashboardPopoutWrapper;
