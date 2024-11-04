"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SliderModal from "../UI/Modals/SliderModal";
import DashboardPopoutWrapper from "../UI/Modals/DashboardPopoutWrapper";

const EmptyState = ({
  imgSrc,
  text,
  link,
  to,
  alt = "Empty state",
  imgStyle,
}: {
  imgSrc: string;
  alt?: string;
  text: string;
  link?: string;
  to?: string;
  imgStyle?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="grid h-full place-items-center">
      <div className="flex max-w-max flex-col items-center justify-center">
        <button className="bg-red-400 p-3" onClick={() => setIsOpen(true)}>
          Click Me
        </button>
        <SliderModal isOpen={isOpen} onClose={handleClose} cancelBtnStyles="border-none top-10 right-10">
          <DashboardPopoutWrapper
            title="Digital Marketing Brief Submission Form"
            showSubtitle={false}
            childrenStyles="py-28"
          >
            Body
          </DashboardPopoutWrapper>
        </SliderModal>
        <Image
          src={`${imgSrc}`}
          alt={alt}
          width={178}
          height={184}
          className={`${imgStyle}`}
        />

        <p className="mb-2 text-lg font-semibold text-grey600">{text}</p>

        {link && to && (
          <Link
            href={to}
            className="rounded-lg bg-primary500 px-4 py-2 text-sm text-white"
          >
            {link}
          </Link>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
