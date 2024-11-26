"use client";

import { BellIcon, CartIcon, LogoIcon, MobileMenu } from "@/public/svgs";
import DashArrowLeft from "@/public/svgs/DashArrowLeft";
import LogoIconResponsive from "@/public/svgs/LogoIconResponsive";
import { useAppSelector } from "@/redux/store";
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
  const { cartItems } = useAppSelector((state) => state.cart);

  // const cartItems = [];

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-primary50 bg-white px-[22px] py-4 xs:max-md:flex xs:max-md:justify-between xs:max-md:px-2 md:hidden lg:hidden">
      {/* {isPackageInfo ? (
        // For Services package info header
        <div>
          <Link
            href={"/dashboard/services"}
            className="flex h-fit w-fit gap-4 text-grey900"
          >
            <span className="self-center">
              <DashArrowLeft />
            </span>
            <span className="text-2xl font-semibold">Services</span>
          </Link>
        </div>
      ) : (
        // For other headers
        <div className="flex items-center gap-4 xs:max-md:gap-1">
          <button className="h-fit w-fit self-center" onClick={onClick}>
            <MobileMenu className="bg-red-400" />
          </button>
          <span className="text-2xl font-semibold text-grey900 xs:max-md:text-lg">
            {title}
          </span>
        </div>
      )} */}

      <div className="flex items-center gap-4 xs:max-md:gap-2">
        <button className="h-fit w-fit self-center" onClick={onClick}>
          <MobileMenu className="" />
        </button>
        <Link href="/" className="flex items-center gap-1">
          <div className="size-6">
            {/* This SVG scales up to the size of its container. */}
            <LogoIconResponsive />
          </div>

          <p className="mt-1 text-2xl font-semibold text-grey900 xs:max-md:text-base">
            SellCrea8
          </p>
        </Link>
      </div>

      <div className="mr-2 flex gap-1">
        <div className="center size-8 rounded-full bg-[#F0F2F5] p-1">
          <Link href="/dashboard/notifications" className="size-5">
            <BellIcon />
          </Link>
        </div>
        <div
          className={`${cartItems.length === 0 ? "bg-[#F0F2F5]" : "bg-[#E8F1FC]"} relative size-8 rounded-full p-1`}
        >
          {cartItems.length !== 0 && (
            <div className="center absolute -right-1 -top-1 aspect-square min-h-4 w-auto min-w-4 rounded-full bg-[#1574E5] p-[1px]">
              <p className="leading-0 text-[10px] text-[#E8F1FC]">
                {cartItems.length}
              </p>
            </div>
          )}
          <Link href="/cart" className="center size-full">
            <div className="size-5">
              <CartIcon
                fillColor={`${cartItems.length === 0 ? "#667185" : "#1574E5"}`}
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
