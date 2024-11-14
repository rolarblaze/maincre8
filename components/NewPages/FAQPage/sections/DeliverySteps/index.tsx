import assetLibrary from "@/library";
import Image from "next/image";
import React from "react";

function DeliverySteps() {
  const TopDeliveries = [
    "We Receive Your Brief",
    "Initiate Research and Brand Analysis",
    "Sync with You on a Project Initiation Call",
  ];
  const SecondTopDeliveries = [
    "Distill Your Brief  ",
    "Define Benchmark Creativity",
  ];

  const FirstBottomDeliveries = [
    "Execute According to Plan",
    "Set Timelines and Milestones",
  ];

  const SecondBottomDeliveries = [
    "Close It with a Project Handover Call ",
    "Onboard You in Our Project Tracker ",
  ];

  const DeliveriesSteps = [
    ...TopDeliveries,
    ...SecondTopDeliveries,
    ...FirstBottomDeliveries,
    ...SecondBottomDeliveries,
  ];
  return (
    <section className="flex w-full flex-col items-center gap-6 px-0 py-16 md:items-start md:gap-[3.75rem] md:px-[6.25rem] md:py-[6.25rem]">
      <h3 className="mb-6 text-center">How we deliver</h3>
      <div className="rounded-3xl bg-grey50 md:px-12 md:py-12">
        {/* <Image
          src={assetLibrary.roadmapImg}
          alt="RoadMap"
          width={1099}
          height={397}
          className="md:h-[397px] md:w-[1099px]"
        /> */}
        {/* Desktop */}
        <div className="relative hidden lg:block">
          <div className="absolute top-12 flex w-full items-center justify-between text-lg font-semibold text-grey900">
            {TopDeliveries.map((p, i) => (
              <p
                className={`max-w-[204px] text-center ${i === 1 ? "ml-4" : ""}`}
                key={p}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="relative left-7 top-[9.2rem] mx-auto flex w-full max-w-[700px] justify-between px-16 !text-lg font-semibold text-grey900">
            {SecondTopDeliveries.map((p) => (
              <p className="max-w-[204px] text-center" key={p}>
                {p}
              </p>
            ))}
          </div>

          <img
            src={"/images/deliver-steps.svg"}
            alt="how we deliver"
            width={"100%"}
            height={"100%"}
          />

          <div className="absolute bottom-[6.5rem] right-20 flex w-full max-w-[580px] items-center justify-between text-lg font-semibold text-grey900">
            {FirstBottomDeliveries.map((p) => (
              <p className="max-w-[180px] text-center" key={p}>
                {p}
              </p>
            ))}
          </div>

          <div className="relative bottom-0 right-28 mx-auto mt-2 flex w-full max-w-[650px] justify-between pl-9 !text-lg font-semibold text-grey900">
            {SecondBottomDeliveries.map((p) => (
              <p className="max-w-[200px] text-center" key={p}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="relative flex gap-4 lg:hidden">
          <img
            src={"/images/deliver-steps-mob.svg"}
            alt="how we deliver"
            width={"30px"}
            height={"100%"}
            className="h-fit"
          />

          <div className="flex flex-col gap-[2.6rem] font-semibold text-grey900 sm:gap-16 md:mt-0 md:gap-9">
            {DeliveriesSteps.map((step, idx) => (
              <p
                key={`delivery-step-${idx}`}
                className={`text-sm md:text-lg ${idx === 3 || idx === 4 || idx === 5 ? "-mt-[0.1px]" : "mt-[0.8px]"} sm:mt-0.5`}
              >
                {step}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySteps;
