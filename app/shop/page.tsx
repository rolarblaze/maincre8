import {
  AppWrapper,
  HomepageCTA,
  HomepageSubscribe,
  SearchFilterSection,
  ShopSections,
} from "@/components";

const Shop = () => {
  return (
    <AppWrapper type="">
      <div className="mt-20 space-y-10 max-w-[76rem] mx-auto">
        {/* SEARCH AND FILTER SECTION */}

        <SearchFilterSection />

        {/* DIGITAL MARKETING SERVICES */}

        <ShopSections />
      </div>

      {/* EXTRA SECTIONS */}
      <HomepageCTA />
      <HomepageSubscribe />
    </AppWrapper>
  );
};
export default Shop;
