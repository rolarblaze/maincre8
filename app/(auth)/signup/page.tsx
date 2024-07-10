"use client";
import { Fragment, useState } from "react";
import {
  validatePassword,
  passwordCriteria,
} from "@/utils/helpers/passwordValidation";
import { Tabs, InputField, Button, SocialSignUp } from "@/components";
import { Checked, EyeIcon, Unchecked } from "@/public/icons";

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
    <Fragment>
      <h3>Create your account</h3>

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
                />
                <InputField
                  label="Last name"
                  type="text"
                  placeholder="Enter last name"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
            )}

            {activeTab === "business" && (
              <InputField
                label="Business name"
                type="text"
                placeholder="Enter business name"
                onChange={(e) => console.log(e.target.value)}
              />
            )}

            <InputField
              label="Email address"
              type="text"
              placeholder="Enter email address"
              onChange={(e) => console.log(e.target.value)}
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
        <SocialSignUp />
      </section>
    </Fragment>
  );
}
