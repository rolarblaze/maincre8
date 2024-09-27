"use client";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";

const ContentSection = () => {
  const { activeTab, tabs } = useSelector((state: RootState) => state.tabs);
  
  console.log(activeTab);
  
  return (
    <section className="full-width content-grid bg-grey50 py-[6.25rem]">
      <div className="mx-auto min-h-80 w-full max-w-3xl">
        <h2>Active Tab: {activeTab}</h2>
      </div>
    </section>
  );
};

export default ContentSection;
