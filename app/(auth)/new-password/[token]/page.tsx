"use client";
import { Button, InputField } from "@/components";
import { Checked, EyeIcon, Unchecked } from "@/public/icons";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/auth/passwordValidation";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { resetPassword } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";

const NewPasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

const NewPassword = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(
    passwordCriteria.map((criterion) => ({
      label: criterion.label,
      isValid: false,
    }))
  );
  const router = useRouter();
  const pathname = usePathname();
  const code = pathname.split("/").pop(); // Extract the last segment of the URL

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: NewPasswordSchema,
    onSubmit: async (values) => {
      if (code) {
        // Ensure code is not null
        await handleResetPassword(
          values.password,
          values.confirmPassword,
          code,
          dispatch
        );
      } else {
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: "Reset code is missing.",
            type: "error",
          })
        );
      }
    },
  });

  const handleResetPassword = async (
    password: string,
    confirmPassword: string,
    code: string,
    dispatch: AppDispatch
  ) => {
    const actionResult = await dispatch(
      resetPassword({ code, password, confirm_password: confirmPassword })
    );
    if (resetPassword.fulfilled.match(actionResult)) {
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: "Password has been reset successfully.",
          type: "success",
        })
      );
      router.push("/login");
    } else if (resetPassword.rejected.match(actionResult)) {
      if (actionResult.error) {
        const errorMessage =
          actionResult.error?.message || "An error occurred. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          })
        );
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    formik.setFieldValue("password", newPassword);
    setPasswordValidation(validatePassword(newPassword));
  };

  return (
    <>
      <div className=" flex flex-col gap-4 md:gap-8">
        <h1>Set your new password</h1>
        <section className=" border border-grey200 rounded-lg  p-5 md:p-10">
          <form
            className="w-full flex flex-col gap-4 md:gap-10"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col gap-3">

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
             <div className="grid grid-cols-2 gap-2">
                {passwordCriteria.map((criterion, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 py-1 px-2 rounded-full border border-grey300 text-xs  text-grey500 font-medium"
                  >
                    <div className="transition-transform duration-500 ease-in-out">
                      {passwordValidation.some((v) => v.label === criterion.label && v.isValid) ? (
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
            <InputField
              label="Confirm new password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm your new password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="confirmPassword"
              error={
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : ""
              }
            />
            <Button label="Submit" isLoading={isLoading} type="submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default NewPassword;
