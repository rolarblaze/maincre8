"use client";
import { SortIcon } from "@/public/icons";
import React from "react";

type Tab = {
  name: string;
  icon?: React.ReactNode;
  count?: number;
};

type TabsProps = {
  tabs: Tab[];
  showSortBy?: boolean;
  activeTab: string;
  onTabClick: (tabName: string) => void;
};

const Tabs: React.FC<TabsProps> = ({
  tabs,
  showSortBy = false,
  activeTab,
  onTabClick,
}) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-y-4 md:gap-y-0 py-2 md:px-6">
      <div className="flexw flex-wrap items-center gap-1 border-b border-grey200">
        {tabs.map((tab) => (
          <div
            key={tab.name}
            className={`flex items-center gap-2 p-4 cursor-pointer ${
              activeTab === tab.name
                ? "text-primary500 border-b border-primary500"
                : "text-grey700"
            }`}
            onClick={() => onTabClick(tab.name)}
          >
            {tab.icon}
            <span
              className={`font-medium ${
                activeTab === tab.name ? "text-primary500" : "text-grey700"
              }`}
            >
              {tab.name}
            </span>
            <span
              className={`rounded-xl px-2 text-xs font-medium ${
                activeTab === tab.name
                  ? "bg-primary500 text-white"
                  : "bg-grey100 text-grey700"
              }`}
            >
              {tab.count}
            </span>
          </div>
        ))}
      </div>
      {showSortBy && (
        <div className="flex items-center gap-2 border border-grey300 py-2.5 px-3 rounded-lg cursor-pointer">
          <span className="text-sm font-medium text-grey500">Sort by</span>
          <SortIcon />
        </div>
      )}
    </div>
  );
};

export default Tabs;
