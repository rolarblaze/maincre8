"use client";
import { FolderIcon, PackageIcon } from "@/public/svgs";
import React, { useEffect, useState } from "react";
import MyPackage from "../MyPackage";
import PackageInfo from "../PackageInfo";

type Tab = {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

type TabsProps = {
  activeTab?: string;
  onTabClick: (tabName: string) => void;
  disableMyPackage?: boolean;
};

const TabsToggle: React.FC<TabsProps> = ({
  activeTab: initialActiveTab = "package info",
  onTabClick,
  disableMyPackage = false,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    setActiveTab(initialActiveTab);
    console.log(activeTab);
    console.log(initialActiveTab);
  }, [initialActiveTab]);

  const handleTabClick = (tabName: string) => {
    if (!(disableMyPackage && tabName === "my package")) {
      setActiveTab(tabName);
      onTabClick(tabName);
    }
  };

  useEffect(() => {
    console.log(activeTab);
  }, [activeTab]);

  const tabs: Tab[] = [
    {
      name: "my package",
      icon: (
        <FolderIcon
          fillColor={activeTab === "my package" ? "#1574E5" : "#344054"}
        />
      ),
      component: <MyPackage />,
    },
    {
      name: "package info",
      icon: (
        <PackageIcon
          fillColor={activeTab === "package info" ? "#1574E5" : "#344054"}
        />
      ),
      component: <PackageInfo />,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between py-2 px-6 ">
        <div className="flex items-center gap-1 border-b border-grey200">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex items-center gap-2 p-4 cursor-pointer capitalize ${
                activeTab === tab.name
                  ? "text-primary500 border-b border-primary500"
                  : "text-grey700"
              } ${
                disableMyPackage && tab.name === "My Package"
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.icon}
              <span
                className={`font-medium ${
                  activeTab === tab.name ? "text-primary500" : "text-grey700"
                }`}
              >
                {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6">
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default TabsToggle;
