"use client";
import { ToolTipIcon } from "@/public/icons";
import React, { useState } from "react";

interface ControlledTextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
  name: string;

  tooltipText?: string;
}

const Textarea: React.FC<ControlledTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  tooltipText,
  name,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div className="flex gap-2 items-center mb-1">
        <label htmlFor={id} className="block text-sm text-grey900 ">
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
        required
        id={id}
        name={name}
        className="block w-full border border-gray-300 rounded-lg p-4 placeholder-grey400 text-base focus:outline-none focus:none"
        placeholder={placeholder}
        rows={8}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
