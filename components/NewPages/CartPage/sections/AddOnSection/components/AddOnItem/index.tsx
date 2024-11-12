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
}

const AddOnItem: React.FC<Props> = ({ type, id, price, name, feature }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  const handleAddToCart = () => {
    if (!isSelected) {
      setQuantity(1);
      setIsSelected(true);
      dispatch(
        addToCart({
          type,
          item: { id, name, price, quantity: 1 },
        }),
      );
    }
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(
      addToCart({
        type,
        item: { id, name, price, quantity: newQuantity },
      }),
    );
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(
        addToCart({
          type,
          item: { id, name, price, quantity: newQuantity },
        }),
      );
    } else {
      setQuantity(0);
      setIsSelected(false);
    }
  };

  return (
    <div
      onClick={handleAddToCart}
      className={`h-fit min-w-40 cursor-pointer rounded-[0.875rem] border-2 border-grey100 p-6 transition-all duration-300 ${isSelected && "border-success-200 bg-success-50"}`}
    >
      <div className="flex max-w-28 flex-col items-center justify-center gap-3">
        <h4 className="text-center text-xs font-semibold uppercase lg:text-sm">
          {name}
        </h4>
        <p className="leading-[165%] text-grey600 max-lg:text-sm">{feature}</p>
        <p className="text-lg font-semibold leading-4 text-[#111827]">
          $ {price}
        </p>
      </div>

      <ResizablePanel>
        {isSelected && quantity > 0 && (
          <div className="flex items-center justify-center gap-3.5 pb-1 pt-5">
            <button
              onClick={incrementQuantity}
              className="rounded-lg bg-white p-2"
            >
              <PlusIcon fillColor="#98A2B3" />
            </button>

            <span className="block text-lg font-semibold text-[#111827]">
              {quantity}
            </span>

            <button
              onClick={decrementQuantity}
              className="rounded-lg bg-white p-2"
            >
              <MinusIcon fillColor="#98A2B3" />
            </button>
          </div>
        )}
      </ResizablePanel>
    </div>
  );
};

export default AddOnItem;
