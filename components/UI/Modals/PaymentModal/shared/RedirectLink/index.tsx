import { ArrowRight, BlueArrowRight } from "@/public/icons";
import Link from "next/link";
import React from "react";

interface RedirectLinkProps {
  url: string;
  linkText: string;
}

function RedirectLink({ url, linkText }: RedirectLinkProps) {
  return (
    <Link href={url} className="space-x-2 text-sm text-primary500">
      <span>{linkText}</span>
      <BlueArrowRight />
    </Link>
  );
}

export default RedirectLink;
