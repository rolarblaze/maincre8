import NotFoundButton from "@/components/NotFoundPage/NotFoundButton";
import assetLibrary from "@/library";
import Image from "next/image";
import React from "react";

const NotFound = () => {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-10 px-5 md:mt-5">
      <div className="max-h-[150px] max-w-[150px] md:max-h-[300px] md:max-w-[300px]">
        <Image
          src={assetLibrary.notFoundImg}
          alt="Not found"
          width={170}
          height={173}
          priority
        />
      </div>
      <div className="flex w-full flex-col items-center gap-10 text-grey900">
        <p className="text-center text-sm">ERROR 404</p>
        <div className="flex flex-col gap-[0.88rem] text-center">
          <h3 className="max-w-[420px] font-semibold">
            Oops! Looks like you’re lost in the creative cloud.
          </h3>
          <p className="text-sm font-medium md:text-base">
            Don’t worry, even the best ideas need a little redirection.
          </p>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-4 md:gap-8">
          <NotFoundButton
            content="Go to Homepage"
            href="/"
            className="!border-none bg-primary500 !text-white"
          />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
