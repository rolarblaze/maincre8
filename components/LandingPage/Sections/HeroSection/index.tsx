import Button from "@/components/Button";
import PillDiv from "@/components/UI/PillDiv";
// import bgVideo from "@/public/video/bgVideoDark.webm"

import {
  AttachBrief,
  ColorPalette,
  IdeaBulb,
  LaunchGif,
  StartProject,
} from "@/public/gif";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden size-full min-h-[48rem] pt-24 pb-16 -mt-28">
      <div className="z-20 w-full max-w-[76rem] mx-auto flex flex-col py-20 justify-center items-center gap-8">
        {/* HERO CONTENT */}
        <div className="max-sm:max-w-[21rem] text-center size-full flex flex-col justify-center items-center gap-6">
          {/* PILL DIV */}
          <PillDiv className="mb-0 border-primary100 text-white text-[clamp(0.75rem,_3vw,_1.125rem)]">
            Welcome to SellCrea8
          </PillDiv>

          {/* HERO TITLE */}
          <h1 className="-tracking-[0.05rem] lg:-tracking-[0.225rem] leading-[clamp(3rem,_8vw,_6rem)] text-[clamp(2.5rem,_8vw,_5.5rem)] font-extrabold text-primary50">
            Your One-Stop <br />
            Creative and Digital <br className="max-lg:hidden" />
            Solutions <br className="sm:hidden" />Hub
          </h1>

          {/* HERO CONTENT */}
          <p className="text-center text-white lg:max-w-[55rem] sm:px-8">
            SellCrea8 is a productized eCommerce platform designed by SMG to
            deliver affordable, high-quality, and personalized creative and
            digital services. Simplify your service access and project
            management with our user-friendly interface.
          </p>
        </div>

        <Button label="Get Started" classNames="w-fit" link="/shop" />

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
        <Image
          src={ColorPalette}
          alt="launch"
          className="absolute top-36 left-60 size-[4.75rem] max-lg:hidden"
        />
        <Image
          src={IdeaBulb}
          alt="launch"
          className="absolute top-36 right-60 size-[4.75rem] max-lg:hidden"
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
