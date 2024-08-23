"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect, useState, useMemo } from "react";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import { bookOffBoardingCall } from "@/redux/servicesTracker/features";
import { useSearchParams } from "next/navigation";
import { addAlert } from "@/redux/alerts";

const BookOffboardingCall = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const transId = searchParams.get("transactionId");
  const { trackingDetails } = useAppSelector((state) => state.services);

  // State to manage loading
  const [loading, setLoading] = useState(false);

  // Status calculation based on provided conditions
  const status = useMemo(() => {
    const currentTime = new Date();
    const offBoardingEndTime = trackingDetails?.off_boarding_meeting_end_time
      ? new Date(trackingDetails.off_boarding_meeting_end_time)
      : null;

    if (
      trackingDetails?.milestone_tracking_completed &&
      !trackingDetails?.offboarding_call_booked
    ) {
      return "inprogress";
    } else if (
      trackingDetails?.offboarding_call_booked &&
      offBoardingEndTime &&
      currentTime > offBoardingEndTime
    ) {
      return "completed";
    } else {
      return "inactive";
    }
  }, [trackingDetails]);

  // Update progress state
  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  // Set next step to inprogress
  useEffect(() => {
    if (
      status === "completed" &&
      trackingDetails?.offboarding_call_booked === true
    ) {
      dispatch(updateProgress({ OffboardingCallInProgress: true }));
    }
  }, [dispatch, status]);

  const handleBookDiscoveryCall = async () => {
    setLoading(true);

    try {
      const actionResult = await dispatch(bookOffBoardingCall(Number(transId)));
      if (bookOffBoardingCall.fulfilled.match(actionResult)) {
        console.log(actionResult);
        const { detail, booking_link } = actionResult.payload;
        window.open(booking_link, "_blank");
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: detail,
            type: "success",
          })
        );
      } else if (bookOffBoardingCall.rejected.match(actionResult)) {
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

  return (
    <WrapperComponent
      status={status}
      title="Book Offboarding Call"
      description="Schedule an offboarding call to review the project"
      buttonLabel="Book offboarding call"
      buttonClassNames=""
      onClick={handleBookDiscoveryCall}
      loading={loading}
      completedState={<span className="text-primary500">Completed</span>}
    />
  );
};

export default BookOffboardingCall;
