import React, { useRef } from "react";
import Modal from "../UI/Modals/CustomModal";
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
  onUpload: (file: File) => void;
  status: "idle" | "error" | "progress" | "success";
  progress?: number;
  fileName?: string;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({
  isOpen,
  onClose,
  onUpload,
  status,
  progress,
  fileName,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {status === "idle" && <FileUploadContent onUpload={onUpload} />}
      {status === "error" && <ErrorMessage />}
      {status === "progress" && (
        <ProgressMessage progress={progress} fileName={fileName} />
      )}
      {status === "success" && <SuccessMessage fileName={fileName} />}
    </Modal>
  );
};

interface FileUploadContentProps {
  onUpload: (file: File) => void;
}

const FileUploadContent: React.FC<FileUploadContentProps> = ({ onUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      onUpload(file);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex max-w-[400px] flex-col items-center gap-4 rounded-2xl border border-dashed bg-white border-grey300 px-6 py-7">
      <FileUploadIcon />
      <div onClick={handleClick} className="cursor-pointer">
        <p className="flex justify-center gap-1 text-sm">
          <span className="text-primary500">Click to upload</span>
          <span className="text-grey600">or drag and drop</span>
        </p>
        <p className="text-center text-xs text-grey400">
          PDF OR DOCX (max. 5MB)
        </p>
      </div>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button
        className="rounded-md bg-[#EB5017] px-4 py-2 text-white"
        onClick={handleClick}
      >
        Browse Files
      </button>
    </div>
  );
};

const ErrorMessage = () => (
  <div className="border-errorRed flex max-w-[400px] flex-col items-center gap-4 rounded-2xl border border-dashed px-6 py-12">
    <ErrorIcon />
    <div className="flex flex-col items-center gap-1">
      <p className="text-center text-xs font-semibold text-grey800">
        PDF OR DOCX (max. 5MB)
      </p>
      <p className="text-xs text-grey400">Error Message</p>
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
  <div className="border-progressPurple flex max-w-[400px] flex-col items-center gap-4 rounded-2xl border border-dashed px-6 py-12">
    <PDFIcon />
    <div>
      <p className="flex flex-col gap-2 font-semibold text-grey400">
        {progress}%
      </p>
    </div>
    <div className="flex flex-col items-center gap-1">
      <p className="text-center text-xs font-semibold text-grey800">
        PDF OR DOCX (max. 5MB)
      </p>
      <p className="text-xs text-grey400">{fileName}</p>
    </div>
  </div>
);

interface SuccessMessageProps {
  fileName?: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ fileName }) => (
  <div className="border-successGreen flex max-w-[400px] flex-col items-center gap-4 rounded-2xl border border-dashed px-6 py-12">
    <SuccessIcon />
    <div className="flex flex-col items-center gap-1">
      <p className="text-center text-xs font-semibold text-grey800">
        PDF OR DOCX (max. 5MB)
      </p>
      <p className="text-xs text-grey400">{fileName}</p>
    </div>
    <button className="flex gap-2 bg-transparent px-4 py-2">
      <ModalTrashIcon />
      <span className="text-sm font-semibold text-grey400">Clear Upload</span>
    </button>
  </div>
);

export default FileUploadModal;
