import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React, { FC } from "react";

const NotFoundButton: FC<{
  content: string;
  className?: string;
  href: string;
}> = ({ className, content, href }) => {
  return (
    <button
      className={`rounded-lg text-base font-semibold py-4 px-12 text-primary600 border border-primary600 ${className}`}
    >
      <Link href={href as Url}>{content}</Link>
    </button>
  );
};

export default NotFoundButton;
