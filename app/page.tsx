"use client";
import {
  AppWrapper,
  BrandSection,
  CustomerReviews,
  DashboardSection,
  HeroSection,
  HomepageBundles,
  HomepageServices,
  SubscribeSection,
} from "@/components";

export default function Home() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between">
        <HeroSection />
        <HomepageServices />
        <HomepageBundles />
        <DashboardSection />
        <BrandSection />
        <CustomerReviews />
        <SubscribeSection />
      </main>
    </AppWrapper>
  );
}
