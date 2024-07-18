"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
  label,
}) => {
  const handleChange = (phone: string) => {
    onChange(phone);
  };

  return (
    <div>
      {label && <label className="text-sm text-grey900">{label}</label>}
      <PhoneInput
        country={"ng"}
        value={value}
        onChange={handleChange}
        containerClass="phone-input-container"
        placeholder="Enter phone number"
        inputClass="phone-input"
        buttonClass="phone-input-button"
        dropdownClass="phone-input-dropdown"
        dropdownStyle={{ zIndex: 999 }}
        buttonStyle={{ display: "flex", alignItems: "center" }}
      />
    </div>
  );
};

export default PhoneNumberInput;
