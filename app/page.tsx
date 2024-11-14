"use client";

import {
  BrandSection,
  CtaSection,
  HeroSection,
  LearnMoreSection,
  PackagesSection,
  CustomerReviews,
  PageLayout,
} from "@/components";
import WhyChooseSellCre8 from "@/components/LandingPage/Sections/WhyChooseSellCre8";
import IndustryLeadingExperts from "@/components/NewPages/LandingPage/sections/IndustryLeadingExperts";
import ProudlyMadeSection from "@/components/NewPages/LandingPage/sections/ProudlyMadeSection";
import { getBundles } from "@/redux/shop/features";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";

import { useEffect } from "react";

const Home = () => {
  const dispatch = useAppDispatch();
  const bundlesData = useAppSelector(
    (state: RootState) => state.pageViewData.allShopBundles,
  );
  // useEffect(() => {
  //   if (bundlesData.length === 0) {
  //     dispatch(getBundles());
  //   }
  // }, []);
  return (
    <PageLayout>
      <HeroSection />
      <PackagesSection />
      <ProudlyMadeSection />
      <WhyChooseSellCre8 />
      <LearnMoreSection />
      <BrandSection />
      <CustomerReviews />
      <IndustryLeadingExperts />
      <CtaSection />
    </PageLayout>
  );
};
export default Home;
