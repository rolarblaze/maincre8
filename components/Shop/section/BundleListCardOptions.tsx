import Image from "next/image";

type bundleCardsDetailsType = {
  title: string;
  icon: string;
  bgColor: string;
  borderColor: string;
  hover: string;
};

type BundleListCardOptionsPropTypes = {
  bundleCardsDetails: bundleCardsDetailsType[];
  pageViewDataTitle: string;
  updatePageViewData: (title: string) => void;
};

const BundleListCardOptions = ({
  bundleCardsDetails,
  pageViewDataTitle,
  updatePageViewData,
}: BundleListCardOptionsPropTypes) => {
  return (
    <section>
      <ul className="flex w-full gap-5">
        {bundleCardsDetails.map((bundleCard) => {
          return (
            <li key={bundleCard.title} className="w-[20%] h-24">
              <button
                onClick={() => updatePageViewData(bundleCard.title)}
                className={`${bundleCard.hover} ${
                  pageViewDataTitle === bundleCard.title
                    ? "border-slate-500"
                    : bundleCard.borderColor
                } ${
                  pageViewDataTitle === bundleCard.title
                    ? bundleCard.bgColor
                    : "bg-white"
                } group size-full p-2 flex items-center justify-between rounded-2xl border transition-all`}
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
