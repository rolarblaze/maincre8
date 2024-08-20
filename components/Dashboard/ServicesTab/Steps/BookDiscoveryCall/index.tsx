"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect, useState } from "react";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import { bookDiscoveryCall } from "@/redux/servicesTracker/features";
import { useSearchParams } from "next/navigation";
import { addAlert } from "@/redux/alerts";
import { createData } from "@/helpers/saveData";

const BookDiscoveryCall = () => {
  // first step
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const transId = searchParams.get("transactionId");
  const { trackingDetails } = useAppSelector((state) => state.services);
  const { trackingProgress } = useAppSelector((state) => state.tracker);

  // State to manage loading
  const [loading, setLoading] = useState(false);

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
    if (
      status === "completed" &&
      trackingDetails?.onboarding_call_booked !== null
    ) {
      dispatch(updateProgress({ CompleteOnboardingCallInProgress: true }));
    }
  }, [dispatch, hasBookedDiscoveryCall]);

  const handleBookDiscoveryCall = async () => {
    setLoading(true);

    try {
      const actionResult = await dispatch(bookDiscoveryCall(Number(transId)));
      if (bookDiscoveryCall.fulfilled.match(actionResult)) {
        console.log(actionResult);
        const { detail, booking_link } = actionResult.payload;
        createData("meeting-link", booking_link);
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: detail,
            type: "success",
          })
        );
      } else if (bookDiscoveryCall.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.error?.message ||
          "Failed to book discovery call. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          })
        );
      }
    } catch (error) {
      console.error("Error booking discovery call:", error);
    } finally {
      setLoading(false);
    }
  };

  if (trackingDetails) {
    console.log(trackingDetails);
  }

  return (
    <WrapperComponent
      status={status}
      title="Book a Discovery Call:"
      description="Schedule your Discovery Call to discuss project details, starting from 48 hours after purchase"
      buttonLabel="Book a discovery call"
      buttonClassNames=""
      onClick={handleBookDiscoveryCall}
      loading={loading}
    />
  );
};

export default BookDiscoveryCall;
