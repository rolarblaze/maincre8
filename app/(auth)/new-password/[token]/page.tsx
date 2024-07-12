"use client";
import { Button, InputField } from "@/components";
import { EyeIcon } from "@/public/icons";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/auth/passwordValidation";
import React, { useState } from "react";

const NewPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(
    passwordCriteria.map((criterion) => ({
      label: criterion.label,
      isValid: false,
    }))
  );

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValidation(validatePassword(newPassword));
  };

  return (
    <>
      <div className=" flex flex-col gap-4 md:gap-8">
        <h1>Set your new password</h1>
        <section className=" border border-grey200 rounded-lg  p-5 md:p-10">
          <form className="w-full flex flex-col gap-4 md:gap-10">
            {/* so it follows the criteria for login */}
            <InputField
              label="New password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={password}
              onChange={handlePasswordChange}
              icon={<EyeIcon className="w-5 h-5" />}
              onInputIconClick={togglePasswordVisibility}
              onEnterPressed={() => console.log("Enter pressed")}
            />
            <InputField
              label="Confirm new password"
              type="text"
              placeholder="Confirm your new password"
              onChange={(e) => console.log(e.target.value)}
            />
            <Button
              label="Submit"
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </form>
        </section>
      </div>
    </>
  );
};

export default NewPassword;
