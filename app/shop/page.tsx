"use client";

import { AppWrapper, Button } from "@/components";
import bundleCardsDetails from "@/components/Shop/bundleCardsDetails";
import {
  BrandDesign,
  GraphicDesigns,
  DigitalMarketing,
  ContentWriting,
  AllInOneBundle,
} from "@/components/Shop/Data/ShopBundlesData";
import ShopWhyChooseSellCre8Data from "@/components/Shop/whyChooseUs";
import Image from "next/image";
import { useState } from "react";

const Shop = () => {
  const [pageViewData, setPageViewData] = useState(BrandDesign);
  const updatePageViewData = (title: string) => {
    switch (title) {
      case "Brand Design":
        setPageViewData(BrandDesign);
        break;
      case "Graphic Designs":
        setPageViewData(GraphicDesigns);
        break;
      case "Digital Marketing":
        setPageViewData(DigitalMarketing);
        break;
      case "Content Writing":
        setPageViewData(ContentWriting);
        break;
      case "All-In-One Bundle":
        setPageViewData(AllInOneBundle);
        break;
      default:
        break;
    }
  };

  return (
    <AppWrapper type="">
      <main className="px-24 space-y-20">
        <h1 className="font-semibold text-3xl leading-9 text-center">
          Choose the Right Plan for Your Business
        </h1>

        {/* Bundles Card-List Options To Choose From */}
        <section>
          <ul className="flex w-full gap-5">
            {bundleCardsDetails.map((bundleCard) => {
              return (
                <li key={bundleCard.title} className="w-[20%] h-24">
                  <button
                    onClick={() => updatePageViewData(bundleCard.title)}
                    className={`${bundleCard.hover} ${
                      pageViewData.title === bundleCard.title
                        ? "border-slate-500"
                        : bundleCard.borderColor
                    } ${
                      pageViewData.title === bundleCard.title
                        ? bundleCard.bgColor
                        : "bg-white"
                    } group size-full p-2 flex items-center justify-between rounded-2xl border transition-all`}
                  >
                    <ul
                      className={`${
                        pageViewData.title === bundleCard.title
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
                        pageViewData.title === bundleCard.title
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

        {/* Selected Bundle Banner Preview */}
        <section className="rounded-3xl bg-[#FAFAFA] flex justify-between">
          <div className="p-12 w-[60%] space-y-6">
            <p className="font-bold text-4xl leading-10">
              {pageViewData.title} Packages
            </p>
            <p className="font-semibold text-sm leading-5 uppercase tracking-wider">
              {pageViewData.message}
            </p>
            <p className="font-light text-lg leading-7 text-[#718096]">
              {pageViewData.body}
            </p>
          </div>
          <div className="w-[40%]">
            <figure className="relative size-full">
              <Image
                fill={true}
                src={pageViewData.icon}
                alt={pageViewData.message}
                className="object-cover"
              />
            </figure>
          </div>
        </section>

        {/* Selected Bundle Packages Plan */}
        <section>
          <ul className="flex gap-6 w-full justify-between">
            {pageViewData.packagePlans.map((plan) => {
              return (
                <li
                  key={plan.title}
                  className={`${
                    plan.isPackagePopular ? "bg-[#1574E5]" : "bg-white"
                  } relative w-1/3 rounded-3xl p-8 border border-[#EEEFF2] flex flex-col justify-between gap-40`}
                >
                  {plan.isPackagePopular && (
                    <div className="absolute -top-1 -right-1 rounded-bl-2xl px-6 py-3 bg-white">
                      <p className="text-[#1574e5] font-semibold text-lg leading-5">
                        Popular
                      </p>
                    </div>
                  )}
                  <div className="w-full">
                    <div
                      className={`${
                        plan.isPackagePopular
                          ? "border-[#93BFF3]"
                          : "border-[#EEEFF2]"
                      } pb-6 border-b text-left space-y-5`}
                    >
                      <div className="space-y-2">
                        <p
                          className={`${
                            plan.isPackagePopular
                              ? "text-white"
                              : "text-[#111827]"
                          } font-semibold text-2xl leading-7`}
                        >
                          {plan.title}
                        </p>
                        <p
                          className={`${
                            plan.isPackagePopular
                              ? "text-[#B6D4F7]"
                              : "text-[#111827]"
                          } font-normal text-base leading-6 text-[#718096]`}
                        >
                          {plan.description}
                        </p>
                      </div>
                      <p>
                        <span
                          className={`${
                            plan.isPackagePopular
                              ? "text-white"
                              : "text-[#111827]"
                          } font-semibold text-3xl leading-9`}
                        >
                          {plan.pricePerMonth}
                        </span>
                        <span
                          className={`${
                            plan.isPackagePopular
                              ? "text-[#B6D4F7]"
                              : "text-[#111827]"
                          } ml-2 font-normal text-base leading-6 text-[#718096]`}
                        >
                          / month
                        </span>
                      </p>
                    </div>
                    <ul
                      className={`${
                        plan.isPackagePopular ? "text-white" : "text-[#111827]"
                      } mt-5 space-y-2`}
                    >
                      {plan.features.map((feature) => {
                        return (
                          <li className="flex w-full items-center gap-3">
                            {/* chnage the size-* to chnage the size of the checkmark logo */}
                            <div className="w-[5%]">
                              <figure className="relative size-4 center">
                                <Image
                                  fill={true}
                                  src={
                                    plan.isPackagePopular
                                      ? "/imgs/white-checkmark.png"
                                      : "/imgs/blue-checkmark.png"
                                  }
                                  alt="checkmark logo."
                                  className="object-contain"
                                />
                              </figure>
                            </div>
                            <p className="font-medium text-base leading-6 w-[95%]">
                              {feature}
                            </p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Button
                    link={plan.link}
                    label="Add to Cart"
                    classNames={` bg-[#FAFAFA] text-[#111827] h-14 ${
                      plan.isPackagePopular
                        ? "hover:bg-blue-400 hover:text-white"
                        : "hover:bg-slate-200"
                    } `}
                  />
                </li>
              );
            })}
          </ul>
        </section>

        {/* Not sure of the right plan banner */}
        <section className="relative rounded-2xl bg-[#093160] fle items-center justify-between h-[calc(15vh_+_4rem)] border overflow-hidden">
          <div className="absolute flex items-center z-10 size-full p-8">
            <div className="space-y-3">
              <h2 className="font-medium text-5xl leading-10 text-white">
                {" "}
                Not sure of the{" "}
                <span className="text-orange-400 font-medium text-5xl leading-10">
                  right plan
                </span>{" "}
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

        {/* Why choose us section */}
        <section className="p-5">
          <ul className="flex flex-wrap justify-between gap-y-16">
            {ShopWhyChooseSellCre8Data.map((reason) => {
              return (
                <li key={reason.title} className="space-y-4 w-[30%]">
                  <figure className="relative size-20 rounded-full center">
                    <Image
                      fill={true}
                      src={reason.iconSrc}
                      alt={reason.iconAlt}
                      className="object-cover"
                    />
                  </figure>
                  <h4 className="font-extrabold text-lg leading-7 text-[#101928]">
                    {reason.title}
                  </h4>
                  <p className="font-normal text-base leading-6 text-[#667185]">
                    {reason.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Selected Bundle Addons Section */}
        <section className="relative z-10 rounded-2xl bg-[#093160] fle items-center justify-between h-[calc(70vh_+_4rem) border overflow-hidde">
          <div className="relative flex items-cente z-10 size-full p-8">
            <div className="flex flex-col justify-between">
              <div className="w-full space-y-5 mt-5">
                <h2 className="space-y-2">
                  <p className="font-medium text-5xl leading-10 text-white">
                    Enhance Your {pageViewData.title} Package
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
                  tailored solutions that meet your specific needs, ensuring
                  your brand stands out and performs across all channels.
                </p>
              </div>

              <div className="mt-5 w-full flex flex-wrap items-center justify-betwee gap-x-[2%] gap-y-5">
                {pageViewData.addons.map((addon) => {
                  return (
                    <div className="w-[23%] aspect-square bg-white rounded-2xl flex flex-col items-center justify-center gap-10">
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

      </main>
    </AppWrapper>
  );
};
export default Shop;
