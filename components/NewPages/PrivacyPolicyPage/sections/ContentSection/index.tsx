"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ContentSection = () => {
  const { activeTab } = useSelector((state: RootState) => state.tabs);
  
  console.log(activeTab);
  
  return (
    <section className="full-width content-grid bg-grey50 py-[6.25rem]">
      <div className="mx-auto min-h-80 w-full max-w-3xl">
        <p>Active Tab: {activeTab}</p>
      </div>
    </section>
  );
};

export default ContentSection;
