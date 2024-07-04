"use client";
import { useState } from "react";

import InputField from "@/components/Forms/InputField/InputField";
import Button from "@/components/Button";
import SocialSignUp from "@/components/Auth/SocialSignUp";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/passwordValidation";
import EyeIcon from "../../../public/icons/eye.svg";
import Unchecked from "../../../public/icons/unchecked-checkbox.svg";
import Checked from "../../../public/icons/checked-checkbox.svg";
import Link from "next/link";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(
    passwordCriteria.map((criterion) => ({
      label: criterion.label,
      isValid: false,
    }))
  );

  //toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValidation(validatePassword(newPassword));
  };

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <main className="flex flex-col gap-4 md:gap-8 text-center mb-14 md:mb-20 ">
      <h1>Login to your account</h1>

      <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
        <form className="w-full flex flex-col">
          <InputField
            label="Email address"
            type="text"
            placeholder="Enter email address"
            onChange={(e) => console.log(e.target.value)}
            classNames="mb-6"
            isRequired
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            icon={<EyeIcon className="w-5 h-5" />}
            onInputIconClick={togglePasswordVisibility}
            onEnterPressed={() => console.log("Enter pressed")}
            classNames="mb-2"
            isRequired
          />

          <Link
            href="/forgot-password"
            className="text-grey500 text-base text-right"
          >
            Forgot password?
          </Link>
          <div className="flex items-center gap-3 mb-[14px]">
            <Checked />{" "}
            <span className="text-sm text-grey500">Remember me</span>
          </div>
          <Button
            label="login"
            isLoading={isLoading}
            onClick={handleSubmit}
            classNames="mt-4"
          />
        </form>
        <SocialSignUp isLogin />
      </section>
    </main>
  );
}
