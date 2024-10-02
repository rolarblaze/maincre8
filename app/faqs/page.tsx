import { HowWeDeliver, PageLayout } from "@/components";
import ComprehensiveSupport from "@/components/NewPages/FAQPage/sections/ComprehensiveSupport";
import DeliverySteps from "@/components/NewPages/FAQPage/sections/DeliverySteps";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";
import React from "react";

function FAQS() {
  return (
    <PageLayout>
      <WhiteHeroSection
        title="Frequently Asked Questions"
        paragraph="ALL YOUR QUESTIONS, ANSWERED"
      />
      <DeliverySteps />
      <ComprehensiveSupport />
    </PageLayout>
  );
}

export default FAQS;
