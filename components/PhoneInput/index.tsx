"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { countryLocalPhoneLengths } from "./utils/countryCodesLength";

interface PhoneNumberInputProps {
  form?: any;
  name?: string;
  value: string;
  onChange?: (value: string) => void;
  label: string;
  placeholder?: string;
  formError?: string | boolean;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  form,
  name,
  value,
  onChange,
  label,
  placeholder,
  formError,
}) => {
  const [error, setError] = useState("");
  const [countryInfo, setCountryInfo] = useState<any>(null); // State to store the country info

  // Replace the handleChange with this function
  const handlePhoneChange = (phone: string, country: any) => {
    setCountryInfo(country); // Store country info when phone number changes

    const countryCode = country?.countryCode;
    const countryCodeLength = country?.dialCode?.length || 0; // Get the length of the country code
    const localPhoneLength = phone.length - countryCodeLength; // Subtract country code length from total input length
    const requiredLocalLength = countryLocalPhoneLengths[countryCode];
    const requiredPhoneLength = countryCodeLength + requiredLocalLength;

    // Validate local phone number length
    if (requiredLocalLength && localPhoneLength > requiredLocalLength) {
      form.setFieldError(
        name,
        `Local phone number must be ${requiredLocalLength} digits long.`
      );
      // setError(
      //   `Local phone number must be ${requiredLocalLength} digits long.`
      // );
      return;
    }

    // Set error if local phone number doesn't match the required length
    if (requiredLocalLength && localPhoneLength !== requiredLocalLength) {
      form.setFieldError(
        name,
        `Local phone number must be ${requiredLocalLength} digits long.`
      );
      return;
      // setError(
      //   `Local phone number must be ${requiredLocalLength} digits long.`
      // );
    }
    // else {
    //   setError(""); // Clear error if length is valid
    // }

    // Set error if total phone length does not match the total required length
    if (phone.length > requiredPhoneLength) {
      form.setFieldError(
        name,
        `Total phone number must be ${requiredPhoneLength} digits long.`
      );
      return;
    }

    form.setFieldValue(name, phone);

    if (onChange) {
      onChange(phone);
    }
  };

  // Add the handleKeyPress function to prevent additional inputs
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!countryInfo) return; // Exit if country info is not available

    const countryCodeLength = countryInfo?.dialCode?.length || 0;
    const countryCode = countryInfo?.countryCode;
    const requiredLocalLength = countryLocalPhoneLengths[countryCode];
    const localPhoneLength = value.length - countryCodeLength;

    // Prevent typing more local digits than allowed
    if (
      requiredLocalLength &&
      localPhoneLength >= requiredLocalLength &&
      e.key !== "Backspace" &&
      e.key !== "Delete"
    ) {
      e.preventDefault();
    }
  };

  return (
    <div>
      {label && <label className="text-sm text-grey900">{label}</label>}
      <PhoneInput
        country={"ng"}
        value={value}
        onChange={handlePhoneChange}
        onKeyDown={handleKeyPress}
        containerClass="phone-input-container"
        placeholder={placeholder || "Enter Phone Number"}
        inputClass="phone-input"
        buttonClass="phone-input-button"
        dropdownClass="phone-input-dropdown"
        dropdownStyle={{ zIndex: 999 }}
        buttonStyle={{ display: "flex", alignItems: "center" }}
      />
      {/* {error && <div className="text-red-500 text-xs mt-1">{error}</div>} */}
      {formError && (
        <div className="text-red-500 text-xs mt-1">{formError}</div>
      )}
    </div>
  );
};

export default PhoneNumberInput;
