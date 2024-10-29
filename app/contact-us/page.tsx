import { Metadata } from "next";
import { PageLayout } from "@/components";
import MainContactSection from "@/components/NewPages/ContactPage/sections/MainContactSection";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";

export const metadata: Metadata = {
  title: "Contact SellCrea8 | Get In Touch for Marketing Solutions",
  description:
    "Have questions? Reach out to the SellCrea8 team for personalized support and inquiries about our content, design, and marketing services. We're here to help you grow.",
  keywords: [
    "Contact SellCrea8",
    "Customer Support",
    "Marketing Inquiries",
    "Branding and Design Assistance",
  ],
};

function ContactUs() {
  return (
    <PageLayout>
      <WhiteHeroSection
        title="Contact Us"
        paragraph="FOR ANY INQUIRIES, REACH OUT TO US, OUR TEAM WILL GET BACK TO YOU PROMPTLY"
      />
      <MainContactSection />
    </PageLayout>
  );
}

export default ContactUs;
