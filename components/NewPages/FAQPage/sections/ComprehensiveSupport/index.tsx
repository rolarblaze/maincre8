import Button from "@/components/Button";
import assetLibrary from "@/library";
import Image from "next/image";
import React from "react";

function ComprehensiveSupport() {
  return (
    <section className="flex w-full px-0 md:px-[6.25rem] md:py-[6.25rem]">
      <div className="flex flex-col justify-between gap-5 rounded-3xl bg-grey50 px-8 md:flex-row md:px-12">
        <div className="flex w-full max-w-[500px] flex-col gap-y-4 py-12">
          <h2 className="text-[1.5rem] leading-8 text-textMain sm:text-[2rem] sm:leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem]">
            Comprehensive Support on Every Package
          </h2>
          <p className="text-base text-grey600 md:text-lg">
            Enjoy dedicated customer and project support with every SellCrea8
            package. Our team is here to assist you at every step, ensuring
            seamless collaboration, timely deliverables, and tailored solutions
            to meet your creative needs.
          </p>
          <Button
            label="Contact Us"
            classNames="self-start !w-auto py-2 sm:py-4 hover:bg-primary700"
            link="/contact-us"
          />
        </div>
        <Image
          src={assetLibrary.packageImg}
          alt="Package Image"
          width={460}
          height={531}
          className="h-full w-full md:w-[400px]"
        />
      </div>
    </section>
  );
}

export default ComprehensiveSupport;
