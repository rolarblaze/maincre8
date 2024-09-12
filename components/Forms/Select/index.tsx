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
  error?: string;
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
          className="block text-sm text-gray-900 font-medium mb-2"
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
          className="block w-full border border-gray-300 rounded-lg h-14 pl-4 pr-10 appearance-none focus:outline-none  custom-select"
        >
          {placeholder && (
            <option
              disabled
              hidden
              value=""
              className="text-sm bg-red-500 text-grey400"
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
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default ControlledSelect;
