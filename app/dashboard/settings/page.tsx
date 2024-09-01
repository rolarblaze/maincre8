"use client";
import { useState } from "react";
import Tabs from "@/components/Dashboard/Tabs";
import { Payment, Profile, Security } from "@/components";

export default function Settings() {
  const [activeTab, setActiveTab] = useState<string>("Profile");

  const tabs = [
    {
      name: "Profile",
    },
    {
      name: "Password",
    },
    // {
    //   name: "Payment",
    // },
  ];
  return (
    <div className="container mx-auto space-y-8">
      <Tabs
        tabs={tabs}
        showSortBy={false}
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      <section className="px-5 py-6 md:p-0">
        {activeTab === "Profile" && <Profile />}
        {activeTab === "Password" && <Security />}
        {activeTab === "Payment" && <Payment />}
      </section>
    </div>
  );
}
