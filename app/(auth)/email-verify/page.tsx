"use client";
import { useEffect, useState } from "react";
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

  return (
    <div className="max-w-[37rem] size-full mt-12 flex flex-col gap-10">
      {/* FORM LEGEND */}
      <h3 className="text-grey900 text-center text-4.5xl font-bold">
        Verify your email address
      </h3>

      {/* FORM ELEMENT */}
      <div className="flex flex-col gap-4 border rounded-lg border-grey200 bg-white p-10">
        <form className=" space-y-10 text-left" onSubmit={handleVerifyEmail}>
          <legend className="space-y-1">
            <h3 className="text-grey600 text-2xl font-bold tracking-[-0.03rem]">
              We emailed you a code
            </h3>
            <p className="text-grey500 tracking-[-0.01rem]">Check {email}</p>
          </legend>

          {/* FORM INPUT ELEMENT */}
          <fieldset>
            <InputField
              label="Code"
              type="text"
              placeholder="Enter verification code"
              classNames="p-4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </fieldset>

          {/* FORM BUTTONS */}
          <div className="flex flex-col size-full font-semibold">
            <Button label="Verify email address" type="submit" isLoading={isLoading} />
          </div>
          <button
            className="text-primary600 py-4 border-none"
            onClick={handleResendCode}

          >
            Resend code
          </button>
        </form>
      </div>
    </div>
  );
};
export default VerifyEmail;
