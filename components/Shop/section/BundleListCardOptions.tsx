"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { changePageData } from "@/redux/shop";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { PageViewData } from "@/redux/shop/interface";
import bundleCardsDetails from "../data/bundleCardDetails";

const BundleListCardOptions = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  const pageViewData = useAppSelector(
    (state: RootState) => state.pageViewData.currentViewBundle,
  );

  const pageViewDataTitle = (pageViewData as PageViewData).bundle_name;

  // function to handle updating the page bundle
  const updatePageViewData = (id: string) => {
    dispatch(changePageData(id));
    router.push(`/shop/${id}`);
  };

  return (
    <section>
      <ul className="no-scrollbar sticky top-0 flex w-full flex-wrap justify-between gap-4 xs:max-md:sticky xs:max-md:top-60 xs:max-md:gap-5 xs:max-md:overflow-auto">
        {bundlesData.map((bundle) => {
          return (
            <li
              key={bundle.bundle_name}
              className="h-24 min-w-[12rem] xl:min-w-[13.5rem]"
            >
              <button
                onClick={() => updatePageViewData(bundle.bundle_id.toString())}
                className={`${bundleCardsDetails[bundle.bundle_id - 1].hover} ${
                  pageViewDataTitle === bundle.bundle_name
                    ? `border-2 ${bundleCardsDetails[bundle.bundle_id - 1].activeBorderColor}`
                    : `border ${bundleCardsDetails[bundle.bundle_id - 1].borderColor} `
                } ${
                  pageViewDataTitle === bundle.bundle_name
                    ? bundleCardsDetails[bundle.bundle_id - 1].bgColor
                    : "bg-white"
                } group flex size-full items-center justify-between rounded-2xl p-2 transition-all`}
              >
                <ul
                  className={`${
                    pageViewDataTitle === bundle.bundle_name
                      ? "font-bold"
                      : "font-light"
                  } w-1/2 px-2 text-left text-base transition-all`}
                >
                  {bundle.bundle_name.split(" ").map((text) => (
                    <li key={text}>
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
                <figure
                  className={`${
                    pageViewDataTitle === bundle.bundle_name
                      ? "bg-white"
                      : bundleCardsDetails[bundle.bundle_id - 1].bgColor
                  } relative h-full w-[40%] rounded-lg transition-all group-hover:bg-white`}
                >
                  <Image
                    fill={true}
                    src={bundle.bundle_image_link as string}
                    alt={bundle.bundle_name}
                    className="object-contain"
                  />
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
