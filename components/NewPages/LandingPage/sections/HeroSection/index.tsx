import Image from "next/image";
import assetLibrary from "@/library";
import { PlayIcon } from "@/public/svgs";
import {
  AllInOneBundleSVG,
  BrandDesignSVG,
  ContentCreationSVG,
  DigitalMarketingSVG,
  GraphicDesignsSVG,
} from "@/public/icons";

const HeroSection = () => {
  return (
    <section className="space-y-10 py-5 lg:py-[3.75rem]">
      <div className="relative flex h-fit flex-col items-center justify-center gap-4 rounded-[1.25rem] bg-gradient-to-tr from-[#4490EA] to-[#0C407E] to-70% px-5 pb-10 pt-14 text-center md:px-20 md:pb-16 lg:px-[100px] lg:pb-20 lg:pt-28">
        <h1 className="z-[2] max-w-80 text-[2rem] font-bold leading-10 text-primary50 sm:max-w-[50rem] sm:text-5xl md:leading-[3.5rem] lg:text-[3.5rem] lg:leading-[4rem]">
          Elevate Your Brand with Subscription-Based Creativity
        </h1>

        <p className="z-[2] max-w-80 text-pretty text-base font-light leading-6 text-white sm:max-w-[45rem] sm:text-xl sm:leading-8">
          SellCrea8 is a productized eCommerce platform designed by SMG to
          deliver affordable, high-quality, and personalized creative and
          digital services.
        </p>

        <div className="z-[2] mt-4 flex items-center justify-center gap-6">
          <button className="rounded-lg bg-white px-12 py-3.5 text-base font-semibold text-grey800">
            Get Started
          </button>

          <button className="flex items-center justify-center gap-2.5 rounded-lg border border-white px-6 py-4 text-white max-md:hidden">
            <span className="text-lg font-medium">Watch demo video</span>
            <PlayIcon fillColor="white" className="mt-0.5" />
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

      <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 lg:justify-between">
        {components.map(({ title, icon }) => (
          <div
            key={title}
            className={`size-fit space-y-5 rounded-2xl border px-2 pb-2 pt-3.5 sm:px-2.5 sm:pb-2.5 sm:pt-5 ${getBorderClass(title)} `}
          >
            <h3 className="px-2.5 text-sm font-bold leading-[1.6875rem] text-grey900 sm:text-xl">
              {title}
            </h3>

            <div
              className={`flex h-[7.5rem] w-36 items-center justify-center overflow-hidden rounded-[0.625rem] bg-error-50 sm:h-40 sm:w-[12.25rem] ${getBackgroundClass(title)} `}
            >
              {icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeroSection;

const components = [
  {
    title: "Brand Design",
    icon: <BrandDesignSVG />,
  },
  {
    title: "Graphic Designs",
    icon: <GraphicDesignsSVG className="size-full" />,
  },
  {
    title: "Digital Marketing",
    icon: <DigitalMarketingSVG className="size-full" />,
  },
  {
    title: "Content Creation",
    icon: <ContentCreationSVG className="size-full" />,
  },
  {
    title: "All-In-One Bundle",
    icon: <AllInOneBundleSVG />,
  },
];

const getBorderClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "border-error-50";
    case "Graphic Designs":
      return "border-warning-50";
    case "Digital Marketing":
      return "border-success-50";
    case "Content Creation":
      return "border-brown-50";
    case "All-In-One Bundle":
      return "border-primary50";
    default:
      return "";
  }
};

const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "bg-error-50";
    case "Graphic Designs":
      return "bg-warning-50";
    case "Digital Marketing":
      return "bg-success-50";
    case "Content Creation":
      return "bg-brown-50";
    case "All-In-One Bundle":
      return "bg-primary50";
    default:
      return "";
  }
};
