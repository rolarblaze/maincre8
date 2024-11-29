import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { initializeSession, addItemToCart, switchPackage, getCartItems } from "@/redux/cart/features";
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
  isCurrentPackage: boolean;
  isSwitching: boolean;
  cartItemId?: number;
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

// 2nd: Sub-Component-1 of Main-Compoent
const PackagePlanCard = ({
  isPackagePopular,
  isCurrentPackage,
  isSwitching,
  cartItemId,
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
      }

      // Add item to cart using the session ID and the dynamic bundle_id
      if (!bundle_id) {
        // Dispatch error alert
        dispatch(
          addAlert({
            id: `Error adding ${title} to cart`,
            headText: "Error",
            subText: "Bundle ID is missing. Please select a valid bundle.",
            type: "error",
            autoClose: true,
          }),
        );
        return
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
    } finally {
      setButtonLoading(false);
    }
  };


  const handleSwitchPackage = async () => {
    try {
      setButtonLoading(true);
      if (!cartItemId) {
        throw new Error("Cart item ID is required for switching packages.");
      }

      const result = await dispatch(switchPackage({ cartItemId, packageId: package_id })).unwrap();

      dispatch(
        addAlert({
          id: `Switched to ${title}`,
          headText: "Success",
          subText: result.message,
          type: "success",
          autoClose: true,
        })
      );

      // Refetch cart items to reflect changes
      await dispatch(getCartItems());
    } catch (error) {
      dispatch(
        addAlert({
          id: `Error switching to ${title}`,
          headText: "Error",
          subText: (error as Error)?.message || "Failed to switch package",
          type: "error",
          autoClose: true,
        })
      );
    } finally {
      setButtonLoading(false);
    }
  };


  return (
    <li
      className={`${isPackagePopular ? "bg-[#1574E5]" : "bg-white"
        } relative flex w-1/3 min-w-[350px] flex-col justify-between gap-10 rounded-3xl border border-[#EEEFF2] p-8 xs:max-md:min-w-[350px]`}
    >
      {isPackagePopular && (
        <div className="absolute -right-1 -top-1 rounded-bl-2xl bg-white px-6 py-3 xs:max-md:px-3">
          <p className="text-lg xs:max-md:text-base font-semibold leading-5 text-[#1574e5]">
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
        onClick={isSwitching ? handleSwitchPackage : handleAddToCart}
        label={isSwitching ? "Switch Package" : "Add to Cart"}
        classNames={` bg-[#FAFAFA] text-[#111827] h-14 ${isPackagePopular
          ? "hover:bg-blue-400 hover:text-white"
          : "hover:bg-slate-200"
          } `}
        isLoading={buttonLoading}
        disabled={isCurrentPackage}
      />
    </li>
  );
};

// 1st: Main-Component
const BundlePackagesPlan = ({
  packagesPlans,
  bundle_id,
  isSwitching = false,
  cartItemId,
}: {
  packagesPlans: PackagesType[];
  bundle_id: number;
  isSwitching?: boolean;
  cartItemId?: number;
}) => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  // Find the current package in the cart for the given bundle
  const currentCartItem = cartItems.find((item) => item.bundle.bundle_id === bundle_id);
  const currentPackageId = currentCartItem?.package.package_id;

  return (

    <section>
      <ul className="no-scrollbar flex w-full justify-between gap-6 xs:max-md:gap-3 overflow-auto">
        {packagesPlans.map((plan) => (
          <PackagePlanCard
            key={plan.package_id}
            isCurrentPackage={plan.package_id === currentPackageId}
            isSwitching={isSwitching}
            isPackagePopular={plan.package_name === "Standard Package" ? true : false}
            title={plan.package_name}
            description={plan.description}
            price={plan.price}
            provisions={plan.provisions}
            package_id={plan.package_id}
            bundle_id={bundle_id}
            cartItemId={cartItemId}
            link={""}
          />
        ))}
      </ul>
    </section>
  );
};

export default BundlePackagesPlan;
