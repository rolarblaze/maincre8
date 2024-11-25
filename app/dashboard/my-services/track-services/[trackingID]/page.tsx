"use client";

import MyPackage from "@/components/Dashboard/ServicesTab/MyPackage";
import AllInOneBundleForm from "@/components/Dashboard/SubmitBrief/AllInOneBundleForm";
import BrandDesignForm from "@/components/Dashboard/SubmitBrief/BrandDesignForm";
import ContentCreationForm from "@/components/Dashboard/SubmitBrief/ContentCreationForm";
import DigitalMarketForm from "@/components/Dashboard/SubmitBrief/DigitalMarketForm";
import GraphicsDesignForm from "@/components/Dashboard/SubmitBrief/GraphicsDesignForm";
import BusinessBriefHeader from "@/components/Dashboard/SubmitBrief/shared/BusinessBriefHeader";
import SliderModal from "@/components/UI/Modals/SliderModal";
import { handleFormModal } from "@/redux/myServices";
import { formConfig } from "@/redux/myServices/formConfig";

const TrackService = () => {
  return (
    <div>
      <MyPackage />
    </div>
  );
};

export default TrackService;
