"use client";
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Spinner from "../Spinner";

interface ButtonProps {
  label: React.ReactNode | string;
  isLoading?: boolean;
  isFileUploading?: boolean;
  onClick?: () => void;
  classNames?: string;
  link?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  isLoading = false,
  isFileUploading = false,
  onClick,
  classNames,
  link,
  type = "button",
  disabled = false,
}) => {
  const content = isLoading ? <Spinner /> : label;

  if (link) {
    return (
      <Link
        href={link}
        passHref
        className={twMerge(
          `flex w-full items-center justify-center gap-2 rounded-lg bg-primary500 px-6 py-4 text-center font-semibold text-white md:px-8 ${
            disabled ? "cursor-not-allowed opacity-50" : ""
          }`,
          classNames,
        )}
        onClick={disabled ? undefined : onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={twMerge(
        `flex w-full items-center justify-center gap-2 rounded-lg bg-primary500 px-8 py-4 text-center font-semibold text-white ${
          disabled ? "cursor-not-allowed opacity-50" : ""
        }`,
        classNames,
      )}
      onClick={disabled ? undefined : onClick} // Prevent click if disabled
      disabled={disabled || isLoading}
    >
      {content}
    </button>
  );
};

export default Button;
