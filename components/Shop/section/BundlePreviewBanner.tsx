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
    <section className="rounded-3xl bg-[#FAFAFA] flex justify-between">
      <div className="p-12 w-[60%] space-y-6">
        <p className="font-bold text-4xl leading-10">{title} Packages</p>
        <p className="font-semibold text-sm leading-5 uppercase tracking-wider">
          {message}
        </p>
        <p className="font-light text-lg leading-7 text-[#718096]">{body}</p>
      </div>
      <div className="w-[40%]">
        <figure className="relative size-full">
          <Image
            fill={true}
            src={icon}
            alt={message}
            className="object-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default BundlePreviewBanner;
