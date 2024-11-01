import React, { useEffect, useRef, useState } from "react";
import { AshArrowDown } from "@/public/icons";
import { twMerge } from "tailwind-merge";
import { FormikProps } from "formik"; // Import FormikProps for typing
import { motion } from "framer-motion"; // Import motion from framer-motion

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
  const dropdownRef = useRef<HTMLDivElement>(null); // Add ref for the dropdown

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

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false); // Close dropdown if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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
      <div ref={dropdownRef} className={twMerge("relative", className)}>
        <div className="flex h-14 w-full items-center justify-between rounded-lg border border-gray-300 pl-4 pr-10 text-sm">
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
          <button
            className="w-fit border border-none p-0"
            onClick={handleToggle}
            type="button"
          >
            <AshArrowDown />
          </button>
        </div>

        {/* Display select field options */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={twMerge(
            `absolute left-0 z-10 w-full overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg`,
            optionStyles,
          )}
          style={{ overflow: "hidden" }}
        >
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className="flex cursor-pointer items-center gap-1 px-6 py-[1.22rem] font-medium text-grey900 hover:bg-gray-100"
              >
                {isCheckbox ? (
                  <div className="flex cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      id={option.value.toString()}
                      checked={getSelectedValue()?.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="mr-2 h-5 w-5 cursor-pointer self-center rounded-[3.33px] border-[1.25px] border-grey300 shadow-md shadow-white"
                    />
                    <label
                      htmlFor={option.value.toString()}
                      className="cursor-pointer text-sm"
                    >
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
        </motion.div>
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
