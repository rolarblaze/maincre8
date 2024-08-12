"use client";
import {
  Highlight,
  HighlightMobile,
  ProjectServiceIcon,
  SecurePaymentServiceIcon,
  TailoredServiceIcon,
  UserFriendlyServiceIcon,
} from "@/public/icons";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <TailoredServiceIcon />,
    title: "Tailored Service Bundles",
    description:
      "Customize creative and digital services to fit your unique needs at highly competitive rates.",
  },
  {
    icon: <UserFriendlyServiceIcon />,
    title: "User-Friendly Platform",
    description:
      "Access services and manage projects with ease through our intuitive dashboard.",
  },
  {
    icon: <SecurePaymentServiceIcon />,
    title: "Secure Payment Integration",
    description:
      "Multiple payment methods with a secure gateway for hassle-free transactions.",
  },
  {
    icon: <ProjectServiceIcon />,
    title: "Comprehensive Project Management",
    description:
      "Track progress, assign tasks, and meet deadlines efficiently.",
  },
];

const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) => (
  <div className="border border-grey200 rounded-lg p-5 flex flex-col gap-3 text-start items-start">
    <div className="mb-4 md:mb-5">{icon}</div>
    <h4 className="font-semibold line-clamp-2 max-sm:text-base">{title}</h4>
    <p className="text-grey500">{description}</p>
  </div>
);

const Service = () => {
  return (
    <div className="pb-12 pt-8 lg:py-20 space-y-8 max-w-[1216px] mx-auto max-xl:px-6">
      <motion.h2
        className="flex justify-start text-2xl lg:text-[3.5rem] items-center"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        Why Choose{" "}
        <span className="text-primary400 text-2xl lg:text-[3.5rem] ml-1.5"> SellCrea8?</span>
       
        <Highlight className="max-md:hidden" />
        <HighlightMobile className="md:hidden" />
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        viewport={{
          margin: "-200px",
          once: true,
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
