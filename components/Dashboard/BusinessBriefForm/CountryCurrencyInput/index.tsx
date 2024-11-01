import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { currencyLabels } from "./currencyLabels";
import { DropdownSelect } from "@/components";

// Define available values for currency
// const values = ["10", "20", "50", "100", "200"];

type Option = {
  label: string;
  value: string | number;
};

type CountryCurrencyInputProps = {
  form: any;
  currencyValueOptions: Option[];
  label: string;
  value: string | undefined;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
  currencyTypeStyles?: string;
  currencyValueStyles?: string;
  flagInputName?: string;
};

const CountryCurrencyInput = ({
  form,
  currencyValueOptions,
  label,
  error,
  onChange,
  id,
  name,
  className,
  currencyValueStyles,
  currencyTypeStyles,
  placeholder = "Select type",
  flagInputName,
}: CountryCurrencyInputProps) => {
  const handleCountryChange = (countryCode: string) => {
    const currencyCode =
      currencyLabels[countryCode as keyof typeof currencyLabels];
    // form.setFieldValue("countryCode", countryCode);
    form.setFieldValue(flagInputName, currencyCode);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    // Update the Formik field value
    form.setFieldValue(name, value);

    // Call the onChange prop if it's provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${className}`}>
      <label
        htmlFor={id}
        className="block text-sm text-gray-900 font-medium mb-2"
      >
        {label}
      </label>
      <div className={`flex space-x-4`}>
        {/* Country and Currency Dropdown with Flags */}
        <div className={`max-w-[200px] rounded-lg ${currencyTypeStyles}`}>
          <ReactFlagsSelect
            countries={Object.keys(currencyLabels)} // Limit to relevant countries
            customLabels={currencyLabels} // Add custom labels for currencies
            onSelect={handleCountryChange}
            selected={form.values.countryCode} // Bind Formik values
            placeholder="NGN"
            searchable
            selectButtonClassName="h-14 rounded-lg"
            className="rounded-lg"
          />
        </div>

        {/* Currency Value Dropdown */}
        <div className={`w-full`}>
          <DropdownSelect
            id={id}
            name={name}
            placeholder={placeholder}
            options={currencyValueOptions}
            value={form.values[name] || ""} // Ensure it's bound to Formik
            onChange={handleValueChange}
            error={error}
            className={currencyValueStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default CountryCurrencyInput;
