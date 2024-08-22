import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect } from "react";

const MilestoneTracking = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);
  // const { trackingProgress } = useAppSelector((state) => state.tracker);
  const status = "inactive";

  const buttonClassNames =
    status === "inactive"
      ? "bg-[#98A2B3] !py-1 !px-3 text-black rounded-xl text-white"
      : "bg-[#F3A218] !py-1 !px-3 text-black rounded-xl";

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

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
