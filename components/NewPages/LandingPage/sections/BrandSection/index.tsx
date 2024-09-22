import { Marquee } from "@/components";

const BrandSection = () => {
  return (
    <section className="py-12 lg:py-[6.25rem] flex flex-col justify-center items-center gap-10 md:gap-12 lg:gap-16">
      <h1 className="text-3xl sm:text-[2rem]">Brands We've Served  </h1>

      <div className="flex flex-wrap gap-y-4 gap-x-16">
        {brands.map(({ width }) => (
          <div
            key={width}
            className={`h-12 bg-primary500 rounded-lg ${width}`}
          ></div>
        ))}

        {/* <Marquee items={brands} /> */}
      </div>
    </section>
  );
};
export default BrandSection;

const brands = [
  { width: "w-48" },
  { width: "w-12" },
  { width: "w-24" },
  { width: "w-32" },
  { width: "w-64" },
];
