// "use client";
// import { useState } from "react";
// import { PlusIcon } from "@/public/svgs";

const AddOnSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium leading-[150%] text-grey900">
        Recommended Add-ons
      </h2>

      {["Brand Designs", "Graphic Designs"].map((addOn) => (
        <div key={addOn} className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase text-grey400">
            {addOn}
          </h3>

          <div className="flex flex-wrap gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                id={`item-${item}`}
                className={`h-fit rounded-[0.875rem] border-2 border-grey100 p-6`}
              >
                <div className="flex min-w-28 flex-col items-center justify-center gap-3">
                  <h4 className="text-xs font-semibold uppercase">Title</h4>
                  <p className="leading-[165%] text-grey600">2 revisions</p>
                  <p className="text-lg font-semibold text-[#111827]">$ 10</p>
                </div>

                {/* <div className="flex items-center justify-center gap-3.5 pt-6">
                    <button className="rounded-lg bg-white p-2">
                      <PlusIcon fillColor="#98A2B3" />
                    </button>

                    <span className="block text-lg font-semibold text-[#111827]">
                      1
                    </span>

                    <button className="rounded-lg bg-white p-2">
                      <PlusIcon fillColor="#98A2B3" />
                    </button>
                  </div> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default AddOnSection;
