"use client";
import assetLibrary from "@/library";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { proudlyMadeData } from "./components/proudlyMadeData";

function ProudlyMadeSection() {
  const [xValue, setXValue] = useState(0); // State to store the `x` animation value
  const [animationSpeed, setAnimationSpeed] = useState(20); // Control speed of animation

  useEffect(() => {
    // Function to calculate the `x` value based on screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        // For small screens (mobile), shorter scroll distance
        setXValue(-800);
      } else if (screenWidth < 1024) {
        // For medium screens (tablets)
        setXValue(-1000);
      } else {
        // For large screens (desktop)
        setXValue(-1500);
      }
    };

    handleResize(); // Set initial value on mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);
  // Function to slow down animation on hover
  const handleHover = () => {
    setAnimationSpeed(40); // Slow down animation speed on hover
  };

  // Function to restore speed when hover ends
  const handleMouseLeave = () => {
    setAnimationSpeed(20); // Restore original speed when hover ends
  };
  return (
    <section className="w-full space-y-8 py-5 md:py-20">
      <h3 className="text-[2rem]">
        Proudly Made by{" "}
        <span className="text-[2rem] text-primary500">SellCrea8</span>
      </h3>
      {/* Cards */}
      <motion.div
        className="flex scroll-pl-5 gap-10"
        initial={{ x: 0 }}
        animate={{ x: xValue }}
        transition={{ repeat: Infinity, duration: animationSpeed, ease: "linear" }}
        style={{ whiteSpace: "nowrap" }}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {proudlyMadeData.map((card, cardIdx) => (
          <Image
            key={cardIdx}
            src={card.imgSrc}
            alt={card.imgAlt}
            width={400}
            height={372}
            className="h-[229px] w-full max-w-[296.5px] md:h-[372px] md:max-h-none md:w-[400px] md:max-w-none"
          />
        ))}
      </motion.div>
      <Image
        src={assetLibrary.nextBrandImage}
        alt="Next Brand Image"
        width={1240}
        height={168}
        className="hidden md:block md:h-[168px] md:max-w-[1240px]"
      />
      <Image
        src={assetLibrary.mobileNextBrandImage}
        alt="Next Brand Image"
        width={339}
        height={104}
        className="h-[150px] w-full md:hidden"
      />
    </section>
  );
}

export default ProudlyMadeSection;
