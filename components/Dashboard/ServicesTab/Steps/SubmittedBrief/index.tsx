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

const SubmittedBrief = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileAttachment, setFileAttachment] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<
    "idle" | "error" | "progress" | "success"
  >("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const { trackingDetails, loading } = useAppSelector(
    (state) => state.services
  ); // Ensure uploadBrief is not destructured here
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
    if (status == "completed") {
      dispatch(updateProgress({ BookDiscoveryCallInProgress: true }));
    }
  }, [dispatch, hasSubmittedBrief]);

  const handleUploadedBrief = () => {
    setIsModalOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    setModalStatus("progress");
    dispatch(submitBriefForTracking({ file, id: 1 })) // Ensure correct payload is passed
      .unwrap()
      .then((response) => {
        setFileAttachment(response.file_link);
        setModalStatus("success");
      })
      .catch((error) => {
        setUploadError(error?.message);
        setModalStatus("error");
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: error?.message,
            type: "error",
          })
        );
        console.error("Error uploading file:", error);
      });
  };

  return (
    <>
      <WrapperComponent
        status={status}
        title="Submit a Brief"
        description="Kickstart your project by submitting a detailed brief immediately"
        buttonLabel="Upload a brief"
        buttonClassNames=""
        showDate={true}
        dateBought={dateSubmitted}
        onClick={handleUploadedBrief}
      />
      <FileUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={modalStatus}
        progress={uploadProgress}
        fileName={selectedFile?.name}
      />
    </>
  );
};

export default SubmittedBrief;
