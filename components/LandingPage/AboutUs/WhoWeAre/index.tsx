"use client";
import React from "react";
import Image from "next/image";
import TeamImage1 from "@/public/images/team-group1.svg";
import TeamImage2 from "@/public/images/team-group2.svg";
import ArrowIcon from "@/public/icons/arrow-drawing.svg";
import ArrowIcon2 from "@/public/icons/arrow-up-drawing.svg";

const WhoWeAre = () => {
  return (
    <section className="w-full pt-20 pb-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold mb-4 md:text-5xl">
            Who are{" "}
            <span className="text-2xl text-primary500 md:text-5xl">we?</span>
          </h2>
          <p className="text-sm text-grey700 md:text-base">
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
        <div className="lg:w-1/2 lg:pl-10 flex flex-col items-center px-6 relative">
          <div className="max-w-[486px] w-full h-auto rounded-lg overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
