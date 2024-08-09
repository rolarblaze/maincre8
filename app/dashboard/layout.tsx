"use client";

import Header from "@/components/Dashboard/Header";
import MobileNav from "@/components/Dashboard/MobileNav";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Tab } from "@/components/Dashboard/Sidebar/types";
import Middleware from "@/utils/middleware";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const DashboardLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const headerTitles: Record<Tab, string> = {
    Overview: "Overview",
    Services: "Explore Services",
    MyServices: "My services",
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
    MyServices: "Select a service to track fulfilment",
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

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Middleware>
      <div className="flex h-screen pt-10 md:pt-0">
        {/* Desktop sidebar */}
        <Sidebar
          setActiveTab={setActiveTab}
          isMobile={false}
        />
        {/* Mobile sidebar */}
        {sidebarOpen && (<Sidebar
          setActiveTab={setActiveTab}
          onClick={closeSidebar}
          isMobile={true}
        />)}
        <div className="flex flex-col flex-1">
          {!isDynamicRoute && (
            <div>
              <MobileNav
                onClick={openSidebar}
                title={headerTitles[activeTab]}
              />
              <Header
                title={headerTitles[activeTab]}
                subtitle={headerSubtitles[activeTab]}
              />
            </div>
          )}
          <main className="flex-1 p-6 bg-white overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </Middleware>
  );
};

export default DashboardLayout;
