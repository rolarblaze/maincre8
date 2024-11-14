"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SliderModal from "../UI/Modals/SliderModal";
import DashboardPopoutWrapper from "../UI/Modals/DashboardPopoutWrapper";
import FormFooter from "../Dashboard/SubmitBrief/shared/FormFooter";
import DigitalMarketForm from "../Dashboard/SubmitBrief/DigitalMarketForm";

const EmptyState = ({
  imgSrc,
  text,
  subText,
  link,
  to,
  alt = "Empty state",
  imgStyle,
}: {
  imgSrc: string;
  alt?: string;
  text: string;
  subText?: string;
  link?: string;
  to?: string;
  imgStyle?: string;
}) => {
  return (
    <div className="grid h-full place-items-center">
      <div className="flex max-w-max flex-col items-center gap-4 justify-center">
        <Image
          src={`${imgSrc}`}
          alt={alt}
          width={178}
          height={184}
          className={`${imgStyle}`}
        />

        <h4 className=" text-2xl font-semibold text-grey900">{text}</h4>
        <p className="text-center text-sm font-medium text-grey900">{subText}</p>

        {link && to && (
          <Link
            href={to}
            className="rounded-lg bg-primary500 px-4 py-2 text-sm text-white mt-4"
          >
            {link}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
