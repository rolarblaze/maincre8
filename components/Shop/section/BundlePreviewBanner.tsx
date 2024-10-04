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
    <section className="flex justify-between rounded-3xl bg-[#FAFAFA] xs:max-md:flex-col">
      <div className="w-[60%] space-y-6 p-12 xs:max-md:w-full xs:max-md:px-4 xs:max-md:py-5">
        <p className="text-4xl font-bold leading-10 xs:max-md:text-3xl">
          {title} Packages
        </p>
        <p className="text-sm font-semibold uppercase leading-5 tracking-wider xs:max-md:text-base">
          {message}
        </p>
        <p className="text-lg font-light leading-7 text-[#718096]">{body}</p>
      </div>
      <div className="w-[40%] xs:max-md:w-full">
        <figure className="relative size-full xs:max-md:h-[30vh]">
          <Image
            fill={true}
            src={icon}
            alt={message}
            className="object-cover xs:max-md:object-contain"
          />
        </figure>
      </div>
    </section>
  );
};

export default BundlePreviewBanner;
