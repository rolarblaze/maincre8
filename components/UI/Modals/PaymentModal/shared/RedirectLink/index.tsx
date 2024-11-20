import { ArrowRight, BlueArrowRight } from "@/public/icons";
import BlueArrowRightIcon from "@/public/svgs/BlueArrowRightIcon";
import BlueModalArrowRight from "@/public/svgs/BlueModalArrowRight";
import Link from "next/link";
import React from "react";

interface RedirectLinkProps {
  url: string;
  linkText: string;
}

function RedirectLink({ url, linkText }: RedirectLinkProps) {
  return (
    <Link href={url} className="flex gap-2 text-sm text-primary500">
      <span>{linkText}</span>
      <BlueModalArrowRight className="self-center" />
    </Link>
  );
}

export default RedirectLink;
