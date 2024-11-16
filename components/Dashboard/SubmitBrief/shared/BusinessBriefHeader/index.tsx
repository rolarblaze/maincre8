import React from "react";
import { twMerge } from "tailwind-merge";

function BusinessBriefHeader({
  headerStyles,
  title,
  subtitle,
  showSubtitle = false,
}: {
  headerStyles?: string;
  title: string;
  subtitle?: string;
  showSubtitle?: boolean;
}) {
  return (
    <header
      className={twMerge(
        "absolute inset-x-0 top-0 z-20 space-y-2 rounded-t-2xl border-b border-grey200 bg-white px-4 py-3 pt-9 md:px-8 md:py-6",
        headerStyles,
      )}
    >
      <h4>{title}</h4>
      <p>{showSubtitle && subtitle}</p>
    </header>
  );
}

export default BusinessBriefHeader;
