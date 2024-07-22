"use client";
import React from "react";
import { motion } from "framer-motion";

const BrandSection = () => {
  const brands = ["DevSEAL", "SellPlanner", "SellMerch", "Piazza"];
  const duplicatedBrands = [...brands, ...brands]; // Duplicate the brands array

  return (
    <section className="w-full bg-primary900 z-20 overflow-hidden">
      <div className="text-center space-y-8 py-20 max-w-[76rem] flex flex-col justify-center items-center mx-auto">
        {/* CONTENT */}
        <div className="space-y-4.5">
          <h2 className="text-5.5xl font-bold tracking-[-0.105rem] text-grey50">
            Brands We've Served
          </h2>
          <p className="font-medium text-white/70">
            Trusted by Leading Companies
          </p>
        </div>

        {/* LOGOS */}
        <motion.div
          className="flex justify-center items-center gap-x-28"
          initial={{ x: 0 }}
          animate={{ x: [0, -100, 0, 100, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          style={{ whiteSpace: "nowrap" }}
        >
          {duplicatedBrands.map((item, index) => (
            <div
              key={index}
              className="inline-block text-2xl font-bold text-grey50 leading-8 tracking-tight border border-grey600 p-4 rounded-lg"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandSection;