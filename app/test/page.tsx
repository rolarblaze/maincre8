"use client";
import { Modal } from "@/components";
import RecommendPopOut from "@/components/Modals/RecommendPopOut";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-grey500">
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="!py-4 !px-4 !w-fit"
      >
        <RecommendPopOut />
      </Modal>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-400 px-4 py-2 text-white font-semibold"
      >
        Click Me
      </button>
    </div>
  );
};

export default page;
