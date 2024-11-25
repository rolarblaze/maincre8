import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  BookDiscoveryCall,
  BookOffboardingCall,
  BundleBought,
  CompleteOnboardingCall,
  MilestoneTracking,
  OffboardingCall,
  ProjectCompleted,
  SubmittedBrief,
  ZohoProjectOnboarding,
} from "../Steps";
import { handleSetCurrentTrackingBundleName } from "@/redux/servicesTracker/tracker";
import { useEffect } from "react";
import { handleFormModal } from "@/redux/myServices";
import { formConfig } from "@/redux/myServices/formConfig";
import SliderModal from "@/components/UI/Modals/SliderModal";
import BusinessBriefHeader from "../../SubmitBrief/shared/BusinessBriefHeader";
import DigitalMarketForm from "../../SubmitBrief/DigitalMarketForm";
import GraphicsDesignForm from "../../SubmitBrief/GraphicsDesignForm";
import BrandDesignForm from "../../SubmitBrief/BrandDesignForm";
import ContentCreationForm from "../../SubmitBrief/ContentCreationForm";
import AllInOneBundleForm from "../../SubmitBrief/AllInOneBundleForm";

// let g = {
//   transaction: {
//     transaction_id: 39,
//     created_at: "2024-11-18T13:53:33.295064Z",
//   },
//   package_tracking_id: 5,
//   transaction_id: 39,
//   brief_submitted: false,
//   brief_attachment_link: null,
//   onboarding_call_booked: false,
//   onboarding_call_link: null,
//   offboarding_call_booked: false,
//   offboarding_call_link: null,
//   project_completed_status: false,
//   meeting_code: null,
//   meeting_start_time: null,
//   meeting_end_time: null,
//   brief_submission_date: null,
//   off_boarding_meeting_code: null,
//   off_boarding_meeting_start_time: null,
//   off_boarding_meeting_end_time: null,
//   zoho_project_is_available: false,
//   zoho_project_status: "In progress",
//   milestone_tracking_completed: false,
// };

const MyPackage = () => {
  const { trackingProgress } = useAppSelector((state) => state.tracker);

  // Get the active bundle name
  const activebundleName = trackingProgress?.activeBundle;

  const toCamelCase = (str: string) => {
    if (str) {
      if (str === "Graphic Design") {
        str = "Graphics Design";
      }
      return str
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
          index === 0 ? match.toLowerCase() : match.toUpperCase(),
        )
        .replace(/\s+/g, "");
    }
  };

  const camelCasedName = toCamelCase(activebundleName as string);

  // Access the isModalOpen state for the current service form
  const isModalOpen = useAppSelector((state) => {
    if (activebundleName) {
      const formState = state.forms[camelCasedName as keyof typeof formConfig];
      return formState?.isModalOpen;
    }
    return false;
  });

  const dispatch = useAppDispatch();

  const servicesObj = {
    digitalMarketing: "Digital Marketing",
    graphicsDesign: "Graphics Design",
    brandDesign: "Brand Design",
    contentCreation: "Content Creation",
    AllInOne: "All-In-One Bundle",
  };

  // Placeholder
  const handleClose = () => {
    dispatch(
      handleFormModal({
        formName: camelCasedName as keyof typeof formConfig,
        isModalOpen: false,
      }),
    );
  };

  // Placeholder
  function handleOpenBriefForm() {
    if (activebundleName) {
      dispatch(
        handleSetCurrentTrackingBundleName({
          activeBundle: activebundleName,
        }),
      );

      dispatch(
        handleFormModal({
          formName: camelCasedName as keyof typeof formConfig,
          isModalOpen: true,
        }),
      );
    }
  }

  return (
    <div className="space-y-6">
      <BundleBought />
      <SubmittedBrief handleBriefSubmission={handleOpenBriefForm} />
      <BookDiscoveryCall />
      <CompleteOnboardingCall />
      <ZohoProjectOnboarding />
      <MilestoneTracking />
      <BookOffboardingCall />
      <OffboardingCall />
      <ProjectCompleted />
      <SliderModal
        isOpen={isModalOpen}
        onClose={handleClose}
        title="Digital Marketing Brief Submission Form"
        cancelBtnStyles="border-none top-1 right-6 md:top-5 md:right-10"
      >
        <BusinessBriefHeader
          title={`${activebundleName} Business Brief Form`}
        />
        {activebundleName === servicesObj.digitalMarketing ? (
          <DigitalMarketForm />
        ) : activebundleName === servicesObj.graphicsDesign ? (
          <GraphicsDesignForm />
        ) : activebundleName === servicesObj.brandDesign ? (
          <BrandDesignForm />
        ) : activebundleName === servicesObj.contentCreation ? (
          <ContentCreationForm />
        ) : (
          <AllInOneBundleForm />
        )}
      </SliderModal>
    </div>
  );
};

export default MyPackage;
