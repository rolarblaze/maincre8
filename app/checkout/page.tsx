import { CheckoutSection, PageLayout, SummarySection } from "@/components";

const CheckoutPage = () => {
  return (
    <PageLayout className="bg-[#F7F9FC]">
      <div className="full-width mx-auto flex size-full min-h-[calc(100dvh-4rem)] max-w-[84rem] items-start justify-between max-xl:flex-col sm:gap-10 sm:px-8 sm:py-10">
        <CheckoutSection />
        <SummarySection />
      </div>
    </PageLayout>
  );
};

export default CheckoutPage;
