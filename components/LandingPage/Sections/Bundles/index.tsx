"use client";

import { useState } from "react";
import { Crea8Star } from "@/public/icons";
import { CreativeServicesIcon, DigitalServicesIcon } from "@/public/svgs";
import { TabButton, serviceBundles, Card } from "./Components";

const Bundles = () => {
  const [activeTab, setActiveTab] = useState<"digital" | "creative">("digital");
  const handleTabClick = (tab: "digital" | "creative") => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-blue-gradient w-full py-20 px-6 md:px-28">
      <div className="max-w-[1216px] mx-auto text-center relative">
        <div className="absolute right-0 max-md:hidden">
          <Crea8Star />
        </div>
        <h2 className="text-white text-[clamp(1.5rem_,5vw,_3.5rem)]">Our Top Bundles</h2>
        <p className="text-grey50 max-sm:text-sm max-w-[412px] mx-auto my-4">
          Hiring a world-class team of creative geniuses doesn't have to be
          expensive or complicated.
        </p>
        <div className="absolute left-0 bottom-2 max-md:hidden">
          <Crea8Star />
        </div>

        {/* tab buttons */}
        <div className="flex justify-center max-sm:gap-5 gap-6 my-8">
          <TabButton
            tab="digital"
            activeTab={activeTab}
            onClick={handleTabClick}
            Icon={DigitalServicesIcon}
            label="Digital Services"
          />
          <TabButton
            tab="creative"
            activeTab={activeTab}
            onClick={handleTabClick}
            Icon={CreativeServicesIcon}
            label="Creative Services"
          />
        </div>
      </div>

      <div className="flex max-sm:gap-6 gap-8 md:max-w-[1216px] mx-auto w-full pt-8 max-lg:overflow-x-scroll no-scrollbar">
        {serviceBundles[activeTab].map((service, index) => (
          <Card
            key={index}
            price={service.price}
            icon={service.icon}
            description={service.description}
            title={service.bundle}
            features={service.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Bundles;
