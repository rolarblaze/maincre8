import { Button, CartSection, AddOnSection, PageLayout } from "@/components";

const CartPage = () => {
  return (
    <PageLayout className="full-width content-grid min-h-[calc(100dvh-4rem)] justify-items-center sm:bg-[#F7F9FC]">
      <div className="h-fit space-y-10 bg-white p-8 font-manrope max-sm:px-0 sm:my-10 sm:rounded-2xl lg:w-[50rem]">
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
    </PageLayout>
  );
};
export default CartPage;
