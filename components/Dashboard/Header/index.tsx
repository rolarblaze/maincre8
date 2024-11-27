"use client";

import React from "react";

import { BellIcon, CartIcon } from "@/public/svgs";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { BulbIcon } from "@/public/icons";
import { useRouter } from "next/navigation";
interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  const { cartItems } = useAppSelector((state) => state.cart);
  const router = useRouter();
  return (
    <div className="hidden items-start justify-between md:flex flex-wrap">
      <header className="w-ful flex-col items-start space-y-1 bg-white px-6 pb-4 pt-5 font-manrope">
        <h3 className="text-2xl font-semibold text-grey900">{title}</h3>
        {subtitle && (
          <p className="text-base font-medium text-grey500">{subtitle}</p>
        )}
      </header>

      <div className="mr-2 flex flex-wrap items-center gap-5 pt-5">
        <Link
          href="/dashboard/custom-recommendation"
          className="w-fit cursor-pointer items-center gap-2 rounded-lg border-none bg-primary500 !px-3 !py-2 text-white md:flex"
        >
          <BulbIcon />
          <span className="text-nowrap">Custom recommendations</span>
        </Link>
        {/* <div className="center size-8 rounded-full bg-[#F0F2F5] p-1">
          <button className="size-5">
            <BellIcon />
          </button>
        </div> */}
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
    </div>
  );
};

export default Header;
