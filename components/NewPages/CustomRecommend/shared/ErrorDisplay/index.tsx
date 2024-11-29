import React from "react";
import { twMerge } from "tailwind-merge";

function ErrorDisplay({
  message = "Error",
  classNames,
}: {
  message?: string;
  classNames?: string;
}) {
  return (
    <p
      className={twMerge("w-full text-center text-xs text-red-800", classNames)}
    >
      {message}
    </p>
  );
}

export default ErrorDisplay;
