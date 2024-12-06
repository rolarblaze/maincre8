"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "@/public/svgs";
import { ResizablePanel } from "@/components";

interface Props {
  id: string;
  name: string;
  price: number;
  feature: string;
  type: string;
  bundleName: string; // Added bundleName prop
  onChange: (addon: { id: number; quantity: number; bundleName: string }) => void;
  disabled?: boolean;
}

const AddOnItem: React.FC<Props> = ({ id, price, name, feature, type, bundleName, onChange, disabled = false }) => {
  const [quantity, setQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  // Directly check if the URL contains '/checkout'
  const isCheckoutPage = typeof window !== 'undefined' && window.location.pathname.includes('/checkout');

  // Combine passed disabled prop with the checkout page state
  const finalDisabled = disabled || isCheckoutPage;

  const incrementQuantity = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent parent div click

    if (finalDisabled) return; // Do nothing if disabled
    if (!isSelected) {
      // Only set quantity to 1 when the user interacts for the first time
      setIsSelected(true);
      setQuantity(1);
      onChange({ id: parseInt(id), quantity: 1, bundleName });
    } else {
      setQuantity((prevQuantity) => {
        const newQuantity = prevQuantity + 1;
        onChange({ id: parseInt(id), quantity: newQuantity, bundleName });
        return newQuantity;
      });
    }
  };

  const decrementQuantity = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent parent div click

    if (finalDisabled) return; // Do nothing if disabled
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      onChange({ id: parseInt(id), quantity: newQuantity, bundleName });
      return newQuantity;
    });
  };

  const handleSelection = () => {
    if (!isSelected && !finalDisabled) {
      setIsSelected(true);
      setQuantity(1); // Initialize quantity as 1 when selected
      onChange({ id: parseInt(id), quantity: 1, bundleName });
    }
  };

  return (
    <div
      onClick={handleSelection}
      className={`min-h-[150px] h-fit min-w-44 w-fit cursor-pointer rounded-[0.875rem] border-2 border-grey100 hover:bg-grey200 p-6 transition-all duration-300 ${isSelected ? "border-success-200 bg-success-50" : ""}`}
    >
      <div className="flex max-w-28 flex-col items-center justify-center gap-3">
        <h4 className="text-center text-xs font-semibold uppercase lg:text-sm">{name}</h4>
        <p className="leading-[165%] text-grey600 max-lg:text-xs text-center">{feature}</p>
        <p className="text-lg font-semibold leading-4 text-[#111827]">${price}</p>
      </div>

      <ResizablePanel>
        {isSelected && (
          <div className="flex items-center justify-center gap-3.5 pb-1 pt-5">
            <button
              onClick={decrementQuantity}
              className="rounded-lg bg-white p-2"
              disabled={quantity === 0}
            >
              <MinusIcon fillColor="#98A2B3" />
            </button>

            <span className="block text-lg font-semibold text-[#111827]">
              {quantity}
            </span>

            <button
              onClick={incrementQuantity}
              className="rounded-lg bg-white p-2"
            >
              <PlusIcon fillColor="#98A2B3" />
            </button>
          </div>
        )}
      </ResizablePanel>
    </div>
  );
};

export default AddOnItem;
