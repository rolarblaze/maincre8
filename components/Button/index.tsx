"use client";
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Spinner from "../Spinner";

interface ButtonProps {
  label: string;
  isLoading?: boolean;
  onClick?: () => void;
  classNames?: string;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isLoading = false,
  onClick,
  classNames,
  link,
}) => {
  const content = isLoading ? <Spinner /> : label;

  if (link) {
    return (
      <Link
        href={link}
        passHref
        className={twMerge(
          `w-full flex justify-center items-center gap-2 py-4 px-8 rounded-lg bg-primary500 text-white font-semibold text-center text-sm md:text-base `,
          classNames
        )}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={twMerge(
        `w-full flex justify-center items-center gap-2 py-4 px-8 rounded-lg bg-primary500 text-white font-semibold text-center text-sm md:text-base`,
        classNames
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {content}
    </button>
  );
};

export default Button;
