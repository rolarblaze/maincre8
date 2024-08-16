"use client";
import React, { ChangeEvent, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CheckboxFieldProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  error?: string;
  name?: string;
  tooltipText?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  checked,
  onChange,
  disabled,
  className,
  error,
  tooltipText,
  name,
}) => {
  return (
    <div className={twMerge(`flex items-start gap-2`, className)}>
      <input
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
        disabled={disabled}
        className={`mt-1 cursor-pointer ${
          disabled ? "cursor-not-allowed" : ""
        }`}
      />
      <div className="flex flex-col">
        {label && <label className="text-sm text-grey900">{label}</label>}
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </div>
  );
};

export default CheckboxField;
