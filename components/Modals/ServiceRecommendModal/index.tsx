import { BlueArrowRight } from "@/public/icons";
import BlueModalArrowRight from "@/public/svgs/BlueModalArrowRight";
import ModalCheckIcon from "@/public/svgs/ModalCheckIcon";
import Link from "next/link";
import React from "react";

const ServiceRecommendModal = () => {
  return (
    <div className="max-w-[34rem] max-h-[20rem] w-full h-full flex flex-col gap-4 rounded-lg bg-white px-6 py-6">
      <ModalCheckIcon />
      <div className="flex flex-col gap-1 text-grey900 border-b border-grey200 pb-4">
        <h3 className="font-bold text-base md:text-xl lg:text-2xl">
          Your custom service recommendations are on the way
        </h3>
        <p className="font-normal">
          Our specialised team is now reviewing your brief to create
          personalised recommendations tailored specifically to your needs. We
          will reach out to you shortly
        </p>
      </div>
      <Link
        href={"/dashboard/overview"}
        className="flex gap-2 text-primary500 mt-2"
      >
        <span className="font-semibold">Go to overview</span>
        <BlueModalArrowRight className="self-center" />
      </Link>
    </div>
  );
};

export default ServiceRecommendModal;
