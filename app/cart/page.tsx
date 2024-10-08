import { Button, CartSection, AddOnSection } from "@/components";

const CartPage = () => {
  return (
    <div className="full-width content-grid min-h-[calc(100dvh-4rem)] justify-items-center bg-[#F7F9FC] py-10">
      <div className="h-fit w-[50rem] space-y-10 rounded-2xl bg-white p-8 font-manrope">
        <h2 className="text-center text-3.5xl font-semibold leading-10 text-grey900">
          Cart
        </h2>
        <CartSection />
        <AddOnSection />
        <Button
          link="/checkout"
          label="Checkout"
          classNames="font-manrope block max-w-[22rem] mx-auto py-4 rounded-lg"
        />
      </div>
    </div>
  );
};
export default CartPage;
