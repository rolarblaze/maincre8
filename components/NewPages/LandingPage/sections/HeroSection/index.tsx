"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DemoVideo, FadeUpDiv, Modal } from "@/components";
import { PlayIcon } from "@/public/svgs";
import assetLibrary from "@/library";
import { useAppSelector } from "@/redux/store";

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = useAppSelector((state) => state.auth);
  

  return (
    <FadeUpDiv duration={1.5} className="py-5 lg:py-[3.75rem]">
      <div className="relative flex h-fit flex-col items-center justify-center gap-4 overflow-hidden rounded-[1.25rem] bg-gradient-to-tr from-[#4490EA] to-[#0C407E] to-70% px-5 pb-16 pt-14 text-center md:px-20 md:pb-16 lg:px-[100px] lg:py-28">
        <h1 className="z-[2] max-w-96 text-3xl font-bold leading-10 text-primary50 max-sm:tracking-tight sm:max-w-[56.75rem] sm:text-4xl md:text-5xl md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem]">
          The Smarter Way to Manage Your Design, Branding, and Marketing.
        </h1>

        <p className="z-[2] max-w-96 text-pretty text-base font-light leading-6 text-white sm:max-w-[45rem] md:text-xl sm:leading-8">
          Expertly done, in One Seamless Subscription.
        </p>

        <div className="z-[2] mt-4 flex items-center justify-center gap-6">
          <Link
            href={(profile.first_name || profile.last_name) ? "/dashboard" : "/signup"}
            className="block w-fit rounded-lg bg-white hover:bg-slate-300 px-12 py-3.5 text-base font-semibold text-grey800"
          >
            {(profile.first_name || profile.last_name) ? "Go To Dashbaord" : "Get Started"}
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center gap-2.5 rounded-lg border bg-black/10 hover:bg-black/30 backdrop-blur-[2px] border-white px-6 py-3 text-white max-md:hidden"
          >
            <PlayIcon fillColor="white" className="mt-0.5" />
            <span className="text-lg font-medium">Watch demo video</span>
          </button>
        </div>

        {/* BG EFFECTS */}
        <Image
          src={assetLibrary.learnMoreLines}
          fill
          alt="Lines"
          className="absolute z-[1] object-cover"
        />
        <Image
          src={assetLibrary.learnMorePaper}
          fill
          alt="Lines"
          className="absolute object-cover"
        />
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DemoVideo />
      </Modal>
    </FadeUpDiv>
  );
};
export default HeroSection;
