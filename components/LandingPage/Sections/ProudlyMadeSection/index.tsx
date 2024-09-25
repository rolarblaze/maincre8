"use client";
import assetLibrary from "@/library";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { proudlyMadeData } from "./components/proudlyMadeData";

function ProudlyMadeSection() {
  const [xValue, setXValue] = useState(0); // State to store the `x` animation value

  useEffect(() => {
    // Function to calculate the `x` value based on screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        // For small screens (mobile), shorter scroll distance
        setXValue(-1000);
      } else if (screenWidth < 1024) {
        // For medium screens (tablets)
        setXValue(-2000);
      } else {
        // For large screens (desktop)
        setXValue(-2500);
      }
    };

    handleResize(); // Set initial value on mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  return (
    <section className="space-y-8 py-5 md:py-20 w-full">
      <h3 className="text-[2rem]">
        Proudly Made by{" "}
        <span className="text-primary500 text-[2rem]">SellCrea8</span>
      </h3>
      {/* Cards */}
      <motion.div
        className="flex gap-10 scroll-pl-5"
        initial={{ x: 0 }}
        animate={{ x: xValue }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        style={{ whiteSpace: "nowrap" }}
      >
        {proudlyMadeData.map((card, cardIdx) => (
          <Image
            key={cardIdx}
            src={card.imgSrc}
            alt={card.imgAlt}
            width={400}
            height={372}
            className="w-full h-[229px] max-w-[296.5px] md:max-w-none md:max-h-none md:w-[400px] md:h-[372px]"
          />
        ))}
      </motion.div>
      <Image
        src={assetLibrary.nextBrandImage}
        alt="Next Brand Image"
        width={1240}
        height={168}
        className="hidden md:block md:max-w-[1240px] md:h-[168px]"
      />
      <Image
        src={assetLibrary.mobileNextBrandImage}
        alt="Next Brand Image"
        width={339}
        height={104}
        className=" w-full h-[150px] md:hidden"
      />
    </section>
  );
}

export default ProudlyMadeSection;
