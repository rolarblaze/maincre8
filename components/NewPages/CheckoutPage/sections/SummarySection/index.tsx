"use client";
import { Button, InputField, Modal } from "@/components";
import { useState } from "react";
import SuccessModal from "../SuccessModal";

const SummarySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full max-w-[27rem] space-y-6 rounded-2xl border border-grey200 bg-white p-8">
      <div className="flex items-center justify-between gap-4">
        <InputField
          type="text"
          placeholder="Enter Discount Code"
          classNames="bg-grey50 border-none placeholder:font-medium"
        />
        <Button
          label="Add"
          classNames="max-w-[7rem] text-sm font-medium py-4"
        />
      </div>

      <hr />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-[150%]">Sub Total</p>
          <p className="font-medium leading-[150%] text-grey600">$209.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm font-normal leading-[150%]">Tax (10%)</p>
          <p className="font-medium leading-[150%] text-grey600">$41.00</p>
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-between">
        <p className="text-sm font-medium leading-[150%]">Total</p>
        <p className="font-semibold leading-6 text-grey800">$250.00</p>
      </div>

      <Button
        label="Proceed to Payment"
        onClick={() => setIsOpen(true)}
        classNames="font-manrope text-base font-semibold mx-auto py-4 rounded-lg"
      />

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCancelIcon={false}
      >
       <SuccessModal />
      </Modal>
    </section>
  );
};
export default SummarySection;
