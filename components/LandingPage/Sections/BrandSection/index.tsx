const BrandSection = () => {
  const brands = ["DevSEAL", "SellPlanner", "SellMerch", "Piazza"];
  return (
    <section className="w-full  bg-primary900">
      <div className="text-center space-y-8 py-20 max-w-[76rem] flex flex-col justify-center items-center mx-auto">
        {/* CONTENT */}
        <div className="space-y-4.5">
          <h2 className="text-5.5xl font-bold tracking-[-0.105rem] text-grey50">
            Brands We've Served  
          </h2>
          <p className="font-medium text-white/70">
            Trusted by Leading Companies
          </p>
        </div>

        {/* LOGOS */}
        <div className="flex flex-wrap justify-center items-center gap-x-28 gap-y-4">
          {brands.map((item) => (
            <div
              key={item}
              className="text-2xl font-bold text-grey50 leading-8 tracking-tight border border-grey600 p-4 rounded-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BrandSection;
