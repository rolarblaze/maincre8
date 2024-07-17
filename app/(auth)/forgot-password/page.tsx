"use client";
import { Fragment, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputField, Button } from "@/components";
import { ConfirmIcon } from "@/public/icons";
import { AppDispatch, useAppDispatch, useAppSelector } from "@/redux/store";
import { forgotPassword } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";


const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email address is required"),
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
    const actionResult = await dispatch(forgotPassword({ email, callback_url }));
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
        const errorMessage = actionResult.error?.message || "An error occurred. Please try again.";
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
    <main className="flex flex-col gap-4 md:gap-8 text-center">
      {isSubmitted ? (
        <ConfirmForgotPassword />
      ) : (
        <div className=" flex flex-col gap-4 md:gap-8 max-w-[592px] mx-auto">
          <h3>Reset your account password</h3>
          <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
            <form className="w-full flex flex-col" onSubmit={formik.handleSubmit}>
              <InputField
                label="Email address"
                type="text"
                placeholder="Enter email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                error={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                classNames="mb-6"
              />
              <Button
                label="Reset password"
                isLoading={isLoading}
                type="submit"
                classNames="mt-4"
              />
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
