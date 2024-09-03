import React from "react";

const Card = ({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) => {
  return (
    <div key={step} className="w-fit">
      <div className="group border border-grey200 rounded-lg p-8 text-white max-w-[385px] min-h-[175px] lg:min-h-[280px] transition-colors duration-300 hover:bg-white">
        <p className="grid place-items-center bg-primary50 text-lg md:text-3xl font-bold md:size-[56px] size-[36px] rounded-full text-black mb-4">
          {step}
        </p>
        <h4 className="mb-2 text-lg md:text-2xl leading-6 text-white group-hover:text-black">
          {title}
        </h4>
        <span className="text-base text-white group-hover:text-black">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Card;
