import {
  Highlight,
  ProjectServiceIcon,
  SecurePaymentServiceIcon,
  TailoredServiceIcon,
  UserFriendlyServiceIcon,
} from "@/public/icons";
import React from "react";

const SERVICES = [
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
    <div className="mb-5">{icon}</div>
    <h4>{title}</h4>
    <p className="text-grey500">{description}</p>
  </div>
);

const Service = () => {
  return (
    <div className="py-20 max-w-[1216px] mx-auto">
      <h2 className="flex">
        Why Choose <span className="text-primary400"> SellCrea8?</span>{" "}
        <Highlight />
      </h2>

      <div className="grid grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
