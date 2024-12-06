import Button from "@/components/Button";
import Image from "next/image";

const NotSureBanner = () => {
  return (
    <section className="flex flex-wrap xs:max-lg:gap-5 items-center justify-between overflow-hidden rounded-2xl border bg-[#093160] bg-gridline bg-contain p-10 xs:max-md:p-5">
      <div className="space-y-2">
        <h2 className="text-5xl font-medium text-white xs:max-md:text-3xl">
          Not sure of the{" "}
          <span className="text-5xl font-medium text-orange-400 xs:max-md:text-3xl">
            right plan
          </span>{" "}
          for you?
        </h2>
        <p className="text-lg font-light text-[#B6D4F7] xs:max-md:text-base">
          Fill a brief and we&apos;ll get back to you with a recommended custom
          package.
        </p>
      </div>

      <div className="inline-block">
        <Button
          link="/custom-recommendation"
          label="Get a Recommendation"
          classNames="bg-white p-4 text-[#1D2739] hover:bg-slate-300"
        />
      </div>
    </section>
  );
};

export default NotSureBanner;
