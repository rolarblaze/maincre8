"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Header from "@/components/Dashboard/Header";
import MobileNav from "@/components/Dashboard/MobileNav";
import MobileSidebar from "@/components/Dashboard/MobileSidebar";
import Sidebar from "@/components/Dashboard/Sidebar";
import { Tab } from "@/components/Dashboard/Sidebar/types";
import { BellIcon, CartIcon } from "@/public/svgs";
import Middleware from "@/utils/middleware";
import { useAppSelector } from "@/redux/store";

const DashboardLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const { isLoadingProfile, profile } = useAppSelector((state) => state.auth);
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
    Overview: isMobile ? "Overview" : `Welcome, ${profile.first_name}`,
    Services: "Services",
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

  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Middleware>
      <div className="flex h-screen pt-10 md:pt-0">
        {/* Desktop sidebar */}
        <Sidebar setActiveTab={setActiveTab} />

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <MobileSidebar setActiveTab={setActiveTab} onClick={closeSidebar} />
        )}

        {/* Main section */}
        <div className="flex w-[85%] min-w-[calc(100vw_-_20rem)] flex-1 flex-col xs:max-md:w-full">
          <MobileNav onClick={openSidebar} title={headerTitles[activeTab]} />
          {
            <div className="w-full">
              {headerTitles[activeTab] && (
                <Header
                  title={headerTitles[activeTab]}
                  subtitle={headerSubtitles[activeTab]}
                />
              )}
            </div>
          }
          <main
            className={`noScrollbar border- w-[85%] min-w-[calc(100vw_-_20rem)] flex-1 overflow-auto xs:max-md:w-full xs:max-md:border-transparent xs:max-md:px-2 xs:max-md:py-3`}
          >
            {children}
          </main>
        </div>
      </div>
    </Middleware>
  );
};

export default DashboardLayout;
