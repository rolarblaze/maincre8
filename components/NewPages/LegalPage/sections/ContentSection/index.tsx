"use client";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const ContentSection = () => {
  const { activeTab, tabs } = useSelector((state: RootState) => state.tabs);

  const activeTabLabel = tabs.find((tab) => tab.id === activeTab)?.label;

  return (
    <section>
      <p>Active Tab Label: {activeTabLabel}</p>
    </section>
  );
};

export default ContentSection;
