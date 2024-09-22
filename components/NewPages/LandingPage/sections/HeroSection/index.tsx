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

      <div className="flex flex-wrap justify-between items-start gap-8">
        {components.map(({ title }) => (
          <div
            key={title}
            className={`
              size-fit space-y-5 px-2.5 pt-5 pb-2.5 border rounded-2xl
              ${getBorderClass(title)}
            `}
          >
            <h3 className="font-bold text-xl text-grey900 leading-[1.6875rem] px-2.5">
              {title}
            </h3>

            <div
              className={`
              h-40 w-[12.25rem] bg-error-50 rounded-[0.625rem] 
              ${getBackgroundClass(title)}
            `}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HeroSection;

const components = [
  {
    title: "Brand Design",
  },
  {
    title: "Graphic Designs",
  },
  {
    title: "Digital Marketing",
  },
  {
    title: "Content Creation",
  },
  {
    title: "All-In-One Bundle",
  },
];

const getBorderClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "border-error-50";
    case "Graphic Designs":
      return "border-warning-50";
    case "Digital Marketing":
      return "border-success-50";
    case "Content Creation":
      return "border-brown-50";
    case "All-In-One Bundle":
      return "border-primary50";
    default:
      return "";
  }
};

const getBackgroundClass = (title: string) => {
  switch (title) {
    case "Brand Design":
      return "bg-error-50";
    case "Graphic Designs":
      return "bg-warning-50";
    case "Digital Marketing":
      return "bg-success-50";
    case "Content Creation":
      return "bg-brown-50";
    case "All-In-One Bundle":
      return "bg-primary50";
    default:
      return "";
  }
};
