import { Icon } from "@/public/icons";
import React from "react";


const statements = [
  {
    title: "Vision",
    description:
      "Our vision at SellCrea8 is to be the leading platform for creative and digital solutions, inspiring innovation and excellence in every project. We aim to set the standard for quality and creativity, becoming the go-to resource for individuals, brands, and agencies seeking to bring their business ideas to life.",
  },
  {
    title: "Mission",
    description:
      "Our mission at SellCrea8 is to provide unique access to high-quality creative and digital solutions for individuals, brands, and agencies. We strive to empower our clients with the tools and resources they need to achieve their creative visions and business goals.",
  },
];

const MissionVision = () => {
  return (
    <section className="w-full py-20 bg-primary800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h2 className="max-w-3xl mx-auto w-full text-2xl font-bold mb-8 text-grey50 md:text-5xl">
          Sellcreat8 Mission and Vision Statement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {statements.map((statement) => (
            <div
              key={statement.title}
              className=" flex flex-col items-center gap-4 bg-primary50 rounded-lg py-8 px-12 text-grey500 text-sm md:text-base"
            >
              <div className="flex items-center gap-2">
                <div>
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold grey900">
                  {statement.title}
                </h3>
              </div>
              <p className="max-w-[474px] w-full">{statement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
