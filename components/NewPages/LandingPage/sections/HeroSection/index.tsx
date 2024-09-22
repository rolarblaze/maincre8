const HeroSection = () => {
  return (
    <section className="py-5 lg:py-[3.75rem] space-y-10">
      <div className="h-fit text-center bg-gradient-to-tr from-[#4490EA] to-[#0C407E] px-4 pt-14 pb-10 md:pb-16 md:px-10 lg:px-28 lg:pt-28 lg:pb-20 flex flex-col justify-center items-center gap-4 rounded-[1.25rem]">
        <h1 className="max-w-80 text-primary50 text-[2rem] sm:text-5xl lg:text-[3.5rem] font-bold leading-10 md:leading-[3.5rem] lg:leading-[4rem] sm:max-w-[50rem]">
          Elevate Your Brand with Subscription-Based Creativity
        </h1>

        <p className="max-w-80 font-light text-pretty text-base sm:text-xl text-white leading-6 sm:leading-8 sm:max-w-[45rem] ">
          SellCrea8 is a productized eCommerce platform designed by SMG to
          deliver affordable, high-quality, and personalized creative and
          digital services.
        </p>

        <div className="mt-4 font-medium text-lg flex justify-center items-center gap-6">
          <button className="py-3.5 px-12 text-base bg-white text-grey800 rounded-lg">
            Get Started
          </button>

          <button className="py-4 px-6 border border-white text-white flex justify-center items-center gap-2.5 rounded-lg max-md:hidden">
            <span>Watch demo video</span>
            <span className="size-5 block bg-white rounded-md "></span>
          </button>
        </div>
      </div>

      <div>Compnents</div>
    </section>
  );
};
export default HeroSection;
