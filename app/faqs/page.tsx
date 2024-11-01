import { PageLayout } from "@/components";
import ComprehensiveSupport from "@/components/NewPages/FAQPage/sections/ComprehensiveSupport";
import DeliverySteps from "@/components/NewPages/FAQPage/sections/DeliverySteps";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";

function FAQS() {
  return (
    <PageLayout>
      <WhiteHeroSection
        title="Frequently Asked Questions"
        paragraph="ALL YOUR QUESTIONS, ANSWERED"
        showSearchbar={true}
        showTabs={true}
      />
      <DeliverySteps />
      <ComprehensiveSupport />
    </PageLayout>
  );
}

export default FAQS;
