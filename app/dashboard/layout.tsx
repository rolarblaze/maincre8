"use client";
import { useState } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";
import { Tab } from "@/components/Dashboard/Sidebar/types";

const DashboardLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>("Overview");

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

  return (
    <div className="flex h-screen">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex flex-col flex-1">
        <Header
          title={headerTitles[activeTab]}
          subtitle={headerSubtitles[activeTab]}
        />
        <main className="flex-1 p-6 bg-white overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
