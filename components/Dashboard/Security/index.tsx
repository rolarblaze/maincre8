"use client";
import { Button, InputField } from "@/components";
import { EyeCloseIcon, Checked, Unchecked } from "@/public/icons";
import { addAlert } from "@/redux/alerts";
import { updatePassword } from "@/redux/auth/features";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/auth/passwordValidation";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const NewPasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string().required("New password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Security() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(
    passwordCriteria.map((criterion) => ({
      label: criterion.label,
      isValid: false,
    })),
  );

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: NewPasswordSchema,
    onSubmit: async (values) => {
      const payload = {
        new_password: values.newPassword,
      };

      const actionResult = await dispatch(updatePassword(payload));

      if (updatePassword.fulfilled.match(actionResult)) {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Password updated successfully",
            type: "success",
          }),
        );
      } else if (updatePassword.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.error?.message ||
          "Failed to update password. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          }),
        );
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    formik.setFieldValue("newPassword", newPassword);
    setPasswordValidation(validatePassword(newPassword));
  };

  const handleReset = () => {
    formik.resetForm();
    setPasswordValidation(
      passwordCriteria.map((criterion) => ({
        label: criterion.label,
        isValid: false,
      })),
    );
  };

  return (
    <div className="max-w-[740px] rounded-lg border-grey200 md:border md:p-6">
      <p className="text-lg font-semibold">Change password</p>
      <span className="mt-2 text-grey500 md:mt-1">
        Try changing your password regularly to make your account safer
      </span>
      <form onSubmit={formik.handleSubmit} className="mt-6">
        <InputField
          type="password"
          label="Current password"
          placeholder="Current password"
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          name="currentPassword"
          error={
            formik.touched.currentPassword && formik.errors.currentPassword
              ? formik.errors.currentPassword
              : ""
          }
          classNames="mb-6 p-4"
        />

        <InputField
          label="New password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your new password"
          value={formik.values.newPassword}
          onChange={handleNewPasswordChange}
          name="newPassword"
          icon={<EyeCloseIcon className="h-5 w-5" />}
          onInputIconClick={togglePasswordVisibility}
          error={
            formik.touched.newPassword && formik.errors.newPassword
              ? formik.errors.newPassword
              : ""
          }
        />
        <div className="mb-6 mt-4 flex grid-cols-3 flex-wrap gap-2 md:grid">
          {passwordCriteria.map((criterion, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full border-grey300 py-1 text-xs font-medium text-grey500 md:border md:px-2"
            >
              <div className="transition-transform duration-500 ease-in-out">
                {passwordValidation.some(
                  (v) => v.label === criterion.label && v.isValid,
                ) ? (
                  <Checked className="h-5 w-5" />
                ) : (
                  <Unchecked className="h-5 w-5" />
                )}
              </div>
              <span>{criterion.label}</span>
            </div>
          ))}
        </div>

        <InputField
          type={showPassword ? "text" : "password"}
          label="Confirm new password"
          placeholder="Confirm new password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          name="confirmPassword"
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
          classNames="mb-6 p-4"
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <Button
            label="Save changes"
            classNames="md:w-fit py-4 md:py-3 px-4"
            onClick={formik.handleSubmit}
            isLoading={isLoading}
          />
          <Button
            label="Reset changes"
            classNames="md:w-fit bg-transparent text-primary600 border border-primary400 py-4 md:py-3 px-4"
            onClick={handleReset}
          />
        </div>
      </form>
    </div>
  );
}
