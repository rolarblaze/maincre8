"use client";
import { useState } from "react";
import Tabs from "@/components/Auth/Tabs";
import InputField from "@/components/Forms/InputField/InputField";
import Button from "@/components/Button";
import SocialSignUp from "@/components/Auth/SocialSignUp";
import EyeIcon from "../../../public/icons/eye.svg";
import Unchecked from "../../../public/icons/unchecked-checkbox.svg";
import Checked from "../../../public/icons/checked-checkbox.svg";
import {
  validatePassword,
  passwordCriteria,
} from "@/utils/helpers/passwordValidation";

export default function Signup() {
  const [activeTab, setActiveTab] = useState<string>("individual");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
      <h1>Create your account</h1>

      <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <form className="w-full flex flex-col gap-8">
          <section className="flex flex-col gap-4 md:gap-6">
            {activeTab === "individual" && (
              <div className="flex items-center gap-2">
                <InputField
                  label="First name"
                  type="text"
                  placeholder="Enter first name"
                  onChange={(e) => console.log(e.target.value)}
                  isRequired
                />
                <InputField
                  label="Last name"
                  type="text"
                  placeholder="Enter last name"
                  onChange={(e) => console.log(e.target.value)}
                  isRequired
                />
              </div>
            )}

            {activeTab === "business" && (
              <InputField
                label="Business name"
                type="text"
                placeholder="Enter business name"
                onChange={(e) => console.log(e.target.value)}
                isRequired
              />
            )}

            <InputField
              label="Email address"
              type="text"
              placeholder="Enter email address"
              onChange={(e) => console.log(e.target.value)}
              isRequired
            />

            <div className="flex flex-col gap-4">
              <InputField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
                icon={<EyeIcon className="w-5 h-5" />}
                onInputIconClick={togglePasswordVisibility}
                onEnterPressed={() => console.log("Enter pressed")}
                isRequired
              />

              <div className="flex items-center gap-2">
                {passwordValidation.map((criterion, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 py-1 px-2 rounded-full border border-grey300 text-xs md:text-sm text-grey500 font-medium"
                  >
                    <div className="transition-transform duration-500 ease-in-out">
                      {criterion.isValid ? (
                        <Checked className="w-5 h-5" />
                      ) : (
                        <Unchecked className="w-5 h-5" />
                      )}
                    </div>
                    <p>{criterion.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Button
            label="Create account"
            isLoading={isLoading}
            onClick={handleSubmit}
            classNames="mt-4"
          />
        </form>
      <SocialSignUp/>
      </section>

    </main>
  );
}
