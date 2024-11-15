"use client";
import React, { useState } from "react";
import FaqSection from "..";
import { newFAQData } from "../faqData";
import { CancelIcon } from "@/public/icons";
import Button from "@/components/Button";
import { BigCancelIcon } from "@/public/svgs";

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
        <div className="no-scrollbar mx-auto flex items-center px-5 py-7 max-lg:overflow-x-auto md:px-0 gap-2 lg:gap-16">
          {Tabs.map((tab, i) => (
            <div
              key={i}
              className={`flex gap-2 text-nowrap rounded-lg border px-3 py-1.5 text-sm font-medium ${
                tab === activeTab
                  ? "border-primary400 bg-primary50 text-grey600"
                  : "border-grey300 text-grey500"
              }`}
            >
              <span
                className="cursor-pointer"
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </span>

              {tab !== "All" && tab === activeTab && (
                <Button
                  label={
                    <BigCancelIcon width="18" height="18" stroke="#475367" />
                  }
                  classNames="!bg-transparent w-fit h-fit p-0 self-center"
                  onClick={() => handleTabClick("All")}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <FaqSection activeFAQData={displayedData} />
    </section>
  );
}

export default FaqTabs;
