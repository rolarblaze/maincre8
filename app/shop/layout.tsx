import { Metadata } from "next";
import { PageLayout } from "@/components";
import bundleCardsDetails from "@/components/Shop/data/bundleCardDetails";
import BundleListCardOptions from "@/components/Shop/section/BundleListCardOptions";


export const metadata: Metadata = {
  title: `SellCrea8 | Flexible Content, Design, Branding & Marketing Packages`,
  description:
    "Explore SellCrea8’s subscription-based content, branding, and marketing packages. Find the perfect fit for your business and budget, designed to deliver measurable results.",
  keywords: [
    "SellCrea8 Packages",
    "Content and Design Services",
    "Marketing Solutions",
    "Subscription Packages",
    "Flexible Pricing",
  ],
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <PageLayout>
      <main className="relative space-y-20 px-5 pb-20 xs:max-md:space-y-10 xs:max-md:px-0 xs:max-md:pb-10">
        <h1 className="mt-20 xs:max-md:mt-10 w-full text-center text-3xl font-semibold leading-9 xs:max-md:text-3xl">
          Choose the Right Plan for Your Business
        </h1>

        {/* Bundles Card-List Options To Choose From */}
        <BundleListCardOptions />

        {/* <div className="xs:max-md:h-full no-scrollbar">{children}</div> */}
        <div className="">{children}</div>
      </main>
    </PageLayout>
  );
}
