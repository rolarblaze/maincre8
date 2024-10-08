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
      {/* Select field */}
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
          ) : getSelectedValue() && getSelectedValue() !== "" ? (
            getSelectedValue()
          ) : (
            <span className="text-sm text-grey400">{placeholder}</span>
          )}
          <AshArrowDown />
        </div>

        {/* Display select field options */}
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
                className="flex cursor-pointer items-center gap-1 px-6 py-[1.22rem] hover:bg-gray-100 text-grey900 font-medium"
              >
                {isCheckbox ? (
                  <div className="flex gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id={option.value.toString()}
                      checked={getSelectedValue()?.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="mr-2 h-5 w-5 cursor-pointer rounded-[3.33px] border-[1.25px] border-grey300 shadow-md shadow-white self-center"
                    />
                    <label htmlFor={option.value.toString()} className="cursor-pointer">
                      {option.label}
                    </label>
                  </div>
                ) : (
                  <span
                    onClick={() => handleOptionSelect(option.value)}
                    className="block w-full cursor-pointer"
                  >
                    {option.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Display errors */}
      {formik?.errors[name] && formik?.touched[name] && (
        <p className="mt-1 text-xs text-red-500">
          {formik.errors[name] as string}
        </p>
      )}
    </div>
  );
};

export default CustomDropdown;
