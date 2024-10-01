import Button from "@/components/Button";
import Image from "next/image";

const NotSureBanner = () => {
  return (
    <section className="relative rounded-2xl bg-[#093160] fle items-center justify-between h-[calc(15vh_+_4rem)] border overflow-hidden">
      <div className="absolute flex items-center z-10 size-full p-8">
        <div className="space-y-3">
          <h2 className="font-medium text-5xl leading-10 text-white">
            Not sure of the
            <span className="text-orange-400 font-medium text-5xl leading-10">
              right plan
            </span>
            for you?
          </h2>
          <p className="font-light text-lg leading-7 text-[#B6D4F7]">
            Fill a brief and we&apos;ll get back to you with a recommended
            custom package.
          </p>
        </div>
      </div>
      <div className="relative w-[40%] h-full float-right">
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
            src="/imgs/gridlines.png"
            alt="gridlines"
            className="object-cover"
          />
        </figure>
        <div className="absolute z-10 size-full p-8 flex items-center justify-end">
          <div className="inline-block">
            <Button
              link="/recommend"
              label="Get a Recommendation"
              classNames="bg-white p-4 text-[#1D2739] hover:bg-slate-500 hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotSureBanner;
