// import { Marquee } from "@/components";

import {
  AirpeaceLogo,
  GtBankLogo,
  MtnLogo,
  OppoLogo,
  UbaBankLogo,
} from "@/public/icons";

const BrandSection = () => {
  return (
    <section className="py-12 lg:py-[6.25rem] flex flex-col justify-center items-center gap-10 md:gap-12 lg:gap-16">
      <h1 className="text-3xl sm:text-[2rem]">Brands We've Served  </h1>

      <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-16">
        {brands.map(({ id, width, icon }) => (
          <span key={id}>{icon}</span>
        ))}

        {/* <Marquee items={brands} /> */}
      </div>
    </section>
  );
};
export default BrandSection;

const brands = [
  { id: 1, width: "w-48", icon: <OppoLogo /> },
  { id: 2, width: "w-12", icon: <GtBankLogo /> },
  { id: 3, width: "w-24", icon: <MtnLogo /> },
  { id: 4, width: "w-32", icon: <UbaBankLogo /> },
  { id: 5, width: "w-64", icon: <AirpeaceLogo className="mt-4" /> },
];
