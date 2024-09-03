import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect } from "react";
import { FormatDate } from "@/components";

const OffboardingCall = () => {
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  const callLink = trackingDetails?.offboarding_call_link;
  // don't need this yet but just leave it
  const meetingStartTime = trackingDetails?.off_boarding_meeting_start_time
    ? new Date(trackingDetails.meeting_start_time)
    : null;
  const meetingEndTime = trackingDetails?.off_boarding_meeting_end_time
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

  const handleJoinOffboardingCall = () => {
    window.open(callLink, "_blank");
  };

  return (
    <WrapperComponent
      status={status}
      title="Offboarding Call"
      description="Schedule an offboarding call to review the project"
      buttonLabel="Join offboarding call"
      buttonClassNames=""
      onClick={handleJoinOffboardingCall}
      completedState={<span className="text-primary500">Completed</span>}
      extraDescription={
        <FormatDate
          startTime={trackingDetails?.off_boarding_meeting_start_time}
          endTime={trackingDetails?.off_boarding_meeting_end_time}
        />
      }
    />
  );
};

export default OffboardingCall;
