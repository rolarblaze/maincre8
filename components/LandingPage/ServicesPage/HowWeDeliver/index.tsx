const HowWeDeliver = () => {
  const TopDeliveries = [
    "We Receive Your Brief",
    "Initiate Research and Brand Analysis ",
    "Sync with You on a Project Initiation Call",
  ];
  const SecondTopDeliveries = [
    "Distill Your Brief  ",
    "Define Benchmark Creativity   ",
  ];
  return (
    <div className="max-w-[1216px] mx-auto py-20">
      <h2>How we deliver</h2>
      <div className="relative">
        <div className="w-full text-grey900 flex items-center justify-between absolute top-10 text-lg font-semibold">
          {TopDeliveries.map((p) => (
            <p className="max-w-[204px] text-center">{p}</p>
          ))}
        </div>

        <div className="relative top-48 left-5  w-full max-w-[700px] mx-auto  text-grey900 flex justify-between  !text-lg font-semibold">
          {SecondTopDeliveries.map((p) => (
            <p className="max-w-[204px] text-center">{p}</p>
          ))}
        </div>

        <img
          src={"/images/deliver-steps.svg"}
          alt="how we deliver"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default HowWeDeliver;
