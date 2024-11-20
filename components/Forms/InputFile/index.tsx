"use client";
import Button from "@/components/Button";
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputFileProps {
  label?: string | React.ReactNode;
  // type?: "file";
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  icon?: ReactNode;
  readOnly?: boolean;
  disabled?: boolean;
  onEnterPressed?: () => void;
  classNames?: string;
  isRequired?: boolean;
  onInputIconClick?: () => void;
  onFileChange?: (file: File | null) => void;
  error?: string | boolean | ReactNode;
  name?: string;
  id: string;
  handleUpload?: (value: File | null) => void;
  // touched?: boolean;
  parentClassNames?: string;
  buttonStyles?: string;
  showUploadButton?: boolean;
  isLoading?: boolean;
}

function InputFile({
  label,
  // type,
  onBlur,
  onKeyDown,
  onClick,
  icon,
  readOnly,
  disabled,
  classNames,
  isRequired,
  onFileChange,
  error,
  name,
  id,
  handleUpload,
  parentClassNames,
  buttonStyles,
  showUploadButton = true,
  isLoading = false,
}: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    onFileChange?.(file);
  };
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-between gap-4 md:flex-row md:items-start",
        parentClassNames,
      )}
    >
      <div className="space-y-3">
        <div className="flex gap-2">
          {/* Hidden file input */}
          <input
            id={id}
            type={"file"}
            name={name}
            onChange={(e) => handleFileChange(e)}
            className="hidden"
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onClick={onClick}
            readOnly={readOnly}
            disabled={disabled}
          />

          {/* Custom styled button */}
          <label
            htmlFor={id}
            className={`flex cursor-pointer items-center justify-center gap-4 ${classNames}`}
          >
            {icon}
            <span className="font-semibold text-grey900">
              {selectedFile ? "Change File" : label}
            </span>
          </label>

          {/* Display file name or loader */}
          {isLoading ? (
            <p className="animate-pulse self-center text-sm text-gray-500">
              uploading file...
            </p>
          ) : (
            selectedFile && (
              <p className="self-center text-sm text-gray-500">
                {selectedFile.name}
              </p>
            )
          )}
        </div>
        {error && <p className="text-center text-xs text-red-500">{error}</p>}
      </div>

      {/* Button */}
      {showUploadButton && (
        <Button
          type="button"
          label="Upload"
          classNames={twMerge(
            "!text-white !bg-grey500 !w-auto !py-2 !px-8",
            buttonStyles,
          )}
          isLoading={isLoading}
          onClick={() => handleUpload && handleUpload(selectedFile)}
        />
      )}
    </div>
  );
}

export default InputFile;
