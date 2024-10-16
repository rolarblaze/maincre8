import Image from "next/image";

type bundleCardsDetailsType = {
  title: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  activeBorderColor: string;
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
      <ul className="sticky top-0 no-scrollbar flex w-full flex-wrap justify-between gap-4 xs:max-md:sticky xs:max-md:top-60 xs:max-md:gap-5 xs:max-md:overflow-auto">
        {bundleCardsDetails.map((bundleCard) => {
          return (
            <li
              key={bundleCard.title}
              className="h-24 min-w-[12rem] xl:min-w-[13.5rem]"
            >
              <button
                onClick={() => updatePageViewData(bundleCard.title)}
                className={`${bundleCard.hover} ${
                  pageViewDataTitle === bundleCard.title
                    ? `border-2 ${bundleCard.activeBorderColor}`
                    : `border ${bundleCard.borderColor} `
                } ${
                  pageViewDataTitle === bundleCard.title
                    ? bundleCard.bgColor
                    : "bg-white"
                } group flex size-full items-center justify-between rounded-2xl p-2 transition-all`}
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
                  } relative h-full w-[40%] rounded-lg transition-all group-hover:bg-white`}
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
