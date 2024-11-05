"use client";
import { Button } from "@/components";
import AllInOneBundleForm from "@/components/Dashboard/SubmitBrief/AllInOneBundleForm";
import BrandDesignForm from "@/components/Dashboard/SubmitBrief/BrandDesignForm";
import ContentCreationForm from "@/components/Dashboard/SubmitBrief/ContentCreationForm";
import DigitalMarketForm from "@/components/Dashboard/SubmitBrief/DigitalMarketForm";
import GraphicsDesignForm from "@/components/Dashboard/SubmitBrief/GraphicsDesignForm";
import BusinessBriefHeader from "@/components/Dashboard/SubmitBrief/shared/BusinessBriefHeader";
import SliderModal from "@/components/UI/Modals/SliderModal";
import { useState } from "react";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(-1);

  function handleClose() {
    setIsOpen(false);
  }

  const servicesObj = {
    digitalMarketing: "Digital Marketing",
    graphicsDesign: "Graphics Design",
    brandDesign: "Brand Design",
    contentCreation: "Content Creation",
    allInOne: "All-In-One Bundle",
  };

  const serviceKeys = Object.keys(servicesObj);

  const handleNextService = () => {
    setCurrentServiceIndex((prevIndex) =>
      prevIndex === serviceKeys.length - 1 ? 0 : prevIndex + 1,
    );
    setIsOpen(true);
  };

  const currentServiceKey = serviceKeys[currentServiceIndex];
  const currentServiceTitle =
    servicesObj[currentServiceKey as keyof typeof servicesObj];

  return (
    <main className="flex h-full w-full items-center justify-center">
      <Button
        label="Toggle Service"
        classNames="w-auto"
        onClick={handleNextService}
      />
      <SliderModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Digital Marketing Brief Submission Form"
        cancelBtnStyles="border-none top-1 right-6 md:top-5 md:right-10"
      >
        <BusinessBriefHeader
          title={`${currentServiceTitle} Business Brief Form`}
        />
        {currentServiceTitle === servicesObj.digitalMarketing ? (
          <DigitalMarketForm />
        ) : currentServiceTitle === servicesObj.graphicsDesign ? (
          <GraphicsDesignForm />
        ) : currentServiceTitle === servicesObj.brandDesign ? (
          <BrandDesignForm />
        ) : currentServiceTitle === servicesObj.contentCreation ? (
          <ContentCreationForm />
        ) : (
          <AllInOneBundleForm />
        )}
      </SliderModal>
    </main>
  );
}
