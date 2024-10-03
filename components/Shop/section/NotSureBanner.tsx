import Button from "@/components/Button";
import Image from "next/image";

const NotSureBanner = () => {
  return (
    <section className="relative h-[calc(15vh_+_4rem)] overflow-hidden rounded-2xl border bg-[#093160] xs:max-md:h-auto xs:max-md:overflow-visible">
      <div className="absolute z-10 flex size-full items-center p-8 xs:max-md:relative xs:max-md:z-10 xs:max-md:px-6 xs:max-md:py-8">
        <figure className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden rounded-2xl lg:hidden">
          <Image
            fill={true}
            src="/imgs/biggridlines.png"
            alt="gridlines"
            className="rounded-2xl object-cover"
          />
        </figure>
        <div className="space-y-3">
          <h2 className="text-5xl font-medium leading-10 text-white xs:max-md:text-2xl">
            Not sure of the{" "}
            <span className="text-5xl font-medium leading-10 text-orange-400 xs:max-md:text-2xl">
              right plan
            </span>{" "}
            for you?
          </h2>
          <p className="text-lg font-light leading-7 text-[#B6D4F7] xs:max-md:text-sm">
            Fill a brief and we&apos;ll get back to you with a recommended
            custom package.
          </p>
          <div className="z-10 flex size-full items-center justify-start p-8 xs:max-md:p-0 lg:hidden">
            <div className="inline-block">
              <Button
                link="/recommend"
                label="Get a Recommendation"
                classNames="bg-white p-4 text-[#1D2739]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative float-right h-full w-[40%] xs:max-md:float-none xs:max-md:hidden xs:max-md:h-auto">
        <figure className="absolute size-full">
          <Image
            fill={true}
            src="/imgs/gridbg.png"
            alt="gridlines background"
            className="object-cover"
          />
        </figure>
        <figure className="absolute h-full w-full">
          <Image
            fill={true}
            src="/imgs/gridlines.png"
            alt="gridlines"
            className="object-cover"
          />
        </figure>
        <div className="absolute z-10 flex size-full items-center justify-end p-8">
          <div className="inline-block">
            <Button
              link="/recommend"
              label="Get a Recommendation"
              classNames="bg-white p-4 text-[#1D2739]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSureBanner;
