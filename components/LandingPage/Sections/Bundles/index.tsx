"use client";

import { Crea8Star } from "@/public/icons";
import { CreativeServicesIcon, DigitalServicesIcon } from "@/public/svgs";
import { useState } from "react";
import { Card, TabButton, serviceBundles } from "./Components";

const Bundles = () => {
  const [activeTab, setActiveTab] = useState<"digital" | "creative">("digital");
  const handleTabClick = (tab: "digital" | "creative") => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-blue-gradient w-full py-20 px-28">
      <div className="max-w-[1216px] mx-auto text-center relative">
        <div className="absolute right-0">
          <Crea8Star />
        </div>
        <h2 className="text-white">Our Top Creative Bundles</h2>
        <p className="text-grey50 max-w-[412px] mx-auto my-4">
          Hiring a world-class team of creative geniuses doesn't have to be
          expensive or complicated.
        </p>
        <div className="absolute left-0 bottom-2">
          <Crea8Star />
        </div>

        {/* tab buttons */}
        <div className="flex justify-center gap-6 my-8">
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

      <div className="grid grid-cols-3 gap-8 max-w-[1216px] mx-auto pt-8">
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
