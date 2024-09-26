import PageLayout from "@/components/NewLayout";
import {
  BrandSection,
  CtaSection,
  ExpertSection,
  FeatureSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,
  ProofSection,
  TestimonialSection,
} from "./sections";
import ProudlyMadeSection from "@/components/LandingPage/Sections/ProudlyMadeSection";
import WhyChooseSellCre8 from "@/components/LandingPage/Sections/WhyChooseSellCre8";
import CustomerReviews from "@/components/LandingPage/Sections/CustomerReviews";
import IndustryLeadingExperts from "@/components/LandingPage/Sections/IndustryLeadingExperts";

const LandingPage = () => {
  return (
    <PageLayout>
      <main className="full-width content-grid min-h-[calc(100dvh-4rem)]">
        <HeroSection />
        <PackagesSection />
        <ProudlyMadeSection />
        {/* <ProofSection /> */}
        <WhyChooseSellCre8 />
        {/* <FeatureSection /> */}
        <LearnMoreSection />
        <BrandSection />
        {/* <TestimonialSection /> */}
        <CustomerReviews />
        {/* <ExpertSection /> */}
        <IndustryLeadingExperts />
        <CtaSection />
      </main>
    </PageLayout>
  );
};
export default LandingPage;
