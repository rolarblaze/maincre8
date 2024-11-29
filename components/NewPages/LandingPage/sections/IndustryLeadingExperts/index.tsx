import React from "react";
import Image from "next/image";
import assetLibrary from "@/library";
import FadeUpDiv from "@/components/UI/FadeUpDiv";

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
    <FadeUpDiv className="mb-10 w-full md:mb-0">
      <div className="flex w-full flex-col justify-between gap-[56px] rounded-[20px] bg-primary50 px-[13px] py-5 md:flex-row md:rounded-3xl md:px-0 md:py-10 md:pl-10 lg:rounded-3xl lg:py-16 lg:pl-16">
        <div className="w-1/2 xs:max-md:w-full space-y-6">
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
        <div className="flex w-1/2 justify-between items-center xs:max-md:w-full xs:max-md:justify-between xs:max-md:gap-0">
          {imageData.map((image, imageIdx, imageArr) => (
            <figure
              key={image.imgAlt}
              className={`relative w-[23%] h-[70%] rounded-full xs:max-md:aspect-[1/2] xs:max-md:w-[23%] xs:max-md:object-contain overflow-hidden`}
            >
              <Image
                key={imageIdx}
                fill={true}
                src={image.imgSrc}
                alt={image.imgAlt}
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </FadeUpDiv>
  );
}

export default IndustryLeadingExperts;
