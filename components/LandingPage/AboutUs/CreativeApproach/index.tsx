import { CheckCircleIcon } from "@/public/icons";
import React from "react";


export default function Approach() {
  const approachData = [
    "At SellCrea8, we pride ourselves on our innovative approach to delivering creative and digital solutions.",
    "Our team of talented professionals is dedicated to staying ahead of the latest trends and technologies.",
    "We ensure that we provide fresh and effective strategies tailored to your needs.",
    "We believe in the power of creativity to transform brands and elevate projects.",
    "Our dynamic approach reflects this commitment.",
    "By combining cutting-edge techniques with personalized service, we deliver results that not only meet but exceed your expectations.",
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="max-w-2xl w-full text-2xl font-bold text-gray-900 mb-8 lg:text-5xl text-left">
          Our Dynamic and Creative Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approachData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-8 bg-white border rounded-lg shadow-sm md:gap-8"
            >
              <div>
                <CheckCircleIcon />
              </div>
              <p className="text-gray-700 text-left text-sm md:text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
