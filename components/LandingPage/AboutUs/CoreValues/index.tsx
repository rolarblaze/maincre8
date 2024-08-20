"use client";
import React from "react";
import Image from "next/image";

const coreValues = [
  {
    title: "Result-Oriented",
    icon: "/icons/result-oriented.svg",
  },
  {
    title: "Authentic",
    icon: "/icons/authentic.svg",
  },
  {
    title: "Professionalism",
    icon: "/icons/professionalism.svg",
  },
  {
    title: "Innovation",
    icon: "/icons/innovation.svg",
  },
  {
    title: "Diligent",
    icon: "/icons/diligent.svg",
  },
];

const CoreValues = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl text-grey25 font-bold mb-8 md:text-5xl">
          Our Core Values
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={`flex flex-col gap-6 items-center py-6 px-4.5 lg:px-5 bg-white rounded-lg shadow max-lg:last:col-span-2`}
            >
              <div className="w-10 h-10 md:size-14 lg:w-20 lg:h-20 relative">
                <Image
                  src={value.icon}
                  alt={`${value.title} Icon`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-base lg:text-xl text-ash10 font-medium">
                {value.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
