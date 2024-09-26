import { LogoFadeIcon, PlayIcon } from "@/public/svgs";

const CtaSection = () => {
  return (
    <section className="full-width content-grid relative pt-[6.25rem]">
      <div className="bg-primary600 py-20 px-12 min-h-60 sm:min-h-[40rem] text-center flex flex-col justify-center items-center gap-4 sm:gap-6 rounded-[2rem]">
        <LogoFadeIcon />

        <h2 className="max-w-[46rem] max-sm:max-w-64 font-bold text-white text-xl sm:text-[2.5rem] sm:leading-[3rem]">
          The Smarter Way to Manage Your Design, Branding, and Marketing.{" "}
        </h2>

        <p className="sm:text-2xl text-pretty text-primary100">
          Expertly done, in One Seamless Subscription.
        </p>

        <p className="max-w-[43rem] sm:text-lg md:text-2xl text-pretty text-primary100">
          Say goodbye to the hassle of juggling content, design, and marketing.
          Get solutions that perfectly align with your goals
        </p>

        <div className="mt-4 flex max-sm:flex-col gap-4">
          <button className="py-4 px-12 bg-primary900 font-medium text-lg text-white rounded-lg">
            Get Started
          </button>

          <button className="py-4 px-6 border bg-white flex justify-center items-center gap-2 rounded-lg">
            <span className="text-grey900 text-lg font-medium ">
              Watch demo video
            </span>

            <PlayIcon className="mt-1" />
          </button>
        </div>
      </div>

      <div className="full-width -z-[1] absolute bottom-0  bg-primary900 h-[7.5rem] sm:h-80 w-full" />
    </section>
  );
};
export default CtaSection;
