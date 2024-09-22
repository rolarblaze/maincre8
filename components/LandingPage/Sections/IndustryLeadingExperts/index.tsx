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
    <section className="w-full px-5 md:px-20 lg:px-[100px] mb-10">
      <div className="w-full flex flex-col md:flex-row justify-between gap-[56px] bg-primary50 rounded-[20px] md:rounded-3xl lg:rounded-3xl px-[13px] md:px-0 md:pl-10 lg:pl-16 py-5 md:py-10 lg:py-16">
        <div className="space-y-6 w-full max-w-full md:max-w-[410px]">
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
          {imageData.map((image, imageIdx) => (
            <Image
              key={imageIdx}
              src={image.imgSrc}
              alt={image.imgAlt}
              width={130}
              height={200}
              className="w-[63.7px] h-[98px] md:w-[130px] md:h-[200px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustryLeadingExperts;
