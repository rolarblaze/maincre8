import { AppWrapper, HomepageCTA, HomepageSubscribe } from "@/components";
import ShopSections from "@/components/Shop";

const Shop = () => {
  return (
    <AppWrapper type="">
      <div className="mt-20 space-y-10 max-w-[76rem] mx-auto">
        {/* SEARCH AND FILTER SECTION */}
        <div>SEARCH & FILTER INPUT</div>

        {/* DIGITAL MARKETING SERVICES */}
        <div>DMS SECTION</div>
        <ShopSections />

        {/* CREATIVE DESIGN SERVICES */}
        <div>CDS SECTION</div>

        {/* CONTENT/ COPYWRITING  SERVICES */}
        <div>CCS SECTION</div>
      </div>

      {/* EXTRA SECTIONS */}
      <HomepageCTA />
      <HomepageSubscribe />
    </AppWrapper>
  );
};
export default Shop;
