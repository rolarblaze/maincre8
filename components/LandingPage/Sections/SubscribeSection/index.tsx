"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Button from "@/components/Button";
import { StartProjectText } from "@/public/icons";
import computer from "@/public/imgs/computer.png";
import Image from "next/image";
import { subscribeToNewsletter } from "@/redux/newsletter/features";
import { addAlert } from "@/redux/alerts";
import InputField from "@/components/Forms/InputField";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();
  const { message, isLoading, error } = useAppSelector(
    (state) => state.newsletter
  );

  const handleSubscribe = async () => {
    if (email) {
      const actionResult = await dispatch(subscribeToNewsletter({ email }));
      if (subscribeToNewsletter.fulfilled.match(actionResult)) {
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: `Successfully subscribed ${email} to the newsletter.`,
            type: "success",
          })
        );
      } else if (subscribeToNewsletter.rejected.match(actionResult)) {
        const errorMessage =
          actionResult.payload?.errorMessage ||
          "An error occurred during subscription. Please try again.";
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: errorMessage.includes("already subscribed")
              ? "The email is already a subscriber."
              : errorMessage,
            type: "error",
          })
        );
      }
    } else {
      console.error("Email is required for subscription");
    }
  };

  return (
    <section className="w-full bg-grey800 z-20">
      <div className="py-20 mx-auto max-w-[76rem] flex max-xl:px-5 max-md:flex-col-reverse max-md:gap-6 justify-between items-center">
        <div className="flex flex-col gap-2">
          {/* PILL DIV */}
          <div className="border p-2 mb-2 w-fit border-grey50 rounded-[0.625rem]">
            <span className="text-lg max-sm:text-xs text-grey50 font-semibold leading-7">
              Subscribe to Our Newsletter 
            </span>
          </div>

          <h3 className="text-grey50 font-bold text-2xl md:text-3xl lg:text-3.5xl leading-8 lg:leading-10">
            Stay Updated!
          </h3>

          <p className="text-grey50 max-sm:text-sm font-medium leading-6">
            Subscribe to our newsletter for the latest updates, discounts, and
            promotions.
          </p>

          {/* BUTTONS */}
          <div className="max-w-[28.5rem] max-sm:py-4 max-sm:flex-col flex justify-center max-sm:items-start items-center gap-4 sm:gap-10">
            <InputField
              label=""
              type="text"
              placeholder="Enter email address"
              classNames="sm:max-w-[13rem] bg-white py-3.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              label="Subscribe"
              classNames="max-sm:max-w-[6.5rem] max-sm:py-2 max-w-[13rem]"
              onClick={handleSubscribe}
              isLoading={isLoading}
            />
          </div>
        </div>

        <figure className="relative size-[16.6875rem] mr-12">
          <Image src={computer} alt="computer image" />
          {/* <StartProjectText className="absolute bottom-6 right-7" /> */}
        </figure>
      </div>
    </section>
  );
};
export default SubscribeSection;
