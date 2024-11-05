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
        "absolute z-20 inset-x-0 top-0 space-y-2 rounded-t-2xl border-b border-grey200 bg-white px-8 py-6",
        headerStyles,
      )}
    >
      <h4>{title}</h4>
      <p>{showSubtitle && subtitle}</p>
    </header>
  );
}

export default BusinessBriefHeader;
