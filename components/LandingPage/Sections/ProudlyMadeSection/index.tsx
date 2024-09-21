import assetLibrary from "@/library";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { proudlyMadeData } from "./components/proudlyMadeData";

function ProudlyMadeSection() {
  return (
    <section className="space-y-8 py-20 pl-14 md:pl-[100px] w-full">
      <h3 className="text-[2rem]">
        Proudly Made by{" "}
        <span className="text-primary500 text-[2rem]">SellCrea8</span>
      </h3>
      {/* Cards */}
      <motion.div
        className="flex gap-10"
        initial={{ x: 0 }}
        animate={{ x: -2800 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ whiteSpace: "nowrap" }}
      >
        {proudlyMadeData.map((card, cardIdx) => (
          <Image
            key={cardIdx}
            src={card.imgSrc}
            alt={card.imgAlt}
            width={400}
            height={372}
            className="w-full md:w-[400px] h-[372px]"
          />
        ))}
      </motion.div>
      <Image
        src={assetLibrary.nextBrandImage}
        alt="Next Brand Image"
        width={1240}
        height={168}
        className="w-full max-w-full md:max-w-[1240px] h-[168px]"
      />
    </section>
  );
}

export default ProudlyMadeSection;
