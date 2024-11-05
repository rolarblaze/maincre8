"use client";
import DigitalMarketForm from "@/components/Dashboard/SubmitBrief/DigitalMarketForm";
import BusinessBriefHeader from "@/components/Dashboard/SubmitBrief/shared/BusinessBriefHeader";
import SliderModal from "@/components/UI/Modals/SliderModal";
import { useState } from "react";

export default function Test() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <main className="flex w-full justify-between">
      <button className="bg-red-400 p-3" onClick={() => setIsOpen(true)}>
        Click Me
      </button>
      <SliderModal
        isOpen={isOpen}
        onClose={handleClose}
        title="Digital Marketing Brief Submission Form"
        cancelBtnStyles="border-none top-5 right-10"
      >
        <BusinessBriefHeader title="Digital Marketing" />
        <DigitalMarketForm />
        {/* <p className="mb-6">Body</p> */}
      </SliderModal>
    </main>
  );
}
