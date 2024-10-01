"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import assetLibrary from "@/library";
import { DemoVideo, Modal } from "@/components";
import { LogoFadeIcon, PlayIcon } from "@/public/svgs";

const CtaSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="full-width content-grid relative pt-[6.25rem]">
      <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] bg-primary600 px-12 pb-20 pt-16 text-center sm:min-h-[40rem] sm:gap-6">
        <div className="z-[2] flex min-h-60 flex-col items-center justify-center gap-4">
          <LogoFadeIcon className="mb-8" />

          <h2 className="max-w-[46rem] text-xl font-bold text-white max-sm:max-w-64 sm:text-[2.5rem] sm:leading-[3rem]">
            The Smarter Way to Manage Your Design, Branding, and Marketing.{" "}
          </h2>

          <p className="text-pretty text-primary100 sm:text-2xl">
            Expertly done, in One Seamless Subscription.
          </p>

          <p className="max-w-[43rem] text-pretty text-primary100 sm:text-lg md:text-2xl">
            Say goodbye to the hassle of juggling content, design, and
            marketing. Get solutions that perfectly align with your goals
          </p>

          <div className="mt-4 flex gap-4 max-sm:flex-col">
            <Link
              href={"/signup"}
              className="block w-fit rounded-lg bg-primary900 px-12 py-4 text-lg font-medium text-white"
            >
              Get Started
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center gap-2 rounded-lg border bg-white px-6 py-4"
            >
              <span className="text-lg font-medium text-grey900">
                Watch demo video
              </span>

              <PlayIcon className="mt-1" />
            </button>
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
    </section>
  );
};
export default CtaSection;
