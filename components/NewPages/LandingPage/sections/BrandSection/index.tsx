import {
  AirpeaceLogo,
  GtBankLogo,
  MtnLogo,
  OppoLogo,
  UbaBankLogo,
} from "@/public/icons";
import { FadeUpDiv } from "@/components";

const BrandSection = () => {
  const brands = [
    { id: 1, width: "w-48", icon: <OppoLogo className="opacity-35" /> },
    { id: 2, width: "w-12", icon: <GtBankLogo className="opacity-35" /> },
    { id: 3, width: "w-24", icon: <MtnLogo className="opacity-35" /> },
    { id: 4, width: "w-32", icon: <UbaBankLogo className="opacity-35" /> },
    {
      id: 5,
      width: "w-64",
      icon: <AirpeaceLogo className="mt-4 opacity-35" />,
    },
  ];
  return (
    <FadeUpDiv className="full-width content-grid bg-grey50 py-14 md:py-20 lg:py-[6.25rem]">
      <div className="flex flex-col gap-10 md:items-center md:justify-center md:gap-12 lg:gap-16">
        <h1 className="text-3xl sm:text-[2rem]">Brands We&apos;ve Served  </h1>

        <div className="noScrollbar flex w-full items-center gap-x-6 overflow-x-auto md:gap-x-16">
          {brands.map(({ id, icon }) => (
            <span key={id}>{icon}</span>
          ))}
        </div>
      </div>
    </FadeUpDiv>
  );
};
export default BrandSection;
