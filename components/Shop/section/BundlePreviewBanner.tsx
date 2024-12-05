import Image from "next/image";

type BundlePreviewBannerPropsType = {
  title: string;
  message: string;
  body: string;
  icon: string;
};

const BundlePreviewBanner = ({
  title,
  message,
  body,
  icon,
}: BundlePreviewBannerPropsType) => {
  return (
    <section className="flex justify-between rounded-3xl bg-[#FAFAFA] xs:max-md:flex-col xs:max-md:max-w-[500px] xs:max-md:mx-auto">
      <div className="w-[60%] space-y-6 p-12 xs:max-md:w-full xs:max-md:px-5 xs:max-md:py-5">
        <p className="text-4xl font-bold leading-10 xs:max-md:text-2xl">
          {title} Package
        </p>
        <p className="text-sm font-semibold uppercase leading-5 tracking-wider xs:max-md:text-sm">
          {message}
        </p>
        <p className="text-lg font-light leading-7 text-[#718096]">{body}</p>
      </div>
      <div className="w-[40%] xs:max-md:w-full">
        <figure className="relative size-full xs:max-md:w-full xs:max-md:aspect-square xs:max-md:max-w-[400px] xs:max-md:mx-auto bg-slate-50">
          <Image
            fill={true}
            src={icon}
            alt={message}
            className="object-cover  object-bottom"
          />
        </figure>
      </div>
    </section>
  );
};

export default BundlePreviewBanner;
