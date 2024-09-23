import assetLibrary from "@/library";
import Image from "next/image";

const LearnMoreSection = () => {
  return (
    <section className="relative my-[6.25rem] pt-10 pb-8 px-4 sm:pl-[3.75rem] sm:py-[6.25rem] bg-gradient-to-tr from-[#4490EA] to-[#0C407E] to-70% flex max-lg:flex-col justify-start rounded-3xl sm:rounded-[1.875rem] overflow-hidden">
      <div className="max-w-[30rem] z-[2]">
        <h2 className="text-2xl sm:text-[2.375rem] text-pretty font-semibold  leading-8 sm:leading-[2.85rem] text-white">
          Your Creative <br /> Hub, Simplified
        </h2>
        <p className="mt-3 sm:mt-6 font-medium text-primary100 sm:text-primary200 leading-6">
          The dashboard is your central hub for managing all your creative
          projects. Track progress, review designs, and communicate directly
          with your team, all in one streamlined space. Whether you’re
          requesting new assets or giving feedback, the Creative Hub makes
          collaboration easy, efficient, and organized, keeping you in control
          of your brand’s vision.
        </p>

        <button className="mt-8 px-12 py-3 bg-white font-medium text-sm text-[#111827] rounded-lg">
          Learn More
        </button>
      </div>

      <figure className="relative size-full max-lg:mt-20 lg:ml-16 lg:-mr-20 max-md:min-h-40 max-lg:min-h-72">
        <div className="absolute -top-8 sm:-top-12 bg-primary50/10 size-full max-w-72 max-sm:ml-4 sm:max-w-lg lg:max-w-md max-md:h-52 max-lg:h-80 lg:h-96 rounded-2xl border border-primary50/50" />

        <Image
          width={720}
          height={540}
          alt="Learn more about SellCrea8"
          src={assetLibrary.learnMoreImage}
          className="z-[2] absolute -top-4 left-8 object-cover"
        />
      </figure>

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
    </section>
  );
};
export default LearnMoreSection;
