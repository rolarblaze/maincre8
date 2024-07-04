"use client";
import { Button } from "@/components";
import InputField from "@/components/Forms/InputField/InputField";

const VerifyEmail = () => {
  return (
    <form className="max-w-[37rem] size-full">
      <fieldset className="space-y-10">
        {/* FORM LEGEND */}
        <legend className="text-grey900 text-center text-4.5xl font-bold">
          Verify your email address
        </legend>

        {/* FORM INPUT */}
        <div className="p-10 border border-grey200 space-y-10">
          <header className="space-y-1">
            <h3 className="text-grey600 text-2xl font-bold tracking-[-0.03rem]">
              We emailed you a code
            </h3>
            <p className="text-grey500 tracking-[-0.01rem]">
              Check jt@sellmedia.africa
            </p>
          </header>

          {/* FORM INPUT ELEMENT */}
          <div>
            <InputField
              label="Code"
              type="text"
              placeholder="Enter verification code"
              classNames="p-4"
            />
          </div>

          {/* FORM BUTTONS */}
          <div className="flex flex-col size-full">
            <Button
              label="Verify email address"
              onClick={() => console.log("Hello")} //! This causes a reload
            />
            <Button
              label="Resend code"
              onClick={() => console.log("Resend Code")}
              classNames="text-primary600 bg-transparent"
              //* type="button"
            />
          </div>
        </div>
      </fieldset>
    </form>
  );
};
export default VerifyEmail;
