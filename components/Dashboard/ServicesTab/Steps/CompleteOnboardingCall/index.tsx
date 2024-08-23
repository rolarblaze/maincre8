import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect } from "react";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import { FormatDate } from "@/components";

const CompleteOnboardingCall = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  const callLink = trackingDetails?.onboarding_call_link;
  // don't need this but just leave it
  const meetingStartTime = trackingDetails?.meeting_start_time
    ? new Date(trackingDetails.meeting_start_time)
    : null;
  const meetingEndTime = trackingDetails?.meeting_end_time
    ? new Date(trackingDetails.meeting_end_time)
    : null;
  const currentTime = new Date();

  let status: "inactive" | "inprogress" | "completed" = "inactive";

  if (callLink && meetingEndTime) {
    if (currentTime <= meetingEndTime) {
      status = "inprogress";
    } else if (currentTime > meetingEndTime) {
      status = "completed";
    }
  }

  useEffect(() => {
    if (status === "completed" && trackingDetails?.onboarding_call_booked) {
      dispatch(updateProgress({ ZohoProjectOnboardingInProgress: true }));
    }
  }, [dispatch, status]);

  const handleJoinOnboardingCall = () => {
    window.open(callLink, "_blank");
  };

  return (
    <WrapperComponent
      status={status}
      title="Complete the Onboarding Call"
      description="Finalize project specifics and meet your team during the onboarding call"
      buttonLabel="Join onboarding call"
      buttonClassNames=""
      onClick={handleJoinOnboardingCall}
      completedState={<span className="text-primary500">Completed</span>}
      extraDescription={
        <FormatDate
          startTime={trackingDetails?.meeting_start_time}
          endTime={trackingDetails?.meeting_end_time}
        />
      }
    />
  );
};

export default CompleteOnboardingCall;
