import React from "react";
import { ChooseSellCre8Data } from "./components/ChooseSellCre8Data";
import WhyCard from "./components/WhyCard";

function WhyChooseSellCre8() {
  return (
    <section className="w-full space-y-12 pt-[60px] pb-0 md:pb-12 lg:pb-[100px] ">
      <h2 className="text-2xl md:text-4xl lg:text-5.5xl">
        Why Choose{" "}
        <span className="text-2xl md:text-4xl lg:text-5.5xl text-primary500">
          {" "}
          SellCre8
        </span>
      </h2>

      <div className="flex w-full overflow-x-auto md:overflow-x-visible gap-5 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-[38.67px]">
        {ChooseSellCre8Data.map((data, dataIdx) => {
          return (
            <WhyCard
              key={dataIdx}
              iconSrc={data.iconSrc}
              iconAlt={data.iconAlt}
              title={data.title}
              body={data.body}
            />
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseSellCre8;
