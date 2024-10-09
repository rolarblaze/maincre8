import { CheckoutSection, SummarySection } from "@/components";

const CheckoutPage = () => {
  return (
    <div className="full-width content-grid min-h-[calc(100dvh-4rem)] justify-items-center bg-[#F7F9FC] sm:py-10">
      <div className="full-width flex size-full max-w-[84rem] items-start justify-between sm:gap-10 max-xl:flex-col sm:px-8">
        <CheckoutSection />
        <SummarySection />
      </div>
    </div>
  );
};

export default CheckoutPage;
