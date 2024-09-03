import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { useEffect } from "react";
import { updateProgress } from "@/redux/servicesTracker/tracker";

const ZohoProjectOnboarding = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);
  const currentTime = new Date();
  const meetingEndTime = trackingDetails?.meeting_end_time
    ? new Date(trackingDetails.meeting_end_time)
    : null;

  let status: "inactive" | "inprogress" | "completed" = "inactive";

  if (trackingDetails?.zoho_project_status === "Completed") {
    status = "completed";
  } else if (
    meetingEndTime &&
    currentTime > meetingEndTime &&
    trackingDetails?.zoho_project_is_available &&
    trackingDetails?.zoho_project_status !== "Completed"
  ) {
    status = "inprogress";
  }

  useEffect(() => {
    if (status === "completed") {
      dispatch(updateProgress({ MilestoneTrackingInProgress: true }));
    }
  }, [dispatch, status]);

  // Set button background color based on status
  const buttonClassNames =
    status === "inactive"
      ? "bg-[#98A2B3] !py-1 !px-4 text-black rounded-xl text-white"
      : "bg-[#F3A218] !py-1 !px-4 text-black rounded-xl";

  return (
    <WrapperComponent
      status={status}
      title="Zoho Project Onboarding"
      description="Your project will be set up in Zoho within 24 hours after the onboarding call"
      buttonLabel={status === "completed" ? "Completed" : "In progress"}
      buttonClassNames={buttonClassNames}
      showButton={true}
      showDate={false}
      dateBought=""
    />
  );
};

export default ZohoProjectOnboarding;
