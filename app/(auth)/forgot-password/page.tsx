"use client";
import { useState } from "react";

import Image from "next/image";
import { InputField, Button } from "@/components";
import { ConfirmIcon } from "@/public/icons";

function ConfirmForgotPassword() {
  return (
    <main className="flex flex-col gap-4 md:gap-8 text-center mb-14 md:mb-20">
      <h1>Check your email for password reset link</h1>
      <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
        <div className=" border border-grey200 h-[48px] rounded flex items-center gap-3 pl-4">
          {/* the ml should be 23px tho  */}
          <div className="w-1.5 h-12 bg-primary700 rounded-tl-md rounded-bl-md ml-6" />
          <ConfirmIcon />
          <p className="text-sm font-semibold text-grey900">
            Check your email for password reset link
          </p>
        </div>
      </section>
    </main>
  );
}

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <main className="flex flex-col gap-4 md:gap-8 text-center mb-14 md:mb-20">
      {isSubmitted ? (
        <ConfirmForgotPassword />
      ) : (
        <>
          <h1>Reset your account password</h1>
          <section className="w-full flex flex-col gap-4 border border-grey200 rounded-lg p-5 md:gap-8 md:p-10">
            <form className="w-full flex flex-col">
              <InputField
                label="Email address"
                type="text"
                placeholder="Enter email address"
                onChange={(e) => console.log(e.target.value)}
                classNames="mb-6"
                isRequired
              />
              <Button
                label="Reset password"
                isLoading={isLoading}
                onClick={handleSubmit}
                classNames="mt-4"
              />
            </form>
          </section>
        </>
      )}
    </main>
  );
}
