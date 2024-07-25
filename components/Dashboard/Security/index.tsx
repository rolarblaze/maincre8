"use client";
import { Button } from "@/components";
import InputField from "@/components/Forms/InputField";
import { EyeIcon, Checked, Unchecked } from "@/public/icons";
import { addAlert } from "@/redux/alerts";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/auth/passwordValidation";

import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const NewPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Security() {
  const [firstName, setFirstName] = useState("");

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: NewPasswordSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(
    passwordCriteria.map((criterion) => ({
      label: criterion.label,
      isValid: false,
    }))
  );

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    formik.setFieldValue("password", newPassword);
    setPasswordValidation(validatePassword(newPassword));
  };

  return (
    <div className="border border-grey200 p-6 rounded-lg  max-w-[740px]">
      <p className="text-lg font-semibold">Change password</p>
      <span className="text-grey500 mt-1">
        Try changing your password regularly to make your account safer
      </span>
      <form action="" className="mt-6">
        <InputField
          type="text"
          label="Current password"
          placeholder="Current"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          classNames="mb-6"
        />

        <InputField
          label="New password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your new password"
          value={formik.values.password}
          onChange={handlePasswordChange}
          icon={<EyeIcon className="w-5 h-5" />}
          onInputIconClick={togglePasswordVisibility}
          onEnterPressed={formik.handleSubmit}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />
        <div className="grid grid-cols-3 gap-2 mt-4 mb-6">
          {passwordCriteria.map((criterion, index) => (
            <div
              key={index}
              className="flex items-center gap-2 py-1 px-2 rounded-full border border-grey300 text-xs  text-grey500 font-medium"
            >
              <div className="transition-transform duration-500 ease-in-out">
                {passwordValidation.some(
                  (v) => v.label === criterion.label && v.isValid
                ) ? (
                  <Checked className="w-5 h-5" />
                ) : (
                  <Unchecked className="w-5 h-5" />
                )}
              </div>
              <span>{criterion.label}</span>
            </div>
          ))}
        </div>

        <InputField
          type="text"
          label="Confirm new password"
          placeholder="Confirm new password"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          classNames="mb-6"
        />

        <div className="flex gap-4">
          <Button label="Save changes" classNames=" w-fit py-3 px-4" />
          <Button
            label="Reset changes"
            classNames=" w-fit bg-transparent text-primary600 border border-primary400  py-3 px-4"
          />
        </div>
      </form>
    </div>
  );
}
