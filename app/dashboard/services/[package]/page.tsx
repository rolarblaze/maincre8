import { packages } from "../_constants";

interface ServicePackagePageProps {
  params: {
    package: string;
  };
}
const ServicePackagePage: React.FC<ServicePackagePageProps> = ({ params }) => {
  const getPackageName = () => {
    return packages.find(
      (pkg) => pkg.name.toLowerCase().replace(/\s+/g, "-") === params.package,
    );
  };

  return (
    <div className="font-manrope [&>*]:px-6">
      <header className="space-y-1 pb-4 pt-10">
        <div>back to services</div>

        <h2 className="text-2xl font-semibold text-grey900">
          {getPackageName()?.name}
        </h2>
        <p className="text-base font-medium text-grey500">
          {getPackageName()?.text}
        </p>
      </header>

      <hr />

      <section className="flex justify-between pt-10">
        {["starter", "standard", "premium"].map((item) => {
          return (
            <div
              key={item}
              className="min-w-72 rounded-lg border border-grey200 px-8 py-5"
            >
              plans {item}
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default ServicePackagePage;
