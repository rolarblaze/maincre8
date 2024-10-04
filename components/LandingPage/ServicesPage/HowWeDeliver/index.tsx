const HowWeDeliver = () => {
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
    <div className="max-w-[1216px] mx-auto py-20 pl-5 lg:pl-0">
      <h2 className="mb-6">How we deliver</h2>

      {/* Desktop */}
      <div className="relative hidden lg:block">
        <div className="w-full text-grey900 flex items-center justify-between absolute top-12 text-lg font-semibold">
          {TopDeliveries.map((p) => (
            <p className="max-w-[204px] text-center" key={p}>
              {p}
            </p>
          ))}
        </div>

        <div className="relative top-44 left-7  w-full max-w-[700px] mx-auto  text-grey900 flex justify-between  !text-lg font-semibold">
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

        <div className="absolute bottom-28 right-28  w-full text-grey900 max-w-[700px] flex items-center justify-between  text-lg font-semibold ">
          {FirstBottomDeliveries.map((p) => (
            <p className="max-w-[204px] text-center" key={p}>
              {p}
            </p>
          ))}
        </div>

        <div className="relative bottom-0   w-full max-w-[700px] right-28 mx-auto  text-grey900 flex justify-between  !text-lg font-semibold ">
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

        <div className="flex flex-col gap-11 mb-2 text-grey900 font-semibold ">
          {DeliveriesSteps.map((p, idx) => (
            <p key={`delivery-step-${idx}`} className="mb-1.5 text-sm md:text-lg">{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWeDeliver;
