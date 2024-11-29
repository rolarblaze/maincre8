"use client";
import { Button, InputField } from "@/components";
import {
  EyeOpenIcon,
  EyeCloseIcon,
  PasswordMatchIcon,
  PasswordNoMatchIcon,
} from "@/public/icons";
import {
  passwordCriteria,
  validatePassword,
} from "@/utils/helpers/auth/passwordValidation";
import React, { Fragment, useState } from "react";
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
    <Fragment>
      <h3 className="font-semibold text-[32px] leading-7 text-[#101928]">
        Set your new password
      </h3>
      <form onSubmit={formik.handleSubmit} className="mt-5 space-y-5">
        <InputField
          label="New password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter new password"
          value={formik.values.password}
          onChange={handlePasswordChange}
          icon={
            showPassword ? (
              <EyeOpenIcon className="h-5 w-5" />
            ) : (
              <EyeCloseIcon className="h-5 w-5" />
            )
          }
          onInputIconClick={togglePasswordVisibility}
          onEnterPressed={formik.handleSubmit}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : ""
          }
        />
        <div className="-mt-5 center flex-wrap gap-2">
          {passwordCriteria.map((criterion, index) => {
            return (
              <div
                key={criterion.label}
                className="px-2 py-1 center gap-1 bg-[#F0F2F5] rounded-lg border border-[#D0D5DD]"
              >
                <div className="size-3">
                  {passwordValidation.some(
                    (v) => v.label === criterion.label && v.isValid
                  ) ? (
                    <div className="size-3 center">
                      <PasswordMatchIcon />
                    </div>
                  ) : (
                    <div className="size-3 center">
                      <PasswordNoMatchIcon />
                    </div>
                  )}
                </div>

                {/* <div className="size-3 bg-slate-300"></div> */}
                <p className="font-medium text-nowrap text-sm leading-5 text-[#98A2B3]">
                  {criterion.label}
                </p>
              </div>
            );
          })}
        </div>

        <InputField
          label="Confirm new password"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm your new password"
          value={formik.values.confirmPassword}
          icon={
            showPassword ? (
              <EyeOpenIcon className="h-5 w-5" />
            ) : (
              <EyeCloseIcon className="h-5 w-5" />
            )
          }
          onInputIconClick={togglePasswordVisibility}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="confirmPassword"
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""
          }
        />
        <Button
          label="Confirm password"
          isLoading={isLoading}
          type="submit"
          classNames="text-white font-semibold"
        />
      </form>

      <Button
        label="Resend code"
        classNames="p-2 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
      />
    </Fragment>
  );
};

export default NewPassword;
