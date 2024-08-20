import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect } from "react";
import { updateProgress } from "@/redux/servicesTracker/tracker";

const BookDiscoveryCall = () => {
  // first step
  const dispatch = useAppDispatch();
  const { trackingDetails } = useAppSelector((state) => state.services);
  const { trackingProgress } = useAppSelector((state) => state.tracker);

  //second step
  // use a value to check if the step is completed or not (in active)
  const hasBookedDiscoveryCall =
    trackingDetails?.onboarding_call_booked !== null ? "completed" : "inactive";

  const status = trackingProgress?.BookDiscoveryCallInProgress
    ? "inprogress"
    : hasBookedDiscoveryCall;

  // third step
  // check the current progress state of this step
  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  // set next step to inprogress
  useEffect(() => {
    if (status === "completed") {
      dispatch(updateProgress({ CompleteOnboardingCallInProgress: true }));
    }
  }, [dispatch, hasBookedDiscoveryCall]);

  return (
    <WrapperComponent
      status={status}
      title="Book a Discovery Call:"
      description="Schedule your Discovery Call to discuss project details, starting from 48 hours after purchase"
      buttonLabel="Book a discovery call"
      buttonClassNames=""
    />
  );
};

export default BookDiscoveryCall;
