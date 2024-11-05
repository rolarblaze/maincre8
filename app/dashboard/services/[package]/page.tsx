import { Button } from "@/components";
import {
  CheckedCircleSVG,
  PremiumPlanSVG,
  StandardPlanSVG,
  StarterPlanSVG,
} from "@/public/icons";

const addOns = [
  "Marketing Designs",
  "Print & Digital Designs",
  "Reports & Brochures",
  "Presentations & Slides",
];

const ServicePackagePage = () => {
  return (
    <div className="[&>*]:px-6">
      {/* PLANS */}
      <section className="flex flex-wrap justify-start gap-6 pt-10">
        {["starter", "standard", "premium"].map((item) => {
          return (
            <div
              key={item}
              className="min-w-[22rem] space-y-4 rounded-lg border border-grey200 px-8 py-5 text-grey800"
            >
              <div className="flex items-center justify-center gap-2 bg-grey50 p-1.5 capitalize">
                {item === "starter" ? (
                  <StarterPlanSVG />
                ) : item === "standard" ? (
                  <StandardPlanSVG />
                ) : (
                  <PremiumPlanSVG />
                )}

                <p className="text-lg font-semibold leading-[150%] text-grey500">
                  {item} plan
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium leading-6 text-grey900">
                  <span className="text-3.5xl font-semibold leading-10">
                    $499
                  </span>
                  /per month
                </p>
                <p className="leading-6">Perfect for solo entrepreneurs</p>
              </div>

              <Button label="Add to cart" classNames="py-2" />

              <div className="!mt-6 divide-y">
                {["10 marketing designs", "5 sprint / digital designs"].map(
                  (item) => {
                    return (
                      <div
                        key={item}
                        className="flex items-center justify-start gap-2 py-4 text-sm"
                      >
                        <CheckedCircleSVG />
                        {item}
                      </div>
                    );
                  },
                )}
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-5 flex items-center justify-start gap-8 text-sm">
        <p className="font-semibold uppercase leading-5 text-grey700">
          Add ons:
        </p>

        <div className="flex flex-wrap gap-4">
          {addOns.map((addOn) => (
            <div
              key={addOn}
              className="rounded-lg bg-grey100 px-3 py-2 font-medium leading-[150%] text-grey600"
            >
              {addOn}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default ServicePackagePage;
