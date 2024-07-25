"use client";
import { useState } from "react";
import Tabs from "@/components/Dashboard/Tabs";
import Profile from "@/components/Dashboard/Profile";
import Security from "@/components/Dashboard/Security";
import Payment from "@/components/Dashboard/Payment";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<string>("Profile");

  const tabs = [
    {
      name: "Profile",
    },
    {
      name: "Password",
    },
    {
      name: "Payment",
    },
  ];
  return (
    <div className="container mx-auto space-y-8">
      <Tabs
        tabs={tabs}
        showSortBy={false}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <section>
        {activeTab === "Profile" && <Profile />}
        {activeTab === "Security" && <Security />}
        {activeTab === "Payment" && <Payment />}
      </section>
    </div>
  );
}
