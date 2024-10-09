import assetLibrary from "@/library";
import { CheckCircleIcon2 } from "@/public/icons";
import Image from "next/image";

const SuccessModal = () => {
  return (
    <div className="relative mx-auto w-full overflow-hidden rounded-[1.25rem] bg-white px-8 py-8 sm:w-[34.25rem] sm:px-10">
      <Image
        src={assetLibrary.celebrateImg}
        alt="successful payment"
        fill
        className="absolute my-auto max-h-[30rem] opacity-10"
      />

      <div className="relative z-[5] space-y-4 sm:space-y-8">
        <CheckCircleIcon2 className="-ml-2 mt-2 sm:-mb-4" />
        <div>
          <h3 className="text-2xl font-bold leading-8 text-grey900">
            Thank you for your order
          </h3>
          <p>You have successfully completed your purchase</p>
        </div>

        <hr />

        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-grey900">Order details</h4>

          <div className="grid gap-4 sm:grid-cols-2">
            {data.map(({ title, data }) => (
              <div key={title} className="font-semibold sm:first:col-span-2">
                <h4 className="text-sm uppercase leading-5 text-grey500">
                  {title}
                </h4>
                <p className="text-base leading-6 text-grey700">{data}</p>
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="flex items-center justify-between text-grey900">
          <p className="text-lg font-semibold leading-[150%]">Total</p>
          <p className="text-2xl font-bold leading-8">$250.00</p>
        </div>

        <p className="text-sm font-semibold text-primary500">
          Redirecting you to your Dashboard...
        </p>
      </div>
    </div>
  );
};
export default SuccessModal;

const data = [
  {
    title: "package",
    data: "Graphic Design Basic",
  },
  {
    title: "price",
    data: "$250.00",
  },
  {
    title: "date",
    data: "01 July 2024",
  },
];
