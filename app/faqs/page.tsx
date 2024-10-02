import { PageLayout } from "@/components";
import ComprehensiveSupport from "@/components/NewPages/FAQPage/sections/ComprehensiveSupport";
import DeliverySteps from "@/components/NewPages/FAQPage/sections/DeliverySteps";
import FaqSection from "@/components/NewPages/FAQPage/sections/FaqSection";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";
import React from "react";

function FAQS() {
  return (
    <PageLayout>
      <WhiteHeroSection
        title="Frequently Asked Questions"
        paragraph="ALL YOUR QUESTIONS, ANSWERED"
        showSearchbar={true}
        showTabs={true}
      />
      <FaqSection />
      <DeliverySteps />
      <ComprehensiveSupport />
    </PageLayout>
  );
}

export default FAQS;
