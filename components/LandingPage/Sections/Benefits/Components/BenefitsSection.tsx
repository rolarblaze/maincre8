import React from "react";
import Button from "@/components/Button";
import { HighlightDown, HighlightUp } from "@/public/icons";
import { Benefit } from "@/public/imgs";
import Card from "./BenefitsCard";

interface Benefit {
  title: string;
  description: string;
  icons: React.ReactNode;
}

interface SectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  buttonLabel: string;
  reverse?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  benefits,
  buttonLabel,
  reverse = false,
}) => {
  return (
    <div className="py-20">
      <div className="flex justify-center">
        <HighlightDown />
        <h2>
          Benefits for <span className="h2 text-primary500">{title}</span>
        </h2>
        <HighlightUp />
      </div>
      <p>{subtitle}</p>
      <div
        className={`w-full flex items-center justify-between my-8 ${
          reverse ? "flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col gap-8 max-w-[591px]">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icons}
            />
          ))}
        </div>
        <img src={Benefit.src} alt="benefits" width={"430px"} height={"100%"} />
      </div>
      <Button
        label={buttonLabel}
        classNames="!py-2 !text-xs mt-4 mb-6 w-max mx-auto"
      />
    </div>
  );
};

export default Section;
