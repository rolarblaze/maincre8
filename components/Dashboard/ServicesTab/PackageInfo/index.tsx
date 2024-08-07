import { AvailableIcon, NonAvailableIcon } from "@/public/icons";
import { PackageIcon } from "@/public/svgs";
import { Provision } from "@/redux/shop/interface";

const PackageInfo = ({ Benefits }: { Benefits: Provision[] }) => {
  const groupedBenefits = Benefits.reduce((acc, benefit) => {
    if (!acc[benefit.tags]) {
      acc[benefit.tags] = [];
    }
    acc[benefit.tags].push(benefit);
    return acc;
  }, {} as Record<string, Provision[]>);

  return (
    <div className="grid grid-cols-3 gap-6">
      {Object.keys(groupedBenefits).map((tag) => {
        const benefits = groupedBenefits[tag];
        const sortedBenefits = benefits.sort((a, b) =>
          b.availability ? 1 : -1
        );
        const allUnavailable = benefits.every(
          (benefit) => !benefit.availability
        );

        return (
          <div key={tag}>
            <div className="flex justify-between items-center py-4">
              <p
                className={`font-semibold ${
                  allUnavailable ? "text-grey400" : "text-black"
                }`}
              >
                {tag}
              </p>
              <PackageIcon fillColor="#98A2B3" />
            </div>
            {sortedBenefits.map((benefit) => (
              <div
                key={benefit.provision_id}
                className="flex items-center gap-2 py-4 border-b border-grey300"
              >
                <span className="text-sm">
                  {benefit.availability ? (
                    <AvailableIcon />
                  ) : (
                    <NonAvailableIcon />
                  )}
                </span>
                <span
                  className={`${!benefit.availability ? "text-grey400" : ""}`}
                >
                  {benefit.description}
                </span>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PackageInfo;
