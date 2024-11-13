import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { initializeSession, addItemToCart } from "@/redux/cart/features";
import Button from "@/components/Button";
import Image from "next/image";
import { addAlert } from "@/redux/alerts";
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
  provisions: {
    provision_id: number;
    description: string;
  }[];
  link: string;
  package_id: number;
  bundle_id: number; 
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
  package_id,
  bundle_id,
}: PackagePlanCardPropsType) => {
  const dispatch = useAppDispatch();
  const [buttonLoading, setButtonLoading] = useState(false);


  const handleAddToCart = async () => {
    try {
      setButtonLoading(true);

      // Check if session_id exists in localStorage
      let sessionId = localStorage.getItem("session_id");

      // If session_id is not found, initialize the session
      if (!sessionId) {
        const initializeSessionResult = await dispatch(initializeSession()).unwrap();
        sessionId = initializeSessionResult.session_id;
        console.log("Session initialized:", sessionId);
      } else {
        console.log("Using existing session_id from localStorage:", sessionId);
      }

      console.log("Adding item to cart with bundle_id:", bundle_id, "and package_id:", package_id);

       // Add item to cart using the session ID and the dynamic bundle_id
       if (!bundle_id) {
        throw new Error("Bundle ID is missing. Please select a valid bundle.");
      }

      // Add item to cart using the session ID
      const result = await dispatch(
        addItemToCart({ bundle_id, package_id }),
      ).unwrap();

      // Dispatch success alert with the response message
      dispatch(
        addAlert({
          id: `Added ${title} to cart`,
          headText: "Success",
          subText: result.detail,
          type: "success",
          autoClose: true,
        })
      );
    } catch (error) {
      // Dispatch error alert
      dispatch(
        addAlert({
          id: `Error adding ${title} to cart`,
          headText: "Error",
          subText: (error as Error)?.message || "Failed to add item to cart",
          type: "error",
          autoClose: true,
        }),
      );
      console.log(error);
    } finally {
      setButtonLoading(false);
    }
  };

  return (
    <li
      className={`${isPackagePopular ? "bg-[#1574E5]" : "bg-white"
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
          className={`${isPackagePopular ? "border-[#93BFF3]" : "border-[#EEEFF2]"
            } space-y-5 border-b pb-6 text-left`}
        >
          <div className="space-y-2">
            <p
              className={`${isPackagePopular ? "text-white" : "text-[#111827]"
                } text-2xl font-semibold leading-7`}
            >
              {title}
            </p>
            <p
              className={`${isPackagePopular ? "text-[#B6D4F7]" : "text-[#111827]"
                } text-base font-normal leading-6 text-[#718096]`}
            >
              {description}
            </p>
          </div>
          <div className="flex items-end text-3xl">
            <div
              className={`${isPackagePopular ? "text-white" : "text-[#111827]"
                } flex gap-1 font-semibold leading-9`}
            >
              <div className="text-3xl">{"$"}</div>
              <p className="text-3xl">{price}</p>
            </div>
            <span
              className={`${isPackagePopular ? "text-[#B6D4F7]" : "text-[#111827]"
                } ml-2 text-base font-normal leading-6 text-[#718096]`}
            >
              / month
            </span>
          </div>
        </div>
        <ul
          className={`${isPackagePopular ? "text-white" : "text-[#111827]"
            } mt-5 space-y-2`}
        >
          {provisions?.map((provision) => (
            <FeaturesList
              key={provision.provision_id}
              feature={provision.description}
              isPackagePopular={isPackagePopular}
            />
          ))}
        </ul>
      </div>
      <Button
        onClick={handleAddToCart}
        label="Add to Cart"
        classNames={` bg-[#FAFAFA] text-[#111827] h-14 ${isPackagePopular
          ? "hover:bg-blue-400 hover:text-white"
          : "hover:bg-slate-200"
          } `}
        isLoading={buttonLoading}
      />
    </li>
  );
};

// 1st: Main-Component
const BundlePackagesPlan = ({
  packagesPlans,
  bundle_id,
}: {
  packagesPlans: PackagesType[];
  bundle_id: number;
}) => {

  return (
  
    <section>
      <ul className="no-scrollbar flex w-full justify-between gap-6 xs:max-md:gap-3 xs:max-md:overflow-auto">
        {packagesPlans.map((plan) => (
          <PackagePlanCard
            key={plan.package_id}
            isPackagePopular={plan.package_name === "Standard Package" ? true : false}
            title={plan.package_name}
            description={plan.description}
            price={plan.price}
            provisions={plan.provisions}
            package_id={plan.package_id}
            bundle_id={bundle_id} 
            link={""}
          />
        ))}
      </ul>
    </section>
  );
};

export default BundlePackagesPlan;
