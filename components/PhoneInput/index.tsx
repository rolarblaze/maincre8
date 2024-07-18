"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneNumberInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (phone: string) => {
    onChange(phone);
  };

  return (
    <div>
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
      {/* {value && !validatePhoneNumber(value) && (
        <p style={{ color: "red" }}>Invalid phone number</p>
      )} */}
    </div>
  );
};

export default PhoneNumberInput;
