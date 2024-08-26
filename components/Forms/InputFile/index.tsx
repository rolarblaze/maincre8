import { AttachIcon } from "@/public/icons";
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
  error?: string | boolean;
  name?: string;
  id?: string;
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
}: InputFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onFileChange?.(file);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hidden file input */}
      <input
        id={id}
        type={type}
        name={name}
        onChange={handleFileChange}
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
        className={`cursor-pointer px-4 py-[10px] text-white bg-grey200 rounded-xl flex gap-1 ${classNames}`}
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
