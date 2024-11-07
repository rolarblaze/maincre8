import Button from "@/components/Button";
import Image from "next/image";
import { useAppDispatch } from "@/redux/store";
import { addAlert } from "@/redux/alerts";
import { useEffect, useState } from "react";
import { PackagesType } from "@/redux/shop/interface";


type FeaturesListPropsType = {
  feature: string;
  isPackagePopular: boolean;
};

type PackagePlanCardPropsType = {
  isPackagePopular: boolean;
  title: string;
  description: string;
  price: number;
  provisions:{
    provision_id: number;
    description: string;
  }[];
  link: string;
};

// 3rd: Sub Component of Sub-Component-1
const FeaturesList = ({ feature, isPackagePopular }: FeaturesListPropsType) => {
  return (
    <li className="flex w-full items-center gap-3">
      <div className="w-[5%]">
        {/* change the size-*, to chnage the size of the checkmark logo */}
        <figure className="center relative size-4">
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
      <p className="w-[95%] text-base font-medium leading-6">{feature}</p>
    </li>
  );
};

const PricingSpinner = () => {
  return (
    <div
      className={`size-5 animate-spin rounded-full border-2 border-b-transparent border-l-transparent border-r-transparent border-t-[#B6D4F7]`}
    ></div>
  );
};

// 2nd: Sub-Component-1 of Main-Compoent
const PackagePlanCard = ({
  isPackagePopular,
  title,
  description,
  price,
  provisions,
}: PackagePlanCardPropsType) => {
  const dispatch = useAppDispatch();
  const [pricing, setPricing] = useState({
    price: 0,
    code: "$",
  });

  function alertMsg(
    id: string,
    headText: string,
    subText: string,
    type: "error" | "warning" | "success",
    autoClose: boolean,
  ) {
    return {
      id: id,
      headText: headText,
      subText: subText,
      type: type,
      autoClose: autoClose,
    };
  }

  // convert the pricing to base currency on component load
  useEffect(() => {
    async function currencyConverter(amount: number) {

      // just return the amaount back from this function
      return {
        price: amount,
        code: "$",
      }
      // ignore the rest of this code on the bottom now
      try {
        const parsedAmount = parseFloat(amount);
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY}/pair/USD/NGN/${parsedAmount}`,
        );

        if (!response.ok) {
          setPricing({
            price: isNaN(parseFloat(amount)) ? 0 : parseFloat(amount),
            code: "$",
          });
          return
        }

        const data = await response.json();
        const rate = data.conversion_rate;
        setPricing({
          price: isNaN(Math.round(parsedAmount * rate)) ? 0 : Math.round(parsedAmount * rate),
          code: data.target_code,
        });
      } catch (err) {
        console.error(err);
        setPricing({
          price: parseFloat(amount),
          code: "$",
        });
      }
    }
    currencyConverter(price);
  }, []);

  return (
    <li
      className={`${
        isPackagePopular ? "bg-[#1574E5]" : "bg-white"
      } relative flex w-1/3 max-w-[25rem] flex-col justify-between gap-40 rounded-3xl border border-[#EEEFF2] p-8 xs:max-md:min-w-[90%]`}
    >
      {isPackagePopular && (
        <div className="absolute -right-1 -top-1 rounded-bl-2xl bg-white px-6 py-3">
          <p className="text-lg font-semibold leading-5 text-[#1574e5]">
            Popular
          </p>
        </div>
      )}
      <div className="w-full">
        <div
          className={`${
            isPackagePopular ? "border-[#93BFF3]" : "border-[#EEEFF2]"
          } space-y-5 border-b pb-6 text-left`}
        >
          <div className="space-y-2">
            <p
              className={`${
                isPackagePopular ? "text-white" : "text-[#111827]"
              } text-2xl font-semibold leading-7`}
            >
              {title}
            </p>
            <p
              className={`${
                isPackagePopular ? "text-[#B6D4F7]" : "text-[#111827]"
              } text-base font-normal leading-6 text-[#718096]`}
            >
              {description}
            </p>
          </div>
          <div className="flex items-end text-3xl">
            <div
              className={`${
                isPackagePopular ? "text-white" : "text-[#111827]"
              } flex gap-1 font-semibold leading-9`}
            >
              <div className="text-3xl">
                {"$"}
              </div>
              <p className="text-3xl">
              {price}
              </p>
            </div>
            <span
              className={`${
                isPackagePopular ? "text-[#B6D4F7]" : "text-[#111827]"
              } ml-2 text-base font-normal leading-6 text-[#718096]`}
            >
              / month
            </span>
          </div>
        </div>
        <ul
          className={`${
            isPackagePopular ? "text-white" : "text-[#111827]"
          } mt-5 space-y-2`}
        >
          {provisions.map((provision) => (
            <FeaturesList
              key={provision.provision_id}
              feature={provision.description}
              isPackagePopular={isPackagePopular}
            />
          ))}
        </ul>
      </div>
      <Button
        onClick={() =>
          dispatch(
            addAlert(
              alertMsg(
                `Added ${title} to cart`,
                "Added to cart",
                "Open your Cart to checkout",
                "success",
                true,
              ),
            ),
          )
        }
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

// 1st: Main-Component
const BundlePackagesPlan = ({
  packagesPlans,
}: {packagesPlans: PackagesType[] } ) => {
  return (
    <section>
      <ul className="no-scrollbar flex w-full justify-between gap-6 xs:max-md:gap-3 xs:max-md:overflow-auto">
        {packagesPlans.map((plan) => (
          <PackagePlanCard
            key={plan.package_id}
            isPackagePopular={false}
            title={plan.package_name}
            description={plan.description}
            price={plan.price}
            provisions={plan.provisions}
            link={""}
          />
        ))}
      </ul>
    </section>
  );
};

export default BundlePackagesPlan;
