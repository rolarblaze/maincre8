"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  label,
  placeholder,
}) => {
  const [error, setError] = useState("");
  const [countryInfo, setCountryInfo] = useState<any>(null); // State to store the country info

  // Country codes with their respective local phone number lengths (excluding country code)
  const countryLocalPhoneLengths: { [key: string]: number } = {
    us: 10, // Local number is 10 digits
    ca: 10,
    gb: 10,
    au: 9,
    de: 11,
    fr: 9,
    it: 10,
    es: 9,
    in: 10,
    cn: 11,
    br: 10,
    ng: 10, // Nigeria's local number is 10 digits
    za: 9,
    jp: 10,
    mx: 10,
    ru: 10,
    ar: 10,
    eg: 10,
    sa: 9,
    kr: 10,
    id: 11,
    tr: 10,
    ph: 10,
    pk: 10,
  };

  // Replace the handleChange with this function
  const handlePhoneChange = (phone: string, country: any) => {
    setCountryInfo(country); // Store country info when phone number changes

    const countryCode = country?.countryCode;
    const countryCodeLength = country?.dialCode?.length || 0; // Get the length of the country code
    const localPhoneLength = phone.length - countryCodeLength; // Subtract country code length from total input length
    const requiredLocalLength = countryLocalPhoneLengths[countryCode];

    // Validate local phone number length
    if (requiredLocalLength && localPhoneLength > requiredLocalLength) {
      setError(
        `Local phone number must be ${requiredLocalLength} digits long.`
      );
      return;
    }

    // Set error if local phone number doesn't match the required length
    if (requiredLocalLength && localPhoneLength !== requiredLocalLength) {
      setError(
        `Local phone number must be ${requiredLocalLength} digits long.`
      );
    } else {
      setError(""); // Clear error if length is valid
    }

    onChange(phone);
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
      {error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
};

export default PhoneNumberInput;
