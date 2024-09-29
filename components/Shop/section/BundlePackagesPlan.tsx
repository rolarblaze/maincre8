import Button from "@/components/Button";
import Image from "next/image";

type PackagesPlansType = {
  title: string;
  description: string;
  pricePerMonth: string;
  features: string[];
  link: string;
  isPackagePopular: boolean;
};

type BundlePackagesPlansPropsType = {
  packagesPlans: PackagesPlansType[];
};

type FeaturesListPropsType = {
  feature: string;
  isPackagePopular: boolean;
};

type PackagePlanCardPropsType = {
  isPackagePopular: boolean;
  title: string;
  description: string;
  pricePerMonth: string;
  features: string[];
  link: string;
};

// Sub Component of Sub-Component-1
const FeaturesList = ({ feature, isPackagePopular }: FeaturesListPropsType) => {
  return (
    <li className="flex w-full items-center gap-3">
      {/* chnage the size-* to chnage the size of the checkmark logo */}
      <div className="w-[5%]">
        <figure className="relative size-4 center">
          <Image
            fill={true}
            src={
              isPackagePopular
                ? "/imgs/white-checkmark.png"
                : "/imgs/blue-checkmark.png"
            }
            alt="checkmark logo."
            className="object-contain"
          />
        </figure>
      </div>
      <p className="font-medium text-base leading-6 w-[95%]">{feature}</p>
    </li>
  );
};

// Sub-Component-1 of Main-Compoent
const PackagePlanCard = ({
  isPackagePopular,
  title,
  description,
  pricePerMonth,
  features,
  link,
}: PackagePlanCardPropsType) => {
  return (
    <li
      className={`${
        isPackagePopular ? "bg-[#1574E5]" : "bg-white"
      } relative w-1/3 rounded-3xl p-8 border border-[#EEEFF2] flex flex-col justify-between gap-40`}
    >
      {isPackagePopular && (
        <div className="absolute -top-1 -right-1 rounded-bl-2xl px-6 py-3 bg-white">
          <p className="text-[#1574e5] font-semibold text-lg leading-5">
            Popular
          </p>
        </div>
      )}
      <div className="w-full">
        <div
          className={`${
            isPackagePopular ? "border-[#93BFF3]" : "border-[#EEEFF2]"
          } pb-6 border-b text-left space-y-5`}
        >
          <div className="space-y-2">
            <p
              className={`${
                isPackagePopular ? "text-white" : "text-[#111827]"
              } font-semibold text-2xl leading-7`}
            >
              {title}
            </p>
            <p
              className={`${
                isPackagePopular ? "text-[#B6D4F7]" : "text-[#111827]"
              } font-normal text-base leading-6 text-[#718096]`}
            >
              {description}
            </p>
          </div>
          <p>
            <span
              className={`${
                isPackagePopular ? "text-white" : "text-[#111827]"
              } font-semibold text-3xl leading-9`}
            >
              {pricePerMonth}
            </span>
            <span
              className={`${
                isPackagePopular ? "text-[#B6D4F7]" : "text-[#111827]"
              } ml-2 font-normal text-base leading-6 text-[#718096]`}
            >
              / month
            </span>
          </p>
        </div>
        <ul
          className={`${
            isPackagePopular ? "text-white" : "text-[#111827]"
          } mt-5 space-y-2`}
        >
          {features.map((feature) => (
            <FeaturesList
              key={feature}
              feature={feature}
              isPackagePopular={isPackagePopular}
            />
          ))}
        </ul>
      </div>
      <Button
        link={link}
        label="Add to Cart"
        classNames={` bg-[#FAFAFA] text-[#111827] h-14 ${
          isPackagePopular
            ? "hover:bg-blue-400 hover:text-white"
            : "hover:bg-slate-200"
        } `}
      />
    </li>
  );
};

// Main-Component
const BundlePackagesPlan = ({
  packagesPlans,
}: BundlePackagesPlansPropsType) => {
  return (
    <section>
      <ul className="flex gap-6 w-full justify-between">
        {packagesPlans.map((plan) => (
          <PackagePlanCard
            key={plan.title}
            isPackagePopular={plan.isPackagePopular}
            title={plan.title}
            description={plan.description}
            pricePerMonth={plan.pricePerMonth}
            features={plan.features}
            link={plan.link}
          />
        ))}
      </ul>
    </section>
  );
};

export default BundlePackagesPlan;
