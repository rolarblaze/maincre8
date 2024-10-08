import { CPCartSection, SummarySection } from "@/components";

const CheckoutPage = () => {
  return (
    <div className="full-width content-grid min-h-[calc(100dvh-4rem)] justify-items-center bg-[#F7F9FC] py-10">
      <div className="full-width flex size-full max-w-[84rem] items-start justify-between gap-10 px-8">
        <CPCartSection />
        <SummarySection />
      </div>
    </div>
  );
};

export default CheckoutPage;
