"use client";
import { ToolTipIcon } from "@/public/icons";
import React, { ReactNode, useState } from "react";

interface ControlledTextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  name: string;
  tooltipText?: string;
  error?: string | ReactNode | null;
  textAreaStyle?: string;
}

const Textarea: React.FC<ControlledTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  tooltipText,
  name,
  error = null,
  textAreaStyle,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div className="mb-1 flex items-center gap-2">
        <label htmlFor={id} className="block text-sm text-grey900">
          {label}
        </label>
        {tooltipText && (
          <div
            className="relative max-w-max cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <ToolTipIcon />
            {showTooltip && (
              <div className="tooltip">
                <span className="tooltip-text text-grey300">{tooltipText}</span>
                <div className="tooltip-arrow"></div>
              </div>
            )}
          </div>
        )}
      </div>
      <textarea
        id={id}
        name={name}
        className={`focus:none block w-full rounded-lg border border-gray-300 p-4 text-base placeholder-grey400 focus:outline-none ${textAreaStyle}`}
        placeholder={placeholder}
        rows={8}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></textarea>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
