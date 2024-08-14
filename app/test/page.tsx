"use client";
import { Modal } from "@/components";
import RecommendPopOut from "@/components/Modals/RecommendPopOut";
import ServiceRecommendModal from "@/components/Modals/ServiceRecommendModal";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-grey500">
      <Modal
        className="!px-0 !py-0"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        showCancelIcon={false}
      >
        {/* <ServiceRecommendModal /> */}
        <RecommendPopOut />
      </Modal>
    </div>
  );
};

export default page;
