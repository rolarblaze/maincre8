"use client";

import Header from "@/components/Dashboard/Header";
import MobileNav from "@/components/Dashboard/MobileNav";
import MobileSidebar from "@/components/Dashboard/MobileSidebar";
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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial mobile state based on window width
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headerTitles: Record<Tab, string> = {
    Overview: isMobile ? "Overview" : "",
    Services: "Explore Services",
    MyServices: "My services",
    CustomRecommendation: "Custom Recommendation",
    Calendar: "Calendar",
    History: "Order History",
    Support: "Support",
    SupportInfo: "Support Info",
    SupportInbox: "Support Inbox",
    Notifications: "Notifications",
    Settings: "Settings",
  };

  const headerSubtitles: Record<Tab, string> = {
    Overview: isMobile ? "" : "",
    Services: "Select a service to get started",
    MyServices: "Select a service to track fulfilment",
    CustomRecommendation:
      "Fill out a brief and get recommended services to suit your needs",
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

  const isOverview = pathname.split("/").length === 2;

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
        <Sidebar setActiveTab={setActiveTab} />
        {/* Mobile sidebar */}
        {sidebarOpen && (
          <MobileSidebar setActiveTab={setActiveTab} onClick={closeSidebar} />
        )}
        <div className="flex flex-col flex-1">
          <MobileNav onClick={openSidebar} title={headerTitles[activeTab]} />
          {!isDynamicRoute && (
            <div>
              {headerTitles[activeTab] && (
                <Header
                  title={headerTitles[activeTab]}
                  subtitle={headerSubtitles[activeTab]}
                />
              )}
            </div>
          )}
          <main
            className={`flex-1 p-6 overflow-y-auto noScrollbar ${isOverview ? "bg-dashboard-bg" : "bg-white"
              }`}
          >
            {children}
          </main>
        </div>
      </div>
    </Middleware>
  );
};

export default DashboardLayout;
