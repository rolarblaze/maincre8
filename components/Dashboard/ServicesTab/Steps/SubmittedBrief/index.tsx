"use client";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import WrapperComponent from "../Wrapper";
import { formatDate } from "@/helpers/formatDate";
import { handleProgressUpdate } from "@/helpers/progressHandler";
import { useEffect, useState } from "react";
import { updateProgress } from "@/redux/servicesTracker/tracker";
import { addAlert } from "@/redux/alerts";
import FileUploadModal from "@/components/FileUploadModal";
import { submitBriefForTracking } from "@/redux/servicesTracker/features";
import { useSearchParams } from "next/navigation";
import { SubmittedIcon } from "@/public/icons";

const SubmittedBrief = ({
  handleBriefSubmission,
}: {
  handleBriefSubmission?: () => void;
}) => {
  const searchParams = useSearchParams();
  const transId = searchParams.get("transactionId");

  const dispatch = useAppDispatch();

  const { trackingDetails } = useAppSelector((state) => state.services);
  const servicesData = useAppSelector((state) => state.services);
  const { trackingProgress } = useAppSelector((state) => state.tracker);

  const hasSubmittedBrief =
    trackingDetails?.brief_submitted == true ? "completed" : "inactive";
  const dateSubmitted = trackingDetails?.brief_submission_date
    ? formatDate(trackingDetails.brief_submission_date)
    : "Unknown date";

  const status = trackingProgress.SubmitBriefInProgress
    ? "inprogress"
    : hasSubmittedBrief;

  useEffect(() => {
    handleProgressUpdate(dispatch, trackingDetails);
  }, [dispatch, trackingDetails]);

  useEffect(() => {
    if (status === "completed") {
      dispatch(updateProgress({ BookDiscoveryCallInProgress: true }));
    }
  }, [dispatch, status]);

  return (
    <>
      <WrapperComponent
        status={status}
        title="Submit a Brief"
        description="Kickstart your project by submitting a detailed brief immediately"
        buttonLabel="Submit a brief"
        buttonClassNames=""
        showDate={true}
        completedState={
          <a
            href={trackingDetails?.brief_attachment_link}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex gap-2"
          >
            <p className="text-sm text-primary500">Brief submitted</p>{" "}
            <SubmittedIcon />
          </a>
        }
        dateBought={dateSubmitted}
        onClick={handleBriefSubmission}
      />
    </>
  );
};

export default SubmittedBrief;
