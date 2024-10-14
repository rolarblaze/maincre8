"use client";
import assetLibrary from "@/library";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { proudlyMadeData } from "./components/proudlyMadeData";
import { FadeUpDiv } from "@/components";

function ProudlyMadeSection() {
  const controls = useAnimation(); // Control animation manually
  const [xValue, setXValue] = useState(-1000); // Initial animation distance
  const [animationSpeed, setAnimationSpeed] = useState(8); // Faster initial speed

  useEffect(() => {
    // Function to calculate the `x` value based on screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      // Dynamically set the distance to move based on screen size
      if (screenWidth < 768) {
        setXValue(-3000); // For small screens (mobile)
      } else if (screenWidth < 1024) {
        setXValue(-3000); // For medium screens (tablets)
      } else {
        setXValue(-3000); // For large screens (desktop)
      }
    };

    handleResize(); // Set initial value on mount
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Function to slow down animation on hover
  const handleHover = () => {
    controls.start({
      x: xValue,
      transition: { ease: "linear", duration: 40, repeat: Infinity },
    });
  };

  // Function to restore speed when hover ends
  const handleMouseLeave = () => {
    controls.start({
      x: xValue,
      transition: { ease: "linear", duration: 10, repeat: Infinity },
    });
  };

  return (
    <FadeUpDiv className="w-full space-y-8 py-5 md:py-20">
      <h3 className="text-[2rem]">
        Proudly Made by{" "}
        <span className="text-[2rem] text-primary500">SellCrea8</span>
      </h3>
      {/* Moving Cards */}
      <motion.div
        className="flex scroll-pl-5 gap-10"
        animate={controls} // Animating using the controls
        initial={{ x: 0 }} // Starting position
        transition={{
          repeat: Infinity,
          duration: animationSpeed,
          ease: "linear",
        }}
        style={{ whiteSpace: "nowrap" }}
        onMouseEnter={handleHover} // Slow down on hover
        onMouseLeave={handleMouseLeave} // Restore speed when hover ends
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

      {/* Band image */}
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
    </FadeUpDiv>
  );
}

export default ProudlyMadeSection;
