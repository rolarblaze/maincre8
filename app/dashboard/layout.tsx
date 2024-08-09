"use client";

import Header from "@/components/Dashboard/Header";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Tab } from "@/components/Dashboard/Sidebar/types";
import Middleware from "@/utils/middleware";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
    SupportInfo: "Support Info",
    SupportInbox: "Support Inbox",
    Notifications: "Notifications",
    Settings: "Settings",
  };

  const headerSubtitles: Record<Tab, string> = {
    Overview: "",
    Services: "Select a service to get started",
    Calendar: "",
    History: "",
    Support: "",
    SupportInfo: "",
    SupportInbox: "",
    Notifications: "",
    Settings: "",
  };

  // Check if the current route is dynamic
  const isDynamicRoute = pathname.split("/").length > 3;

  return (
    <Middleware>
      <div className="flex h-screen">
        <Sidebar setActiveTab={setActiveTab} />
        <div className="flex flex-col flex-1">
          {!isDynamicRoute && (
            <Header
              title={headerTitles[activeTab]}
              subtitle={headerSubtitles[activeTab]}
            />
          )}
          <main className="flex-1 md:p-6 bg-white overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </Middleware>
  );
};

export default DashboardLayout;
