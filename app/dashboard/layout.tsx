"use client";
import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Tab } from "@/components/Dashboard/Sidebar/types";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const pathname = usePathname();

  const headerTitles: Record<Tab, string> = {
    Overview: "Overview",
    Services: "Explore Services",
    Calendar: "Calendar",
    History: "Order History",
    Support: "Support",
    Notifications: "Notifications",
    Settings: "Settings",
  };

  const headerSubtitles: Record<Tab, string> = {
    Overview: "",
    Services: "Select a service to get started",
    Calendar: "",
    History: "",
    Support: "",
    Notifications: "",
    Settings: "",
  };

  // Check if the current route is dynamic
  const isDynamicRoute = pathname.split("/").length > 3;

  return (
    <div className="flex h-screen">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1">
        {!isDynamicRoute && (
          <Header
            title={headerTitles[activeTab]}
            subtitle={headerSubtitles[activeTab]}
          />
        )}
        <main className="flex-1 p-6 bg-white overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
