"use client";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Button } from "@/components";
import InputField from "@/components/Forms/InputField";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { resendVerificationCode, verifyUser } from "@/redux/auth/features";
import { addAlert } from "@/redux/alerts";

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
      console.error("Error resending verification code:", error);
    }
  };

  const handleVerifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const actionResult = await dispatch(verifyUser({ otp, email }));
      if (verifyUser.fulfilled.match(actionResult)) {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Email verified successfully. You can now log in.",
            type: "success",
          })
        );
        router.push("/login");
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
      console.error("Error verifying email:", error);
    }
  };


  const dispatchAlert = () => {
    dispatch(
      addAlert({
        id: "",
        headText: "Error",
        subText: "Olajghsagjkhajhjewhjkhfejhfkhefnkhenkhafkherjkh.akj.rmkfhk.renhekrhk.rh",
        type: "error",
      })
    );
  }

  return (
    <Fragment>
      <h3 className="font-semibold text-[32px] leading-7 text-[#101928]">
        We emailed you a code
      </h3>
      <p className="font-normal text-base leading-6 text-[#667185]">
        We sent a 6 digit code to jt@sellmedia.africa. Enter it below.
      </p>
      <div className="mt-5">
      <InputField type="text" label="Code" placeholder="Enter code" />
      </div>
      <div className="mt-5">
      <Button
      onClick={dispatchAlert}
        label="Login to Dashboard"
        classNames="text-sm text-white font-semibold"
      />
      </div>
      
     
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
