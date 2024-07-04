import React from "react";
import LinkedInIcon from "../../../public/icons/linkedin.svg";
import GoogleIcon from "../../../public/icons/google.svg";
import FacebookIcon from "../../../public/icons/facebook.svg";

const SocialSignUp = ({ isLogin }: { isLogin?: boolean }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center gap-3 w-full">
        <div className="flex-grow border-t border-grey200"></div>
        <span className=" text-grey500">
          {isLogin ? "Login in with" : "Or sign up with"}
        </span>
        <div className="flex-grow border-t border-grey200"></div>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-16 h-16  flex items-center justify-center rounded-full border border-grey200 cursor-pointer md:w-20 md:h-20">
          <LinkedInIcon />
        </div>
        <div className="w-16 h-16  flex items-center justify-center rounded-full border border-grey200 cursor-pointer md:w-20 md:h-20">
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
