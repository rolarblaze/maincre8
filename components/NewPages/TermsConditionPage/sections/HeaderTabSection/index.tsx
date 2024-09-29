import { Inter } from "next/font/google";
import TabButtons from "./TabButtons";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const HeaderTabSection = () => {
  return (
    <section className="flex h-fit flex-col items-center justify-center gap-4 pb-10 pt-6 md:gap-10 md:pb-20 md:pt-[6.25rem]">
      <h1
        className={`${inter.variable} font-inter text-2xl font-bold leading-[2.2rem] -tracking-[0.01rem] text-[#111827] md:text-3.5xl`}
      >
        Terms & Conditions
      </h1>

      <TabButtons />
    </section>
  );
};
export default HeaderTabSection;
