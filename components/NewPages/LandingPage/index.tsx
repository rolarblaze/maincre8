import PageLayout from "@/components/NewLayout";
import {
  BrandSection,
  CtaSection,
  ExpertSection,
  FeatureSection,
  HeroSection,
  LearnMoreSection,
  ProofSection,
  TestimonialSection,
} from "./sections";

const LandingPage = () => {
  return (
    <PageLayout>
      <main className="full-width content-grid min-h-[calc(100dvh-4rem)]">
        <HeroSection />
        <ProofSection />
        <FeatureSection />
        <LearnMoreSection />
        <BrandSection />
        <TestimonialSection />
        <ExpertSection />
        <CtaSection />
      </main>
    </PageLayout>
  );
};
export default LandingPage;
