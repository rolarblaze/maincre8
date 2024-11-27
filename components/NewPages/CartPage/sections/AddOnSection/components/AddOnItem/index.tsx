"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/cart";
import { MinusIcon, PlusIcon } from "@/public/svgs";
import { ResizablePanel } from "@/components";

interface Props {
  id: string;
  name: string;
  price: number;
  feature: string;
  type: string;
  onChange: (addon: { id: number; quantity: number }) => void;
}

const AddOnItem: React.FC<Props> = ({ id, price, name, feature, type, onChange }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onChange({ id: parseInt(id), quantity: newQuantity });
      return newQuantity;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      onChange({ id: parseInt(id), quantity: newQuantity });
      return newQuantity;
    });
  };

  const handleSelection = () => {
    if (!isSelected) {
      setIsSelected(true);
      setQuantity(1); // Start with a quantity of 1 when selected
    }
  };



  return (
    <div
      onClick={handleSelection}
      className={`min-h-[150px] h-fit min-w-40 w-fit cursor-pointer rounded-[0.875rem] border-2 border-grey100 p-6 transition-all duration-300 ${isSelected && "border-success-200 bg-success-50"}`}
    >
      <div className="flex max-w-28 flex-col items-center justify-center gap-3">
        <h4 className="text-center text-xs font-semibold uppercase lg:text-sm">
          {name}
        </h4>
        <p className="leading-[165%] text-grey600 max-lg:text-xs text-center">{feature}</p>
        <p className="text-lg font-semibold leading-4 text-[#111827]">
          $ {price}
        </p>
      </div>

      <ResizablePanel>
        {isSelected && quantity > 0 && (
          <div className="flex items-center justify-center gap-3.5 pb-1 pt-5"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={decrementQuantity}
              className="rounded-lg bg-white p-2"
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
