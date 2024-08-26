"use client";
import { FolderIcon, PackageIcon } from "@/public/svgs";
import React, { useEffect, useState } from "react";
import MyPackage from "../MyPackage";
import PackageInfo from "../PackageInfo";
import { Provision } from "@/redux/shop/interface";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

type Tab = {
  name: string;
  icon: React.ReactNode;
  component: React.ReactNode;
};

type TabsProps = {
  onTabClick: (tabName: string) => void;
  disableMyPackage?: boolean;
  provisions: Provision[];
};

const TabsToggle: React.FC<TabsProps> = ({
  onTabClick,
  disableMyPackage = false,
  provisions,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialActiveTab = searchParams.get("tab") || "package-info";

  const [activeTab, setActiveTab] = useState(initialActiveTab);

  useEffect(() => {
    setActiveTab(initialActiveTab);
  }, [initialActiveTab]);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    onTabClick(tabName);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("tab", tabName);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  const tabs: Tab[] = [
    {
      name: "my-package",
      icon: (
        <FolderIcon
          fillColor={activeTab === "my-package" ? "#1574E5" : "#344054"}
        />
      ),
      component: <MyPackage />,
    },
    {
      name: "package-info",
      icon: (
        <PackageIcon
          fillColor={activeTab === "package-info" ? "#1574E5" : "#344054"}
        />
      ),
      component: <PackageInfo Benefits={provisions} />,
    },
  ].filter((tab) => !(disableMyPackage && tab.name === "my-package"));

  // Ensure the active tab is not hidden by the filter
  useEffect(() => {
    if (disableMyPackage && activeTab === "my-package") {
      setActiveTab("package-info");
      router.push(`${pathname}?tab=package-info`);
    }
  }, [disableMyPackage, activeTab, router, pathname]);

  return (
    <div>
      <div className="flex items-center justify-between py-2 md:px-6 ">
        <div className="flex items-center gap-1 border-b border-grey200">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex items-center gap-2 p-4 cursor-pointer capitalize ${
                activeTab === tab.name
                  ? "text-primary500 border-b border-primary500"
                  : "text-grey700"
              }`}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.icon}
              <span
                className={`font-medium ${
                  activeTab === tab.name ? "text-primary500" : "text-grey700"
                }`}
              >
                {tab.name.replace("-", " ")}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-0 md:px-6 py-6">
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
};

export default TabsToggle;
