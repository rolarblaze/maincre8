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
        <Image
          src={assetLibrary.roadmapImg}
          alt="RoadMap"
          width={1099}
          height={397}
          className="md:h-[397px] md:w-[1099px]"
        />
      </div>
    </section>
  );
}

export default DeliverySteps;
