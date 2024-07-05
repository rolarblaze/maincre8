"use client";
import { Fragment, useState } from "react";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/passwordValidation";
import Link from "next/link";
import { InputField, Button, SocialSignUp } from "@/components";
import { EyeIcon, Checked } from "@/public/icons";

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
    <Fragment>
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
          <div className="flex items-center gap-3 mb-3.5">
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
    </Fragment>
  );
}
