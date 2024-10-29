"use client";
import assetLibrary from "@/library";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { proudlyMadeData } from "./components/proudlyMadeData";
import { FadeUpDiv } from "@/components";

function ProudlyMadeSection() {
  const controls = useAnimation();
  const [xValue, setXValue] = useState(-1000);
  const [animationSpeed, setAnimationSpeed] = useState(8); // Initial speed

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setXValue(-3000);
      } else if (screenWidth < 1024) {
        setXValue(-3000);
      } else {
        setXValue(-3000);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    controls.start({
      x: xValue,
      transition: {
        ease: "linear",
        duration: animationSpeed,
        repeat: Infinity,
      },
    });

    return () => window.removeEventListener("resize", handleResize);
  }, [xValue, animationSpeed, controls]);

  const handleHover = () => {
    setAnimationSpeed(40); // Slow down on hover
  };

  const handleMouseLeave = () => {
    setAnimationSpeed(8); // Restore original speed
  };

  // Trigger the animation when speed changes
  useEffect(() => {
    controls.start({
      x: xValue,
      transition: {
        ease: "linear",
        duration: animationSpeed,
        repeat: Infinity,
      },
    });
  }, [animationSpeed, xValue, controls]);

  return (
    <FadeUpDiv className="w-full space-y-8 py-5 md:py-20">
      <h3 className="text-[2rem]">
        Proudly Made by{" "}
        <span className="text-[2rem] text-primary500">SellCrea8</span>
      </h3>
      <motion.div
        className="flex scroll-pl-5 gap-10"
        animate={controls}
        initial={{ x: 0 }}
        transition={{
          repeat: Infinity,
          duration: animationSpeed,
          ease: "linear",
        }}
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

      <div className="flex w-full justify-between rounded-lg bg-gradient-to-tr from-[#E8F1FC] to-[#93BFF3]">
        <Image
          src={assetLibrary.brandImg}
          alt="Brand Image"
          width={225.02}
          height={222.78}
          className="h-full max-h-[9rem] w-full max-w-[9rem] md:max-h-[12rem] md:max-w-[12rem]"
        />
        <p className="flex max-w-[25rem] flex-col justify-center gap-4 py-5 pr-10 text-end font-bold text-primary50 md:gap-10">
          <span className="text-2xl md:text-[3.5rem]">Your brand is</span>
          <span className="text-2xl md:text-[3.5rem]">next.</span>
        </p>
      </div>
    </FadeUpDiv>
  );
}

export default ProudlyMadeSection;
