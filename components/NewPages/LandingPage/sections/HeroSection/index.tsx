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
    <section className="py-5 lg:py-[3.75rem] space-y-10">
      <div className="relative h-fit text-center bg-gradient-to-tr from-[#4490EA] to-[#0C407E] to-70% px-5 md:px-20 lg:px-[100px] pt-14 pb-10 md:pb-16 lg:pt-28 lg:pb-20 flex flex-col justify-center items-center gap-4 rounded-[1.25rem]">
        <h1 className="z-[2] max-w-80 text-primary50 text-[2rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-10 md:leading-[3.5rem] lg:leading-[4rem] sm:max-w-[50rem]">
          Elevate Your Brand with Subscription-Based Creativity
        </h1>

        <p className="z-[2] max-w-80 font-light text-pretty text-base sm:text-xl text-white leading-6 sm:leading-8 sm:max-w-[45rem] ">
          SellCrea8 is a productized eCommerce platform designed by SMG to
          deliver affordable, high-quality, and personalized creative and
          digital services.
        </p>

        <div className="z-[2] mt-4 flex justify-center items-center gap-6">
          <button className="py-3.5 px-12 text-base font-semibold bg-white text-grey800 rounded-lg">
            Get Started
          </button>

          <button className="py-4 px-6 border border-white text-white flex justify-center items-center gap-2.5 rounded-lg max-md:hidden">
            <span className="font-medium text-lg">Watch demo video</span>
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

      <div className="flex flex-wrap justify-center lg:justify-between items-start gap-4 sm:gap-8">
        {components.map(({ title, icon }) => (
          <div
            key={title}
            className={`
              size-fit space-y-5 px-2 pt-3.5 pb-2 sm:px-2.5 sm:pt-5 sm:pb-2.5 border rounded-2xl
              ${getBorderClass(title)}
            `}
          >
            <h3 className="font-bold text-sm sm:text-xl text-grey900 leading-[1.6875rem] px-2.5">
              {title}
            </h3>

            <div
              className={`
              h-[7.5rem] w-36 sm:h-40 sm:w-[12.25rem] bg-error-50 rounded-[0.625rem] flex justify-center items-center overflow-hidden 
              ${getBackgroundClass(title)}
            `}
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
