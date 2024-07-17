import Button from "@/components/Button";
import PillDiv from "@/components/UI/PillDiv";
// import bgVideo from "@/public/video/bgVideoDark.webm"

import {
  AttachBrief,
  ColorPalette,
  LaunchGif,
  StartProject,
} from "@/public/gif";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden size-full min-h-[48rem] pt-24 pb-4 -mt-28">
      <div className="z-20 w-full max-w-[76rem] mx-auto flex flex-col py-20 justify-center items-center gap-8">
        {/* HERO CONTENT */}
        <div className="text-center size-full flex flex-col justify-center items-center gap-6">
          {/* PILL DIV */}
          <PillDiv className="mb-0 border-primary100 text-white">
            Welcome to SellCrea8
          </PillDiv>

          {/* HERO TITLE */}
          <h1 className="-tracking-[0.225rem] leading-loosest text-[5.5rem] font-extrabold text-primary50">
            Your One-Stop <br />
            Creative and Digital <br />
            Solutions Hub
          </h1>

          {/* HERO CONTENT */}
          <p className="text-center text-white max-w-[55rem]">
            SellCrea8 is a productized eCommerce platform designed by SMG to
            deliver affordable, high-quality, and personalized 
            creative and digital services. Simplify your service access and
            project management with our user-friendly interface.
          </p>
        </div>

        <Button label="Get Started" classNames="w-fit" />

        {/* VIDEO BACKGROUND */}
        <video autoPlay muted loop className="absolute object-cover -z-[1] inset-0 min-h-full min-w-full">
          <source src="/video/bgVideoDark.webm" type="video/webm" />
        </video>

        {/* FALLBACK IF THE VIDEO DOES NOT LOAD */}
        <div className="absolute inset-0 bg-primary800 -z-[2]"></div>

        {/* FLOATING GIFS */}
        <Image
          src={LaunchGif}
          alt="launch"
          className="absolute top-44 left-40 size-[4.75rem]"
        />
        <Image
          src={StartProject}
          alt="launch"
          className="absolute top-52 right-32 size-[4.75rem]"
        />
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
