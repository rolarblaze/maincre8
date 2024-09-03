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

const SubmittedBrief = () => {
  const searchParams = useSearchParams();
  const transId = searchParams.get("transactionId");

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileAttachment, setFileAttachment] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState<
    "idle" | "error" | "progress" | "success"
  >("idle");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const { trackingDetails } = useAppSelector((state) => state.services);
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
    if (transId)
      dispatch(submitBriefForTracking({ file, id: parseInt(transId) }))
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

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    handleFileUpload(file);
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
        completedState={
          <a
            href={trackingDetails?.brief_attachment_link}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex gap-2"
          >
            <p className="text-primary500 text-sm">Brief submitted</p>{" "}
            <SubmittedIcon />
          </a>
        }
        dateBought={dateSubmitted}
        onClick={handleUploadedBrief}
      />
      <FileUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        status={modalStatus}
        progress={uploadProgress}
        fileName={selectedFile?.name}
        onUpload={handleFileSelect}
      />
      {isModalOpen && (
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      )}
    </>
  );
};

export default SubmittedBrief;
