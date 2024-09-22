const LearnMoreSection = () => {
  return (
    <section className="my-[6.25rem] pt-10 pb-16 px-4 sm:px-[3.75rem] sm:py-[6.25rem] bg-gradient-to-tr from-[#4490EA] to-[#0C407E] flex max-lg:flex-col justify-start gap-16 rounded-3xl sm:rounded-[1.875rem]">
      <div className="max-w-[30rem]">
        <h2 className="text-2xl sm:text-[2.375rem] text-pretty font-semibold  leading-8 sm:leading-[2.85rem] text-white">
          Your Creative <br /> Hub, Simplified
        </h2>
        <p className="mt-3 sm:mt-6 font-medium text-primary100 sm:text-primary200 leading-6">
          The dashboard is your central hub for managing all your creative
          projects. Track progress, review designs, and communicate directly
          with your team, all in one streamlined space. Whether you’re
          requesting new assets or giving feedback, the Creative Hub makes
          collaboration easy, efficient, and organized, keeping you in control
          of your brand’s vision.
        </p>

        <button className="mt-8 px-12 py-3 bg-white font-medium text-sm text-[#111827] rounded-lg">
          Learn More
        </button>
      </div>

      <div className="bg-primary50/20 max-sm:ml-4 h-56 sm:h-80 max-w-72 sm:max-w-96 size-full rounded-2xl border border-primary50 "></div>
    </section>
  );
};
export default LearnMoreSection;
