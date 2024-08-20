import React from "react";
import Modal from "../Modals/CustomModal";
import {
  FileUploadIcon,
  PDFIcon,
  ErrorIcon,
  TryAgainIcon,
  SuccessIcon,
} from "@/public/svgs";
import ModalTrashIcon from "@/public/svgs/ModalThrash";

interface FileUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: "idle" | "error" | "progress" | "success";
  progress?: number;
  fileName?: string;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({
  isOpen,
  onClose,
  status,
  progress,
  fileName,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {status === "idle" && <FileUploadContent />}
      {status === "error" && <ErrorMessage />}
      {status === "progress" && (
        <ProgressMessage progress={progress} fileName={fileName} />
      )}
      {status === "success" && <SuccessMessage fileName={fileName} />}
    </Modal>
  );
};

const FileUploadContent = () => (
  <div className="flex flex-col items-center gap-4 rounded-2xl border border-grey300 border-dashed py-7 px-6 max-w-[400px]">
    <FileUploadIcon />
    <div>
      <p className="flex gap-1 text-sm justify-center">
        <span className="text-primary500">Click to upload</span>
        <span className="text-grey600">or drag and drop</span>
      </p>
      <p className="text-grey400 text-xs text-center">PDF OR DOCX (max. 5MB)</p>
    </div>
    <div className="flex gap-2 w-full justify-center">
      <hr className="border-t-[1.5px] border-grey100 w-1/2 self-center" />
      <p className="text-grey400 text-xs">OR</p>
      <hr className="border-t-[1.5px] border-grey100 w-1/2  self-center" />
    </div>
    <button className="text-white bg-customOrange rounded-md px-4 py-2">
      Browse Files
    </button>
  </div>
);

const ErrorMessage = () => (
  <div className="flex flex-col items-center gap-4 rounded-2xl border border-errorRed border-dashed py-12 px-6 max-w-[400px]">
    <ErrorIcon />
    <div className="flex flex-col gap-1 items-center">
      <p className="text-grey800 text-xs text-center font-semibold">
        PDF OR DOCX (max. 5MB)
      </p>
      <p className="text-grey400 text-xs">Error Message</p>
    </div>
    <button className="flex gap-2 bg-transparent px-4 py-2">
      <TryAgainIcon />
      <span className="text-tryAgainColor text-sm font-semibold">
        Try again
      </span>
    </button>
  </div>
);

interface ProgressMessageProps {
  progress?: number;
  fileName?: string;
}

const ProgressMessage: React.FC<ProgressMessageProps> = ({
  progress,
  fileName,
}) => (
  <div className="flex flex-col items-center gap-4 rounded-2xl border border-progressPurple border-dashed py-12 px-6 max-w-[400px]">
    <PDFIcon />
    <div>
      <p className="text-grey400 font-semibold flex flex-col gap-2">
        {progress}%
      </p>
    </div>
    <div className="flex flex-col gap-1 items-center">
      <p className="text-grey800 text-xs text-center font-semibold">
        PDF OR DOCX (max. 5MB)
      </p>
      <p className="text-grey400 text-xs">{fileName}</p>
    </div>
  </div>
);

interface SuccessMessageProps {
  fileName?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ fileName }) => (
  <div className="flex flex-col items-center gap-4 rounded-2xl border border-successGreen border-dashed py-12 px-6 max-w-[400px]">
    <SuccessIcon />
    <div className="flex flex-col gap-1 items-center">
      <p className="text-grey800 text-xs text-center font-semibold">
        PDF OR DOCX (max. 5MB)
      </p>
      <p className="text-grey400 text-xs">{fileName}</p>
    </div>
    <button className="flex gap-2 bg-transparent px-4 py-2">
      <ModalTrashIcon />
      <span className="text-grey400 text-sm font-semibold">Clear Upload</span>
    </button>
  </div>
);

export default FileUploadModal;
