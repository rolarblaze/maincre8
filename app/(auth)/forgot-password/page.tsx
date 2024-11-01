"use client";
import { Fragment, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputField, Button } from "@/components";
import { ConfirmIcon } from "@/public/icons";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { forgotPassword } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";
import Link from "next/link";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email address is required"),
});

function ConfirmForgotPassword() {
  return (
    <>
      <h1 className="text-2xl md:text-4xl">
        Check your email for password reset link
      </h1>
      <div className="w-full  border border-grey200 rounded-lg p-10 max-w-[592px] mx-auto">
        <div className="border border-grey200 h-[48px] rounded flex items-center gap-3">
          {/* the ml should be 23px tho  */}
          <div className="w-1.5 h-12 bg-primary700 rounded-tl-md rounded-bl-md relative right-1.5" />
          <ConfirmIcon />
          <p className="text-sm font-semibold text-grey900">
            Check your email for password reset link
          </p>
        </div>
      </div>
    </>
  );
}

export default function ForgotPassword() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: async (values) => {
      await handleForgotPassword(values.email, dispatch);
    },
  });

  const handleForgotPassword = async (email: string, dispatch: AppDispatch) => {
    let callback_url = window.location.origin;
    if (!callback_url.endsWith("/")) {
      callback_url += "/";
    }
    callback_url += "new-password/";
    const actionResult = await dispatch(
      forgotPassword({ email, callback_url })
    );
    if (forgotPassword.fulfilled.match(actionResult)) {
      dispatch(
        addAlert({
          id: "",
          headText: "Success",
          subText: "Check your email for password reset link.",
          type: "success",
        })
      );
      setIsSubmitted(true);
    } else if (forgotPassword.rejected.match(actionResult)) {
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

  return (
    <Fragment>
      {isSubmitted ? (
        <ConfirmForgotPassword />
      ) : (
        <Fragment>
          {" "}
          <h3 className="font-semibold text-[32px] leading-7 text-[#101928]">
            Reset your password
          </h3>
          <p className="font-normal text-base leading-6 text-[#667185]">
            We will send you a link to set a new password
          </p>
          <form className="mt-5 space-y-5" onSubmit={formik.handleSubmit}>
            <InputField
              label="Email address"
              type="text"
              placeholder="Enter email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              error={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
            />
            <Button
              label="Reset password"
              isLoading={isLoading}
              type="submit"
              classNames="text-sm text-white font-semibold"
            />
          </form>
          <div className="center -mt-2">
            <Link
              href="/login"
              className="p-2 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
            >
              Back to Login
            </Link>
          </div>{" "}
        </Fragment>
      )}
    </Fragment>
  );
}
