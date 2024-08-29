"use client";
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";

interface InputFileProps {
  label?: string;
  type: "file";
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
  setFieldValue: (field: string, value: File | null) => void;
  // touched?: boolean;
}

function InputFile({
  label,
  type,
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
  setFieldValue,
}: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setFieldValue(name, file);
    onFileChange?.(file);
  };
  return (
    <div className="flex gap-2">
      {/* Hidden file input */}
      <input
        id={id}
        type={type}
        name={name}
        onChange={(e) => handleFileChange(e, name as string)}
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
        className={`cursor-pointer px-4 py-[10px] text-white bg-grey200 rounded-xl flex gap-1 justify-center items-center ${classNames}`}
      >
        {icon}
        <span className="text-grey900 font-semibold">
          {selectedFile ? "Change File" : `${label}`}
        </span>
      </label>

      {/* Display file name */}
      {selectedFile && (
        <p className="mt-2 text-sm text-gray-500">{selectedFile.name}</p>
      )}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}

export default InputFile;
