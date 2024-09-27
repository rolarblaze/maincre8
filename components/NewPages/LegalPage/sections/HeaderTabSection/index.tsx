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
    <section className="flex h-fit flex-col items-center justify-center gap-10 pb-20 pt-[6.25rem]">
      <h1
        className={`${inter.variable} font-inter text-3.5xl font-bold -tracking-[0.01rem] text-[#111827]`}
      >
        Privacy Policy
      </h1>

      <TabButtons />
    </section>
  );
};
export default HeaderTabSection;
