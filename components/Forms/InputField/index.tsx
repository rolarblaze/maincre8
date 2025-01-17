"use client";
import { ToolTipIcon } from "@/public/icons";
import React, { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";

interface InputFieldProps {
  label?: string;
  type: "text" | "password" | "email" | "number" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  error?: string | boolean;
  name?: string;
  tooltipText?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  onClick,
  icon,
  readOnly,
  disabled,
  onEnterPressed,
  classNames,
  isRequired,
  onInputIconClick,
  error,
  tooltipText,
  name,
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterPressed) {
      onEnterPressed();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.trim();

    // Only handle custom URL logic for the "url" input type
    if (type === "url") {
      const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/.*)?$/;

      if (urlPattern.test(input)) {
        // If the input doesn't start with 'http' or 'https', prepend 'https://'
        if (!/^https?:\/\//.test(input)) {
          input = "https://" + input;
        }
      }
    }

    setInputValue(input);

    // Call external onChange if provided
    if (onChange) {
      e.target.value = input; // Adjust the value before passing it to onChange
      onChange(e);
    }
  };

  return (
    <div className="flex w-full flex-col gap-1 text-left">
      <div className="flex items-center gap-2">
        {label && (
          <label className="text-sm font-medium text-grey900">
            {label} {isRequired && <span className="text-primary400">*</span>}{" "}
          </label>
        )}
        {tooltipText && (
          <div
            className="relative max-w-max cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <ToolTipIcon />
            {showTooltip && (
              <div className="tooltip">
                <span className="tooltip-text leading-[1.3125rem] text-grey500">
                  {tooltipText}
                </span>
                <div className="tooltip-arrow"></div>
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`flex items-center gap-3 rounded-md border border-grey300 p-4 ${classNames}`}
      >
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          onClick={onClick}
          readOnly={readOnly}
          disabled={disabled}
          className={`w-full text-sm text-grey900 outline-none ${
            readOnly ? "bg-grey200" : "bg-transparent"
          } ${disabled ? "cursor-not-allowed" : ""}`}
        />
        {icon && (
          <div
            className="cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onInputIconClick && onInputIconClick();
            }}
          >
            {icon}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
