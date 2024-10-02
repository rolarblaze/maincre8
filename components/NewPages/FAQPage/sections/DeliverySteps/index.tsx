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
    <section className="flex w-full flex-col gap-[3.75rem] px-16 py-16 md:px-[6.25rem] md:py-[6.25rem]">
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
            {TopDeliveries.map((p) => (
              <p className="max-w-[204px] text-center" key={p}>
                {p}
              </p>
            ))}
          </div>

          <div className="relative left-7 top-[9.2rem] mx-auto flex w-full max-w-[700px] justify-between !text-lg font-semibold text-grey900 px-16">
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

          <div className="absolute bottom-[6.5rem] right-20 flex w-full max-w-[550px] items-center justify-between text-lg font-semibold text-grey900">
            {FirstBottomDeliveries.map((p) => (
              <p className="max-w-[204px] text-center" key={p}>
                {p}
              </p>
            ))}
          </div>

          <div className="relative bottom-0 mt-2 right-28 mx-auto flex w-full max-w-[650px] pl-9 justify-between !text-lg font-semibold text-grey900">
            {SecondBottomDeliveries.map((p) => (
              <p className="max-w-[204px] text-center" key={p}>
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

          <div className="mb-2 flex flex-col gap-11 font-semibold text-grey900">
            {DeliveriesSteps.map((p, idx) => (
              <p
                key={`delivery-step-${idx}`}
                className="mb-1.5 text-sm md:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeliverySteps;
