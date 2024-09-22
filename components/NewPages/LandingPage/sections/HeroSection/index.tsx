const HeroSection = () => {
  return (
    <section className="py-[3.75rem] space-y-10">
      <div className="min-h-[32.675rem]  text-center bg-gradient-to-tr from-[#4490EA] to-[#0C407E] px-28 pt-28 pb-20 flex flex-col justify-center items-center gap-4 rounded-[1.25rem]">
        <h1 className="text-primary50">
          Elevate Your Brand with Subscription-Based Creativity
        </h1>
        <p className="max-w-[45rem] font-light text-xl text-white leading-8">
          SellCrea8 is a productized eCommerce platform designed by SMG to
          deliver affordable, high-quality, and personalized creative and
          digital services.
        </p>

        <div className="mt-4 font-medium text-lg flex justify-center items-center gap-6">
          <button className="py-3.5 px-12 text-base bg-white text-grey800 rounded-lg">
            Get Started
          </button>

          <button className="py-4 px-6 border border-white text-white flex justify-center items-center gap-2.5 rounded-lg">
            <span>Watch demo video</span>
            <span className="size-5 block bg-white rounded-md"></span>
          </button>
        </div>
      </div>

      <div>Compnents</div>
    </section>
  );
};
export default HeroSection;
