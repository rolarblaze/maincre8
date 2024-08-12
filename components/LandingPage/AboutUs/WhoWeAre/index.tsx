"use client";
import React from "react";
import assetLibrary from "@/library";
// import TeamImage from "@/public/images/team-group.svg";
// import TeamImageMobile from "@/public/images/team-group-mobile.svg";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="w-full pt-10 bg-white md:pt-20 md:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:flex-row items-center md:justify-between">
        <div className="w-full space-y-2 md:space-y-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 md:text-5xl">
            Who are{" "}
            <span className="text-2xl text-primary500 md:text-5xl">we?</span>
          </h2>
          <p className="mb-3 text-sm text-grey700 md:text-base">
            SellCrea8, a product of SellMedia Group, designed to facilitate
            seamless and innovative creative and digital services delivery for
            clients and businesses of all sizes.
          </p>
          <p className="text-sm text-grey700 md:text-base">
            SellMedia Group, pioneers at the nexus of media and technology,
            leading a transformative journey fueled by innovation. With a
            dynamic approach and a relentless pursuit of creativity, we empower
            enterprises to navigate the digital age with confidence. As a
            multinational media technology service company with a comprehensive
            360-degree marketing scope, our mission is to revolutionize the
            media and marketing space.
          </p>
        </div>
        <div className="w-full h-auto m-auto">
          <div className="flex justify-center items-center">
            <div className="hidden w-full rounded-lg overflow-hidden md:flex">
              {/* <TeamImage className="w-fit m-auto  h-full rounded-lg" /> */}
              <Image
                alt={"arrow drawing"}
                src={assetLibrary.teamGroup}
                width={400}
                height={300}
                quality={100}
                className="size-full m-auto  h-full object-cover"
              />
            </div>
            {/* <div className="w-full rounded-lg overflow-hidden md:hidden">
              <TeamImageMobile className="w-fit m-auto  h-full rounded-lg" />
            </div> */}
          </div>

          {/* <div className="max-w-[486px] w-full h-auto rounded-lg overflow-hidden">
            <TeamImage1 className="w-full h-full rounded-lg" />
          </div>

          <div className="absolute top-[64%] left-[32%] max-w-[416px] w-full h-auto rounded-lg">
            <TeamImage2 className="w-full h-full rounded-lg" />
          </div>

          <div className="absolute top-[20%] right-0">
            <ArrowIcon className="w-[76px] h-[76px] " />
          </div>
          <div className="absolute left-[16%] bottom-[-30%] ">
            <ArrowIcon className="w-[76px] h-[76px] rotate-180" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
