"use client";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Button } from "@/components";
import InputField from "@/components/Forms/InputField";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { resendVerificationCode, verifyUser } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const VerifyEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleResendCode = async () => {
    try {
      const actionResult = await dispatch(resendVerificationCode(email));
      if (resendVerificationCode.fulfilled.match(actionResult)) {
        const { message } = actionResult.payload;
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: message,
            type: "success",
          })
        );
      } else if (resendVerificationCode.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.error?.message ||
          "Failed to resend verification code. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          })
        );
      }
    } catch (error) {
      dispatch(
        addAlert({
          id: "",
          headText: "Error",
          subText: (error as Error)?.message || "Error resending verification code",
          type: "error",
          autoClose: true,
        })
      );
    }
  };

  const handleVerifyEmail = async (values: { otp: string }) => {
    try {
      const actionResult = await dispatch(verifyUser({ otp: values.otp, email }));
      if (verifyUser.fulfilled.match(actionResult)) {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Email verified successfully. You can now log in.",
            type: "success",
          })
        );

        // Preserve redirect parameter
        const redirect = new URLSearchParams(window.location.search).get("redirect");
        router.push(`/login${redirect ? `?redirect=${redirect}` : ""}`);
      } else if (verifyUser.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.error?.message ||
          "Failed to verify email. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage,
            type: "error",
          })
        );
      }
    } catch (error) {
      dispatch(
        addAlert({
          id: "",
          headText: "Error",
          subText: (error as Error)?.message || "Error verifying email",
          type: "error",
          autoClose: true,
        })
      );
    }
  };

  // Yup schema for validation
  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required("OTP is required")
      .matches(/^\d{6}$/, "OTP must be a 6-digit number"),
  });


  return (
    <Fragment>
      <h3 className="font-semibold text-[32px] leading-7 text-[#101928]">
        We emailed you a code
      </h3>
      <p className="font-normal text-base leading-6 text-[#667185]">
        We sent a 6 digit code to {email}. Enter it below.
      </p>
      <Formik
        initialValues={{ otp: "" }}
        validationSchema={validationSchema}
        onSubmit={handleVerifyEmail}
      >
        {({ errors, touched }) => (
          <Form className="mt-5 flex flex-col gap-5">
            <Field
              name="otp"
              as={InputField} // Render InputField as a Formik Field
              type="text"
              label="Code"
              placeholder="Enter code"
              error={touched.otp && errors.otp} // Display error if touched and invalid
            />


            <Button
              type="submit"
              label="Login to Dashboard"
              classNames="text-sm text-white font-semibold"
            />
          </Form>
        )}
      </Formik>


      <div className="center -mt-2">
        <Button
          onClick={handleResendCode}
          label="Resend code"
          classNames="p-2 w-auto text-xs bg-transparent font-medium text-[#1574E5]"
        />
      </div>
    </Fragment>
  );
};
export default VerifyEmail;
