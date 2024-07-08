import { LightBulb, Pencil, Rocket, Smiley } from "@/public/icons";
import Button from "../../Button";

const HeroSection = () => {
  return (
    <section className="w-full max-w-[76rem]">
      <div className="relative flex flex-col py-20 justify-center items-center">
        {/* PILL DIV */}
        <div className="mb-4.5 border p-2 border-primary500 text-grey900 rounded-[0.625rem]">
          {/* TODO: IMPORT MANROPE FONT FOR SPAN */}
          <span className="text-grey900 text-lg font-semibold leading-7">
            Welcome to SellCrea8
          </span>
        </div>

        {/* HERO CONTENT */}
        <div className="text-center size-full space-y-4.5">
          {/* TODO: IMPORT MANROPE FONT FOR H1 */}
          <h1 className="-tracking-[0.225rem] leading-loosest text-7xl font-extrabold">
            Your <span className="text-primary500"> One-Stop</span> Creative
            <br /> and Digital Solutions Hub
          </h1>

          <p className="max-w-[56.75rem] mx-auto">
            SellCrea8 is a productized eCommerce platform designed by SMG to
            deliver affordable, high-quality, and personalized creative and
            digital services. Simplify your service access and project
            management with our user-friendly interface.
          </p>

          <button className="bg-primary500 text-white rounded-lg text-sm font-semibold px-4 py-2">
            Get Started
          </button>
        </div>

        {/* BIG BLUE DIV */}
        <div className="w-full mt-8 bg-primary800 rounded-5xl min-h-[25.875rem]"></div>

        {/* FLOATING ICONS */}
        <Smiley className="absolute top-4 left-40" />
        <LightBulb className="absolute top-10 right-32" />
        <Rocket className="absolute top-56 left-0" />
        <Pencil className="absolute top-72 right-0" />
      </div>
    </section>
  );
};
export default HeroSection;
