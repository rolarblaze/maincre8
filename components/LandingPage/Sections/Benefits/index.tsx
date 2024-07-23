import React from "react";
import { Benefits1, Benefits2, Section } from "./Components";

const Benefits = () => {
  return (
    <section className="py-20 w-full bg-white z-20">
      <div className="max-w-[1216px] mx-auto text-center">
        <Section
          title="Businesses"
          subtitle="Maximize Your Business Potential with SellCrea8"
          benefits={Benefits1}
          buttonLabel="Discover More Benefits"
        />
        <Section
          title="Individuals"
          subtitle="Unlock Your Creative Potential with SellCrea8"
          benefits={Benefits2}
          buttonLabel="Discover More Benefits"
          reverse={true}
        />
      </div>
    </section>
  );
};

export default Benefits;
