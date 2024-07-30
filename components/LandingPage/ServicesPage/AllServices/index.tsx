"use client";
import { useState } from "react";
import { Services } from "./Tabs/data";
import Section from "./Tabs";

const AllServices = () => {
  const Tabs = [
    "Brand Consistency",
    "Create Briefs",
    "Organize and Prioritize",
    "Unlimited Revisions",
    "Ready to Use",
    "Integration",
  ];

  const [activeTab, setActiveTab] = useState(Tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeService = Services.find(
    (service) => service.tab === activeTab
  ) || {
    title: "",
    subTitle: "",
    content: [],
  };

  return (
    <section className="relative">
      <div className="sticky top-0 no-scrollbar z-10 max-lg:overflow-x-auto max-w-[1216px] mx-auto bg-white shadow-dark-blue flex items-center gap-2 lg:gap-7 py-7 px-6 lg:px-36">
        {Tabs.map((tab, i) => (
          <span
            key={i}
            className={`text-sm text-nowrap font-medium border rounded-lg py-1.5 px-3 cursor-pointer ${
              tab === activeTab
                ? "bg-black text-white"
                : "text-grey900 border-grey500"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      <div className="max-w-[1219px] max-xl:px-6 mx-auto text-center mt-[120px]">
        <Section {...activeService} />
      </div>
    </section>
  );
};

export default AllServices;
