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
    <section className="relative z-10 rounded-2xl bg-[#093160] fle items-center justify-between border overflow-hidden">
      <div className="relative flex items-cente z-10 size-full p-8">
        <div className="flex flex-col justify-between">
          <div className="w-full space-y-5 mt-5">
            <h2 className="space-y-2">
              <p className="font-medium text-5xl leading-10 text-white">
                Enhance Your {title} Package
              </p>
              <p className="font-medium text-5xl leading-10 text-white">
                with{" "}
                <span className="text-orange-400 font-medium text-5xl leading-10">
                  Flexible Add-Ons
                </span>
              </p>
            </h2>
            <p className=" w-[80%] font-light text-lg leading-7 text-[#B6D4F7]">
              Add-ons help you maximize your SellCrea8 package by offering
              tailored solutions that meet your specific needs, ensuring your
              brand stands out and performs across all channels.
            </p>
          </div>

          <div className="mt-5 w-full flex flex-wrap items-center justify-betwee gap-x-[2%] gap-y-5">
            {addOns.map((addon) => {
              return (
                <div
                  key={addon.title}
                  className="w-[23%] aspect-square bg-white rounded-2xl flex flex-col items-center justify-center gap-10"
                >
                  <div className="w-1/3 mx-auto aspect-square bg-[#E8F1FC] rounded-full center">
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
                    <p className="font-semibold text-xs leading-4 text-center uppercase">
                      {addon.title}
                    </p>
                    <p className="font-normal text-xs leading-7 text-center text-[#718096]">
                      {addon.description}
                    </p>
                    <p className="font-semibold text-lg leading-5 text-[#111827] text-center">
                      {addon.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute -z-10 w-[40%] h-full top-0 right-0">
        <figure className="absolute size-full">
          <Image
            fill={true}
            src="/imgs/gridbg.png"
            alt="gridlines background"
            className="object-cover"
          />
        </figure>
        <figure className="absolute w-full h-full">
          <Image
            fill={true}
            src="/imgs/biggridlines.png"
            alt="gridlines"
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default BundleAddOns;
