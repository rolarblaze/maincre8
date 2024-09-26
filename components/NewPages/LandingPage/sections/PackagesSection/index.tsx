import { packages } from "./constants";
import { getBorderClass, getBackgroundClass } from "./helperFunc";

const PackagesSection = () => {
  return (
    <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 lg:justify-between">
      {packages.map(({ title, icon }) => (
        <div
          key={title}
          className={`size-fit space-y-5 rounded-2xl border px-2 pb-2 pt-3.5 sm:px-2.5 sm:pb-2.5 sm:pt-5 ${getBorderClass(title)} `}
        >
          <h3 className="px-2.5 text-sm font-bold leading-[1.6875rem] text-grey900 sm:text-xl">
            {title}
          </h3>

          <div
            className={`flex h-[7.5rem] w-36 items-center justify-center overflow-hidden rounded-[0.625rem] bg-error-50 sm:h-40 sm:w-[12.25rem] ${getBackgroundClass(title)} `}
          >
            {icon}
          </div>
        </div>
      ))}
    </div>
  );
};
export default PackagesSection;
