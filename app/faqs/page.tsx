import ComprehensiveSupport from "@/components/NewPages/FAQPage/sections/ComprehensiveSupport";
import DeliverySteps from "@/components/NewPages/FAQPage/sections/DeliverySteps";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";
import React from "react";

function FAQS() {
  return (
    <>
      <WhiteHeroSection
        title="Frequently Asked Questions"
        paragraph="ALL YOUR QUESTIONS, ANSWERED"
        showSearchbar={true}
        showTabs={true}
      />
      <DeliverySteps />
      <ComprehensiveSupport />
    </>
  );
}

export default FAQS;
