"use client";

import { ArrowBackIcon } from "@/public/icons";
import { MobileMenu } from "@/public/svgs";
import DashArrowLeft from "@/public/svgs/DashArrowLeft";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MobileNavprops {
  title: string;
  onClick: () => void;
}

const MobileNav: React.FC<MobileNavprops> = ({ title, onClick }) => {
  const pathname = usePathname();
  const isPackageInfo = pathname.startsWith("/dashboard/services/");

  return (
    <nav className="fixed inset-x-0 top-0 z-20 md:hidden lg:hidden py-4 px-[22px] bg-primary50">
      {isPackageInfo ? (
        <div>
          <Link
            href={"/dashboard/services"}
            className="w-fit h-fit flex gap-4 text-grey900"
          >
            <span className="self-center">
              <DashArrowLeft />
            </span>
            <span className="font-semibold text-2xl">Services</span>
          </Link>
        </div>
      ) : (
        <div className="flex gap-4">
          <button className="w-fit h-fit" onClick={onClick}>
            <MobileMenu />
          </button>
          <span>{title}</span>
        </div>
      )}
    </nav>
  );
};

export default MobileNav;
