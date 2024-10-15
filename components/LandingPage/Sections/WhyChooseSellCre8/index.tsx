import React from "react";
import { ChooseSellCre8Data } from "./components/ChooseSellCre8Data";
import WhyCard from "./components/WhyCard";

function WhyChooseSellCre8() {
  return (
    <section className="w-full space-y-12 pb-0 pt-[60px] md:pb-12 lg:pb-[100px]">
      <h2 className="text-2xl md:text-4xl lg:text-5.5xl">
        Why Choose{" "}
        <span className="text-2xl text-primary500 md:text-4xl lg:text-5.5xl">
          {" "}
          SellCre8?
        </span>
      </h2>

      <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 md:place-items-start md:gap-[38.67px] md:overflow-x-visible lg:grid-cols-4">
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
