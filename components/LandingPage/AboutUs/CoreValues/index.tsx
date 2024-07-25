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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={value.title}
              className={`flex flex-col gap-6 items-center py-6 px-5 bg-white rounded-lg shadow ${
                index === coreValues.length - 1
                  ? "col-span-2 md:col-span-1 mx-auto w-1/2"
                  : ""
              }`}
            >
              <div className="w-10 h-10 md:w-20 md:h-20 relative">
                <Image
                  src={value.icon}
                  alt={`${value.title} Icon`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-base md:text-xl text-ash10 font-medium">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
