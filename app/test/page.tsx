"use client";
import { Modal } from "@/components";
import RecommendPopOut from "@/components/Modals/RecommendPopOut";
import ServiceRecommendModal from "@/components/Modals/ServiceRecommendModal";
import React, { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-grey500">
      <ServiceRecommendModal />
    </div>
  );
};

export default page;
