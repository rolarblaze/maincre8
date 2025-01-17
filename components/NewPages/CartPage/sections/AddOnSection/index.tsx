import { AddOnItem } from "./components";

interface AddOnSectionProps {
  addOns: {
    type: string;
    recommendations: any[];
  }[];
  onAddOnChange: (addon: { id: number; quantity: number; bundleName: string }) => void;
}

const AddOnSection: React.FC<AddOnSectionProps> = ({ addOns, onAddOnChange }) => {

  return (
    <section className="space-y-4">
      <h2 className="text-sm font-medium leading-[150%] text-grey900">
        Recommended Add-ons
      </h2>

      {addOns.map(({ type, recommendations }) => (
        <div key={type} className="space-y-2.5">
          <h3 className="text-xs font-semibold uppercase text-grey400">
            {type}
          </h3>

          <div className="flex flex-wrap gap-6 overflow-x-auto py-4">
            {recommendations.map((item) => (
              <AddOnItem
                key={item.uniqueKey}
                {...item}
                onChange={(addon) =>
                  onAddOnChange({ ...addon, bundleName: type }) // Include bundle name
                }
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default AddOnSection;

