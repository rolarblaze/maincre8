import Image from "next/image";

type AddOnsType = {
  title: string;
  description: string;
  price: string;
};

type BundleAddOnsPropsType = {
  title: string;
  addOns: AddOnsType[];
};

const BundleAddOns = ({ title, addOns }: BundleAddOnsPropsType) => {
  return (
    <section className="rounded-2xl bg-[#093160] xs:max-md:pb-5">
      <div className="relative z-10 flex flex-col justify-between gap-5 p-8 xs:max-md:p-0">
        <figure className="absolute left-0 top-0 -z-10 h-full w-full lg:hidden">
          <Image
            fill={true}
            src="/imgs/biggridlines.png"
            alt="gridlines"
            className="rounded-2xl object-cover"
          />
        </figure>
        <div className="mt-5 space-y-5 xs:max-md:mt-2 xs:max-md:space-y-3 xs:max-md:p-5">
          <h2 className="space-y-2 xs:max-md:space-y-0">
            <p className="text-5xl font-medium leading-10 text-white xs:max-md:text-2xl">
              Enhance Your {title} Package
            </p>
            <p className="text-5xl font-medium leading-10 text-white xs:max-md:text-2xl">
              with{" "}
              <span className="text-5xl font-medium leading-10 text-orange-400 xs:max-md:text-2xl">
                Flexible Add-Ons
              </span>
            </p>
          </h2>
          <p className="w-[80%] text-lg font-light leading-7 text-[#B6D4F7] xs:max-md:w-[90%]">
            Add-ons help you maximize your SellCrea8 package by offering
            tailored solutions that meet your specific needs, ensuring your
            brand stands out and performs across all channels.
          </p>
        </div>

        <div className="no-scrollbar flex w-full flex-wrap items-center justify-center gap-x-[2%] gap-y-5 xs:max-md:flex-nowrap xs:max-md:justify-start xs:max-md:gap-x-5 xs:max-md:overflow-scroll">
          {addOns.map((addon) => {
            return (
              <div
                key={addon.title}
                className="flex aspect-square w-[23%] flex-col items-center justify-center gap-10 rounded-2xl bg-white xs:max-md:min-w-72 xs:max-md:first:ml-5 xs:max-md:last:mr-5"
              >
                <div className="center mx-auto aspect-square w-1/3 rounded-full bg-[#E8F1FC]">
                  {/* control the size on the figure tag to control the size of the rendered image */}
                  <figure className="relative size-10">
                    <Image
                      fill={true}
                      src="/imgs/addons-box.png"
                      alt="Addons Box Icon"
                      className="object-contain"
                    />
                  </figure>
                </div>
                <div className="space-y-2">
                  <p className="text-center text-xs font-semibold uppercase leading-4">
                    {addon.title}
                  </p>
                  <p className="text-center text-xs font-normal leading-7 text-[#718096]">
                    {addon.description}
                  </p>
                  <p className="text-center text-lg font-semibold leading-5 text-[#111827]">
                    {addon.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute right-0 top-0 -z-10 h-full w-[40%] xs:max-md:hidden">
          <figure className="absolute size-full">
            <Image
              fill={true}
              src="/imgs/gridbg.png"
              alt="gridlines background"
              className="rounded-2xl object-cover"
            />
          </figure>
          <figure className="absolute h-full w-full">
            <Image
              fill={true}
              src="/imgs/biggridlines.png"
              alt="gridlines"
              className="rounded-2xl object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default BundleAddOns;
