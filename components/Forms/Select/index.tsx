import { AshArrowDown } from "@/public/icons";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Option {
  label: string;
  value: string | number;
}

interface ControlledSelectProps {
  label?: string;
  options: Option[];
  value: string | undefined;
  error?: string | boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  label,
  options,
  value,
  error,
  onChange,
  id,
  name,
  className,
  placeholder = "Select type",
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <div className={twMerge("relative", className)}>
        <select
          // required
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="custom-select block h-14 w-full appearance-none rounded-lg border border-gray-300 pl-4 pr-10 focus:outline-none"
        >
          {placeholder && (
            <option
              disabled
              hidden
              value=""
              className="bg-red-500 text-sm text-grey400"
            >
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <AshArrowDown />
        </div>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default ControlledSelect;
