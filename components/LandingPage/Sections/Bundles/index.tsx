/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import { Crea8Star } from "@/public/icons";
import {
  ContentServiceIcon,
  CreativeServicesIcon,
  DigitalServicesIcon,
} from "@/public/svgs";
import { TabButton, Card, serviceBundles } from "./Components";
import { useAppDispatch, useAppSelector, RootState } from "@/redux/store";
import { getServices } from "@/redux/shop/features";
import Spinner from "@/components/Spinner";
import { mapServicesToProps } from "@/components/Shop/Data/shopData";


const Bundles = () => {
  const dispatch = useAppDispatch();
  const shopState = useAppSelector((state: RootState) => state.service);
  const [activeTab, setActiveTab] = useState<
    "digital" | "creative" | "content"
  >("digital");

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  if (shopState.isLoading) {
    return (
      <div className="mx-auto flex w-full h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (shopState.error) {
    return <div>Error: {shopState.error}</div>;
  }

  const serviceProps = mapServicesToProps(shopState.services);

  const mergedBundles = {
    digital: serviceBundles.digital.map((bundle, index) => ({
      ...bundle,
      features: serviceProps[0]?.bundles[0]?.packages[index]?.features || [],
    })),
    creative: serviceBundles.creative.map((bundle, index) => ({
      ...bundle,
      features: serviceProps[0]?.bundles[1]?.packages[index]?.features || [],
    })),
    content: serviceBundles.content.map((bundle, index) => ({
      ...bundle,
      features: serviceProps[0]?.bundles[2]?.packages[index]?.features || [],
    })),
  };

  return (
    <div className="min-h-screen bg-blue-gradient w-full py-20 px-6 md:px-28">
      <div className="max-w-[1216px] mx-auto text-center relative">
        <div className="absolute right-0 max-md:hidden">
          <Crea8Star />
        </div>
        <h2 className="text-white text-[clamp(1.5rem_,5vw,_3.5rem)]">
          Our Top Bundles
        </h2>
        <p className="text-grey50 max-sm:text-sm max-w-[412px] mx-auto my-4">
          Hiring a world-class team of creative geniuses doesn't have to be
          expensive or complicated.
        </p>
        <div className="absolute left-0 bottom-2 max-md:hidden">
          <Crea8Star />
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center max-sm:gap-5 gap-6 my-8">
          <TabButton
            tab="digital"
            activeTab={activeTab}
            onClick={() => setActiveTab("digital")}
            Icon={DigitalServicesIcon}
            label="Digital Services"
          />
          <TabButton
            tab="creative"
            activeTab={activeTab}
            onClick={() => setActiveTab("creative")}
            Icon={CreativeServicesIcon}
            label="Creative Services"
          />
          <TabButton
            tab="content"
            activeTab={activeTab}
            onClick={() => setActiveTab("content")}
            Icon={ContentServiceIcon}
            label="Content Services"
          />
        </div>
      </div>

      <div className="flex max-sm:gap-6 gap-8 md:max-w-[1216px] mx-auto w-full pt-8 max-lg:overflow-x-scroll no-scrollbar">
        {mergedBundles[activeTab].map((service, index) => (
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
