"use client";
import React, { useState } from "react";
import FaqSection from "..";
import { newFAQData } from "../faqData";

function FaqTabs({ queryInput }: { queryInput?: string | undefined }) {
  const Tabs = [
    "All",
    "Onboarding",
    "Bundles",
    // "Content",
    // "Marketing",
    "Payments",
    "Support",
    "Project Management",
  ];

  const [activeTab, setActiveTab] = useState(Tabs[0]);
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const activeFaqData = newFAQData.filter((faq) =>
    faq.labels.includes(activeTab),
  );

  const displayedData = queryInput
    ? activeFaqData.filter(
        (data) =>
          data.question
            .toLowerCase()
            .includes(queryInput.toLowerCase() as string) ||
          data.answer
            .toLowerCase()
            .includes(queryInput.toLowerCase() as string),
      )
    : activeFaqData;
  return (
    <section className="relative w-full">
      {/* Tabs for the FAQs */}
      <div className="content-grid">
        <div className="no-scrollbar sticky top-0 z-10 mx-auto flex snap-x scroll-px-5 items-center gap-2 px-5 py-7 max-lg:overflow-x-auto md:px-0 lg:gap-7">
          {Tabs.map((tab, i) => (
            <span
              key={i}
              className={`cursor-pointer text-nowrap rounded-lg border px-3 py-1.5 text-sm font-medium ${
                tab === activeTab
                  ? "border-primary400 bg-primary50 text-grey600"
                  : "border-grey300 text-grey500"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <FaqSection activeFAQData={displayedData} />
    </section>
  );
}

export default FaqTabs;
