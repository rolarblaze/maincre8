import { PlusIcon, TrashIcon } from "@/public/svgs";
import { CartItem } from "./components";

const CartSection = () => {
  return (
    <section className="flex flex-col gap-4 sm:gap-6">
      <h3 className="text-sm font-medium leading-[150%] text-grey900">
        Your Cart
      </h3>

      <div className="divide-y border-grey100 sm:rounded-[1.25rem] md:border md:px-6 md:py-2.5">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div className="ml-auto flex items-center justify-center gap-4 text-sm font-semibold text-grey400 sm:gap-6">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-grey100 px-5 py-2">
          Add New Bundle <PlusIcon fillColor="#667185" />
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border border-grey100 px-4 py-2">
          <span>Clear Cart</span>
          <TrashIcon fillColor="#d0d5dd" />
        </button>
      </div>
    </section>
  );
};
export default CartSection;

const cartItems = [
  {
    id: "bd",
    name: "Brand Design",
    type: "Standard Package",
  },
  {
    id: "gd",
    name: "Graphic Design",
    type: "Standard Package",
  },
  {
    id: "dm",
    name: "Digital Marketing",
    type: "Standard Package",
  },
  {
    id: "cm",
    name: "Content Writing",
    type: "Standard Package",
  },
  {
    id: "aob",
    name: "All-In-One Bundle",
    type: "Standard Package",
  },
];
