import {
  HomepageBenefits,
  HomepageBundles,
  HomepageCustomerReview,
  HomepageServices,
} from "@/components";
import AppWrapper from "@/components/LandingPage/AppWrapper";
export default function Home() {
  return (
    <AppWrapper type="">
      <main className="flex flex-col items-center justify-between">
        <h1>Home page</h1>
        <HomepageServices />
        <HomepageBundles />
        <HomepageBenefits />
        <HomepageCustomerReview />
      </main>
    </AppWrapper>
  );
}
