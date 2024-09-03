"use client"
import React from "react";
import { useAppDispatch } from "@/redux/store";
import { signUpIndividualByGoogle, signUpBusinessByGoogle } from "@/redux/auth/features";
import { useRouter } from "next/navigation";
import { SerializedError } from "@reduxjs/toolkit";
import { unwrapResult } from "@reduxjs/toolkit";
import { GoogleIcon, FacebookIcon, LinkedInIcon } from "@/public/icons";


interface SocialSignUpProps {
  isLogin?: boolean;
  activeTab?: string; 
}

const SocialSignUp: React.FC<SocialSignUpProps> = ({ isLogin, activeTab }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    const action = activeTab === "individual" ? signUpIndividualByGoogle : signUpBusinessByGoogle;
    try {
      const actionResult = await dispatch(action());
      const result = unwrapResult(actionResult); // This will throw an error if action was rejected
      // Google will handle the redirect, nothing else needed here
    } catch (err) {
      const error = err as SerializedError;
      console.error("Google sign-up failed:", error.message);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-3 w-full">
        <div className="flex-grow border-t border-grey200"></div>
        <span className=" text-grey500">
          {isLogin ? "Or login with" : "Or sign up with"}
        </span>
        <div className="flex-grow border-t border-grey200"></div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-16 h-16  flex items-center justify-center rounded-full border border-grey200 cursor-pointer md:w-20 md:h-20">
          <LinkedInIcon />
        </div>
        <div
          className="w-16 h-16 flex items-center justify-center rounded-full border border-grey200 cursor-pointer md:w-20 md:h-20"
          onClick={handleGoogleSignUp}
        >
          <GoogleIcon />
        </div>
        <div className="w-16 h-16  flex items-center justify-center rounded-full border border-grey200 cursor-pointer md:w-20 md:h-20">
          <FacebookIcon />
        </div>
      </div>
    </div>
  );
};

export default SocialSignUp;
