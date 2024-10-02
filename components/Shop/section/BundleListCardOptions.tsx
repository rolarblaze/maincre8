import Image from "next/image";

type bundleCardsDetailsType = {
  title: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  activeBorderColor: string,
  hover: string;
};

type BundleListCardOptionsPropsType = {
  bundleCardsDetails: bundleCardsDetailsType[];
  pageViewDataTitle: string;
  updatePageViewData: (title: string) => void;
};

const BundleListCardOptions = ({
  bundleCardsDetails,
  pageViewDataTitle,
  updatePageViewData,
}: BundleListCardOptionsPropsType) => {
  return (
    <section>
      <ul className="flex w-full justify-between xs:max-md:gap-5 xs:max-md:overflow-auto xs:max-md:sticky xs:max-md:top-60">
        {bundleCardsDetails.map((bundleCard) => {
          return (
            <li key={bundleCard.title} className="w-[19%] xs:max-md:min-w-[50vw] h-24">
              <button
                onClick={() => updatePageViewData(bundleCard.title)}
                className={`${bundleCard.hover} ${bundleCard.borderColor} ${
                  pageViewDataTitle === bundleCard.title
                    ? `border-2 ${bundleCard.activeBorderColor}`
                    : "border"
                } ${
                  pageViewDataTitle === bundleCard.title
                    ? bundleCard.bgColor
                    : "bg-white"
                } group size-full p-2 flex items-center justify-between rounded-2xl transition-all`}
              >
                <ul
                  className={`${
                    pageViewDataTitle === bundleCard.title
                      ? "font-bold"
                      : "font-light"
                  } w-1/2 px-2 text-left text-base transition-all`}
                >
                  {bundleCard.title.split(" ").map((text) => (
                    <li key={text}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
                <figure
                  className={`${
                    pageViewDataTitle === bundleCard.title
                      ? "bg-white"
                      : bundleCard.bgColor
                  } group-hover:bg-white relative w-[40%] h-full rounded-lg transition-all`}
                >
                  <Image
                    fill={true}
                    src={bundleCard.icon}
                    alt={bundleCard.title}
                    className="object-cover"
                  />
                  {/* {bundleCard.icon} */}
                </figure>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default BundleListCardOptions;
