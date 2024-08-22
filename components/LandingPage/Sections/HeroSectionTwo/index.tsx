import React from "react";

interface HeroSectionTwoProps {
  content: string;
}

function HeroSectionTwo({ content }: HeroSectionTwoProps) {
  return (
    <section className="w-full relative flex justify-center items-center h-[405px] max-h-[405px]">
      <h1 className="font-bold text-[3.5rem] text-white">{content}</h1>
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
    </section>
  );
}

export default HeroSectionTwo;
