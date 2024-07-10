// "use client";
import {
  AppWrapper,
  HomepageDashboard,
  HomepageHero,
  HomepageBrand,
  CustomerReviews,
  HomepageCTA,
  HomepageBenefits,
  HomepageBundles,
  HomepageSubscribe,
  HomepageServices,
} from "@/components";

export default function Home() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between">
        <HomepageHero />
        <HomepageServices />
        <HomepageBundles />
        <HomepageDashboard />
        <HomepageBenefits />
        <HomepageBrand />
        <CustomerReviews />
        <HomepageCTA />
        <HomepageSubscribe />
      </main>
    </AppWrapper>
  );
}
