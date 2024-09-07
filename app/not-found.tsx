import NotFoundButton from "@/components/NotFoundPage/NotFoundButton";
import assetLibrary from "@/library";
import NewLogo from "@/public/optimised/NewLogo";
import { HamburgerIcon } from "@/public/svgs";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <header className="w-full px-5 md:pl-24 lg:pl-32 py-4 md:py-5 lg:py-6 flex justify-between ">
        {/* Logo */}
        <NewLogo />
        <div className="md:hidden">
          <HamburgerIcon stroke="#1574E5" />
        </div>
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center px-5">
        <div className=" max-w-[150px] max-h-[150px] md:max-w-[300px] md:max-h-[300px]">
          <Image
            src={assetLibrary.notFound}
            alt="Not found"
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl md:text-5xl text-grey900 text-center">
              Oops! Page not found
            </p>
            <p className="font-normal text-grey600 text-sm md:text-base text-center max-w-[570px]">
              We are sorry! It looks like you have stumbled upon a page that
              doesn’t exist. Let’s get you back on track.
            </p>
          </div>
          <div className="flex gap-4 md:gap-8 w-full justify-center flex-wrap">
            <NotFoundButton
              content="Go to Homepage"
              href="/"
              className="!text-white bg-primary500  !border-none"
            />
            <NotFoundButton content="Contact Us" href="/contact-us" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
