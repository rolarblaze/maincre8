import Button from "@/components/Button";
import { AddOnSection, CartSection } from "./sections";

const CartPage = () => {
  return (
    <div className="w-[50rem] space-y-10 rounded-2xl bg-white p-8 font-manrope">
      <h2 className="text-center text-3.5xl font-semibold leading-10 text-grey900">
        Cart
      </h2>
      <CartSection />
      <AddOnSection />
      <Button label="Checkout" classNames="font-manrope" />
    </div>
  );
};
export default CartPage;
