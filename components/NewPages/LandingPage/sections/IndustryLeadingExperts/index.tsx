import assetLibrary from "@/library";
import Image from "next/image";
import React from "react";

function IndustryLeadingExperts() {
  const imageData = [
    {
      imgSrc: assetLibrary.expert1,
      imgAlt: "Expert 1",
    },
    {
      imgSrc: assetLibrary.expert2,
      imgAlt: "Expert 2",
    },
    {
      imgSrc: assetLibrary.expert3,
      imgAlt: "Expert 3",
    },
    {
      imgSrc: assetLibrary.expert4,
      imgAlt: "Expert 4",
    },
  ];
  return (
    <section className="mb-10 w-full md:mb-0">
      <div className="flex w-full flex-col justify-between gap-[56px] rounded-[20px] bg-primary50 px-[13px] py-5 md:flex-row md:rounded-3xl md:px-0 md:py-10 md:pl-10 lg:rounded-3xl lg:py-16 lg:pl-16">
        <div className="w-full max-w-full space-y-6 md:max-w-[410px]">
          <h4>Work with Industry-Leading Experts</h4>
          <p className="text-grey900">
            At SellCrea8, our team of seasoned industry experts brings years of
            experience across design, digital marketing, and content creation.
            Each professional is handpicked for their creativity, strategic
            thinking, and proven success in delivering results.{" "}
          </p>
          <p className="text-grey900">
            Whether you need eye-catching visuals, compelling content, or a
            comprehensive brand strategy, our experts work closely with you to
            understand your vision and execute with precision. When you partner
            with SellCrea8, you’re getting the best in the business to elevate
            your brand and help you grow.
          </p>
        </div>
        <div className="flex justify-between md:justify-start md:gap-8 md:self-center">
          {imageData.map((image, imageIdx, imageArr) => (
            <Image
              key={imageIdx}
              src={image.imgSrc}
              alt={image.imgAlt}
              width={130}
              height={200}
              className={`h-[98px] w-[63.7px] md:h-[200px] md:w-[130px] ${imageIdx === imageArr.length - 1 ? "rounded-full" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryLeadingExperts;
