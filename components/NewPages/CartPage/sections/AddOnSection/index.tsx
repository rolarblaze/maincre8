import { AddOnItem } from "./components";

const AddOnSection = () => {
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

          <div className="flex w-full flex-wrap gap-6">
            {recommendations.map((item) => (
              <AddOnItem key={item.id} type={type} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
export default AddOnSection;

const addOns = [
  {
    type: "brand designs",
    recommendations: [
      {
        id: "bd-1",
        name: "additional revisions",
        feature: "2 revisions",
        price: 10,
      },
      {
        id: "bd-2",
        name: "brand material design",
        feature: "1 extra design",
        price: 10,
      },
      {
        id: "bd-3",
        name: "marketing designs",
        feature: "5 extra designs",
        price: 10,
      },
      {
        id: "bd-4",
        name: "presentations & slides",
        feature: "5 extra slides",
        price: 10,
      },
    ],
  },
  {
    type: "graphic designs",
    recommendations: [
      {
        id: "gd-1",
        name: "additional revisions",
        feature: "2 revisions",
        price: 10,
      },
      {
        id: "gd-2",
        name: "marketing designs",
        feature: "5 extra designs",
        price: 10,
      },
      {
        id: "gd-3",
        name: "presentations & slides",
        feature: "5 extra slides",
        price: 10,
      },
    ],
  },
];
