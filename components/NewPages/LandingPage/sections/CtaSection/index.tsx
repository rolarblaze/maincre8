"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import assetLibrary from "@/library";
import { Button, DemoVideo, FadeUpDiv, Modal } from "@/components";
import { LogoFadeIcon, PlayIcon } from "@/public/svgs";
import { useAppSelector } from "@/redux/store";

const CtaSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useAppSelector((state) => state.auth);

  return (
    <FadeUpDiv className="full-width content-grid relative pt-[6.25rem]">
      <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-primary600 px-12 pb-20 pt-16 text-center xs:max-md:px-3 sm:min-h-[40rem] sm:gap-6">
        <div className="z-[2] flex min-h-60 flex-col items-center justify-center gap-4 xs:max-md:w-full">
          <LogoFadeIcon className="mb-8" />

          <h2 className="max-w-[46rem] text-xl font-bold text-white max-sm:max-w-64 sm:text-[2.5rem] sm:leading-[3rem]">
            The Smarter Way to Manage Your Design, Branding, and Marketing.{" "}
          </h2>

          <p className="text-pretty text-primary100 sm:text-2xl">
            Expertly done, in One Seamless Subscription.
          </p>

          <p className="max-w-[43rem] text-pretty text-primary100 xs:max-md:w-full sm:text-lg md:text-2xl">
            Say goodbye to the hassle of juggling content, design, and
            marketing. Get solutions that perfectly align with your goals
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:flex-nowrap">
            {/* Get started button */}
            <Button
              label={
                profile.first_name || profile.last_name
                  ? "Go To Dashbaord"
                  : "Get Started"
              }
              link={
                profile.first_name || profile.last_name
                  ? "/dashboard"
                  : "/signup"
              }
              classNames="!w-auto px-4 py-3 md:px-6 md:py-4 !bg-primary900"
            />

            {/* Watch a demo button */}
            <Button
              label={
                <>
                  <PlayIcon className="" />
                  <span className="text-sm font-medium text-grey900 md:text-base">
                    Watch demo video
                  </span>
                </>
              }
              onClick={() => setIsOpen(true)}
              classNames="!bg-white !w-auto px-4 py-3 md:px-8 md:py-4"
            />
          </div>
        </div>

        <Image
          src={assetLibrary.ellipseDecoration}
          fill
          alt="Lines"
          className="not-sr-only top-0 m-auto max-w-2xl object-cover"
        />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DemoVideo />
      </Modal>

      <div className="full-width absolute bottom-0 -z-[1] h-[7.5rem] w-full bg-primary900 sm:h-80" />
    </FadeUpDiv>
  );
};
export default CtaSection;
