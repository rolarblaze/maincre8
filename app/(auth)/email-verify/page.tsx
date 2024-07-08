"use client";
import { Button } from "@/components";
import InputField from "@/components/Forms/InputField/InputField";

const VerifyEmail = () => {
  return (
    <div className="max-w-[37rem] size-full mt-12 flex flex-col gap-10">
      {/* FORM LEGEND */}
      <h1 className="text-grey900 text-center text-4.5xl font-bold">
        Verify your email address
      </h1>

      {/* FORM ELEMENT */}
      <form className="p-10 border rounded-lg border-grey200 space-y-10">
        <legend className="space-y-1">
          <h3 className="text-grey600 text-2xl font-bold tracking-[-0.03rem]">
            We emailed you a code
          </h3>
          <p className="text-grey500 tracking-[-0.01rem]">
            Check jt@sellmedia.africa
          </p>
        </legend>

        {/* FORM INPUT ELEMENT */}
        <fieldset>
          <InputField
            label="Code"
            type="text"
            placeholder="Enter verification code"
            classNames="p-4"
          />
        </fieldset>

        {/* FORM BUTTONS */}
        <div className="flex flex-col size-full font-semibold">
          <Button
            label="Verify email address"
            onClick={() => console.log("Hello")} //! This causes a reload
          />
          <Button
            label="Resend code"
            onClick={() => console.log("Resend Code")}
            classNames="text-[#136AD0] bg-transparent" //! text-primary600 refusing to show
            //* type="button"
          />
        </div>
      </form>
    </div>
  );
};
export default VerifyEmail;
