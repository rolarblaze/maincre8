"use client";
import { Fragment, useState } from "react";
import { InputField, Button } from "@/components";
import { ConfirmIcon } from "@/public/icons";
import Image from "next/image";

function ConfirmForgotPassword() {
  return (
    <Fragment>
      <h1>Check your email for password reset link</h1>
      <div className="w-full  border border-grey200 rounded-lg p-10">
        <div className="border border-grey200 h-[48px] rounded flex items-center gap-3">
          {/* the ml should be 23px tho  */}
          <div className="w-1.5 h-12 bg-primary700 rounded-tl-md rounded-bl-md relative right-1.5" />
          {/* won't work */}
          {/* <Image src={ConfirmIcon} width={24} height={24} alt="confirm" /> */}
          <ConfirmIcon />
          <p className="text-sm font-semibold text-grey900">
            Check your email for password reset link
          </p>
        </div>
      </div>
    </Fragment>
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
    <main className="flex flex-col gap-4 md:gap-8 text-center ">
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
