"use client";
import DigitalMarketForm from "@/components/Dashboard/SubmitBrief/DigitalMarketForm";
import SliderModal from "@/components/UI/Modals/SliderModal";
import Link from "next/link";
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
        cancelBtnStyles="border-none top-10 right-10"
      >
        <DigitalMarketForm />
      </SliderModal>
    </main>
  );
}
