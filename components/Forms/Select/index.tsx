import { ArrowDown } from "@/public/icons";
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface ControlledSelectProps {
  label: string;
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  name: string;
  placeholder?: string;
}

const ControlledSelect: React.FC<ControlledSelectProps> = ({
  label,
  options,
  value,
  onChange,
  id,
  name,
  placeholder = "Select type",
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-gray-900 mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          required
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full border border-gray-300 rounded-lg h-14 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 custom-select"
        >
          {placeholder && (
            <option disabled hidden value="">
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
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default ControlledSelect;
