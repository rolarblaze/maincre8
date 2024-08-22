import React from "react";
import Button from "@/components/Button";
import Image, { StaticImageData } from "next/image";

import {
  AttachBrief,
  ColorPalette,
  IdeaBulb,
  LaunchGif,
  StartProject,
} from "@/public/gif";
import PillDiv from "@/components/UI/PillDiv";

interface HeroSectionProps {
  pillText?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  showGifs?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  pillText,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  showGifs = true,
}) => {
  return (
    <section className="relative overflow-hidden size-full min-h-[28rem] px-5 pt-24 pb-14 md:pb-16 -mt-28">
      <div className="z-20 w-full max-w-[76rem] mx-auto flex flex-col pt-10 md:py-20 justify-center items-center gap-8">
        {/* HERO CONTENT */}
        <div className="max-sm:max-w-[21rem] max-w-[880px] w-full text-center size-full flex flex-col justify-center items-center gap-6">
          {/* PILL DIV */}
          <PillDiv className="mb-0 border-primary100 text-white text-xs md:text-lg">
            {pillText}
          </PillDiv>

          {/* HERO TITLE */}
          <h1 className="md:-tracking-[0.225rem] text-[2.5rem] md:text-5xl leading-[3rem] md:leading-loosest md:text-[5.5rem] font-extrabold text-primary50">
            {title}
          </h1>

          {/* HERO CONTENT */}
          <p className="text-center text-white max-w-[55rem]">{subtitle}</p>
        </div>

        {buttonLabel && buttonLink && (
          <Button label={buttonLabel} classNames="w-fit" link={buttonLink} />
        )}

        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          className="absolute object-cover -z-[1] inset-0 min-h-full min-w-full"
        >
          <source src="/video/bgVideoDark.webm" type="video/webm" />
        </video>

        {/* FALLBACK IF THE VIDEO DOES NOT LOAD */}
        <div className="absolute inset-0 bg-primary800 -z-[2]"></div>

        {/* FLOATING GIFS */}
        {showGifs && (
          <>
            <Image
              src={ColorPalette}
              alt="Color Palette"
              className="absolute max-lg:hidden top-36 left-60 size-[4.75rem]"
            />
            <Image
              src={IdeaBulb}
              alt="Idea Bulb"
              className="absolute max-lg:hidden top-36 right-60 size-[4.75rem]"
            />
          </>
        )}
        {/* <Image
          src={AttachBrief}
          alt="launch"
          className="absolute top-56 left-0 size-[4.75rem]"
        /> */}
        {/* <Image
          src={ColorPalette}
          alt="launch"
          className="absolute top-72 right-0 size-[4.75rem]"
        /> */}
      </div>
    </section>
  );
};
export default HeroSection;
