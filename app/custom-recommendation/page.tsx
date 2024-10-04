import RecommendForm from "@/components/NewPages/CustomRecommend/sections/RecommendForm";
import WhiteHeroSection from "@/components/NewPages/sharedSections/WhiteHeroSection";

const BusinessForm = () => {
  return (
    <>
      <WhiteHeroSection
        title="Let Us Help You Choose the Perfect Package!"
        paragraph="Answer a few questions, and we’ll recommend the best options tailored to your needs."
      />
      <RecommendForm />
    </>
  );
};
export default BusinessForm;
