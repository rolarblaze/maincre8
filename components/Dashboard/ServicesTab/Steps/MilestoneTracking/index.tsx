import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect, useMemo } from "react";

const MilestoneTracking = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);

  const status = useMemo(() => {
    if (
      trackingDetails?.zoho_project_status === "Completed" &&
      !trackingDetails.milestone_tracking_completed
    ) {
      return "inprogress";
    } else if (trackingDetails?.milestone_tracking_completed) {
      return "completed";
    } else {
      return "inactive";
    }
  }, [trackingDetails]);

  const buttonClassNames =
    status === "inactive"
      ? "bg-[#98A2B3] !py-1 !px-3 text-black rounded-xl text-white"
      : "bg-[#F3A218] !py-1 !px-3 text-black rounded-xl";

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  if (trackingDetails) {
    console.log(trackingDetails);
  }

  return (
    <WrapperComponent
      status={status}
      title="Milestone Tracking"
      description="Begin tracking project milestones 24 hours after Zoho Project onboarding is complete"
      buttonLabel="Track on Zoho Projects"
      buttonClassNames={buttonClassNames}
      // onClick={handleJoinOnboardingCall}
      // completedState={<span className="text-primary500">Completed</span>}
    />
  );
};

export default MilestoneTracking;
