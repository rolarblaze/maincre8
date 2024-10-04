import React, { useState } from "react";
import { AshArrowDown } from "@/public/icons";
import { twMerge } from "tailwind-merge";
import { FormikProps } from "formik"; // Import FormikProps for typing

interface Option {
  label: string;
  value: string | number;
}

interface CustomDropdownProps {
  name: string;
  label?: string;
  options: Option[];
  placeholder?: string;
  className?: string;
  optionStyles?: string;
  isCheckbox?: boolean;
  formik?: FormikProps<any>; // Make formik optional
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  name,
  label,
  options,
  placeholder = "Select type",
  className,
  optionStyles,
  isCheckbox = false, // Default to plain dropdown unless specified
  formik, // Optional Formik prop
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Adjust the state to handle either a single value or an array of values
  const [localValue, setLocalValue] = useState<string | Array<string | number>>(
    isCheckbox ? [] : "",
  );

  const handleToggle = () => setIsOpen(!isOpen);

  const getSelectedValue = () => {
    if (formik) {
      return formik.values[name]; // Use formik value if available
    }
    return localValue; // Fallback to local state
  };

  const handleCheckboxChange = (optionValue: string | number) => {
    const currentValues = getSelectedValue() || [];

    const newValues = currentValues.includes(optionValue)
      ? currentValues.filter((value: string | number) => value !== optionValue)
      : [...currentValues, optionValue];

    if (formik) {
      formik.setFieldValue(name, newValues); // Use formik's setFieldValue if available
    } else {
      setLocalValue(newValues); // Fallback to local state as an array
    }
  };

  const handleOptionSelect = (optionValue: string | number) => {
    if (formik) {
      formik.setFieldValue(name, optionValue); // Use formik's setFieldValue for a single value
    } else {
      setLocalValue(optionValue as string); // Fallback to local state as a single value
    }
    setIsOpen(false);
  };

  return (
    <div className="text-grey900">
      {label && (
        <label
          htmlFor={name}
          className="mb-2 block text-sm font-medium text-grey900"
        >
          {label}
        </label>
      )}
      <div className={twMerge("relative", className)}>
        <div
          className="flex h-14 w-full cursor-pointer items-center justify-between rounded-lg border border-gray-300 pl-4 pr-10 text-sm"
          onClick={handleToggle}
        >
          {isCheckbox ? (
            getSelectedValue()?.length > 0 ? (
              options
                .filter((option) => getSelectedValue().includes(option.value))
                .map((option) => option.label)
                .join(", ")
            ) : (
              <span className="text-sm text-grey400">{placeholder}</span>
            )
          ) : (
            getSelectedValue() || (
              <span className="text-sm text-grey400">{placeholder}</span>
            )
          )}
          <AshArrowDown />
        </div>

        {isOpen && (
          <ul
            className={twMerge(
              "absolute left-0 z-10 w-full rounded-lg border border-gray-300 bg-white",
              optionStyles,
            )}
          >
            {options.map((option) => (
              <li
                key={option.value}
                className="flex cursor-pointer gap-1 items-center p-2 hover:bg-gray-100"
              >
                {isCheckbox ? (
                  <>
                    <input
                      type="checkbox"
                      id={option.value.toString()}
                      checked={getSelectedValue()?.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="mr-2 cursor-pointer w-[18px] h-[18px] border border-grey400"
                    />
                    <label htmlFor={option.value.toString()}>
                      {option.label}
                    </label>
                  </>
                ) : (
                  <span
                    onClick={() => handleOptionSelect(option.value)}
                    className="block w-full"
                  >
                    {option.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {formik?.errors[name] && formik?.touched[name] && (
        <p className="mt-1 text-xs text-red-500">
          {formik.errors[name] as string}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
