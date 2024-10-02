"use client"
import React, { useState } from "react";

function FaqTabs() {
  const Tabs = [
    "Onboarding",
    "Bundles",
    "Content",
    "Marketing",
    "Payments",
    "Support",
    "Project Management",
  ];

  const [activeTab, setActiveTab] = useState(Tabs[0]);
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  //   const activeFaq = Faqs.find(
  //     (faq) => faq.tab === activeTab,
  //   ) || {
  //     title: "",
  //     subTitle: "",
  //     content: [],
  //   };
  return (
    <section className="relative">
      <div className="no-scrollbar sticky top-0 z-10 mx-auto flex max-w-[1216px] items-center gap-2 py-7 max-lg:overflow-x-auto lg:gap-7">
        {Tabs.map((tab, i) => (
          <span
            key={i}
            className={`cursor-pointer text-nowrap rounded-lg border px-3 py-1.5 text-sm font-medium ${
              tab === activeTab
                ? "bg-black text-white"
                : "border-grey500 text-grey500"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
      {/* <div className="mx-auto mt-[120px] max-w-[1219px] text-center max-xl:px-6">
        <Section {...activeService} />
      </div> */}
    </section>
  );
}

export default FaqTabs;
