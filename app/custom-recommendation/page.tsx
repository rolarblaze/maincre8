import { PageLayout } from "@/components";
import WebsiteRecommendForm from "@/components/NewPages/CustomRecommend/WebsiteRecommendForm";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";

const BusinessForm = () => {
  return (
    <PageLayout>
      <WhiteHeroSection
        title="Let Us Help You Choose the Perfect Package!"
        paragraph="Answer a few questions, and we’ll recommend the best options tailored to your needs."
      />
      <WebsiteRecommendForm />
    </PageLayout>
  );
};
export default BusinessForm;
