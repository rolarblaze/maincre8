import Link from "next/link";
import Image from "next/image";
import assetLibrary from "@/library";
import { FadeUpDiv } from "@/components";

const LearnMoreSection = () => {
  return (
    <FadeUpDiv className="relative mb-[6.25rem] flex justify-start overflow-hidden rounded-3xl bg-gradient-to-tr from-[#4490EA] to-[#0C407E] to-70% px-4 pb-8 pt-10 max-lg:flex-col sm:rounded-[1.875rem] sm:py-[6.25rem] sm:pl-[3.75rem]">
      <div className="z-[2] max-w-[30rem]">
        <h2 className="text-pretty text-2xl font-semibold leading-8 text-white sm:text-[2.375rem] sm:leading-[2.85rem]">
          The Best <br /> Partner You’ll <br /> Ever Have
        </h2>
        <p className="mt-3 font-medium leading-6 text-primary100 sm:mt-6 sm:text-primary200">
          The dashboard is your central hub for managing all your creative
          projects. Track progress, review designs, and communicate directly
          with your team, all in one streamlined space. Whether you’re
          requesting new assets or giving feedback, SellCrea8 makes
          collaboration easy, efficient, and organized, keeping you in control
          of your brand&apos;s vision.
        </p>

        <Link
          href={"/signup"}
          className="mt-8 block w-fit rounded-lg bg-white px-12 py-3 text-sm font-medium text-[#111827]"
        >
          Learn More
        </Link>
      </div>

      <figure className="relative size-full max-lg:mt-20 max-lg:min-h-72 max-md:min-h-40 lg:-mr-20 lg:ml-16">
        <div className="absolute -top-8 size-full max-w-72 rounded-2xl border border-primary50/50 bg-primary50/10 max-lg:h-80 max-md:h-52 max-sm:ml-4 sm:-top-12 sm:max-w-lg lg:h-96 lg:max-w-md" />

        <Image
          width={720}
          height={540}
          alt="Learn more about SellCrea8"
          src={assetLibrary.learnMoreImage}
          className="absolute -top-4 left-8 z-[2] object-cover"
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
    </FadeUpDiv>
  );
};
export default LearnMoreSection;
