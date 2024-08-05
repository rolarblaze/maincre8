import { InfoIcon, NoCheckFillIcon } from "@/public/svgs";
import CheckFill from "@/public/svgs/CheckFillIcon";
import TickIcon from "@/public/svgs/TickIcon";

const bundleStats = [
  {
    title: "Site Audit and Analysis",
    desc: "some description", // For the info icon
    package: [
      {
        text: "Comprehensive SEO Audit",
        included: true,
      },
      {
        text: "Competitor Analysis",
        included: false,
      },
      {
        text: "Backlink Profile Analysis",
        included: false,
      },
    ],
  },
  {
    title: "On-Page Optimization for up to 20 pages",
    desc: "some description",
    package: [
      {
        text: "Keyword Research and Implementation",
        included: true,
      },
      {
        text: "Meta Tags Optimization (Title, Description, Keywords)",
        included: false,
      },
      {
        text: "Content Optimization (Headings, Alt Text, URL Structure)",
        included: false,
      },
      {
        text: "Internal Linking Strategy",
        included: false,
      },
    ],
  },
  {
    title: "Off-Page Optimization",
    desc: "some description",
    package: [
      {
        text: "Basic Link Building Strategy",
        included: true,
      },
      {
        text: "Social Media Integration",
        included: false,
      },
      {
        text: "Outreach for High-Quality Backlinks",
        included: false,
      },
      {
        text: "Online Reputation Management",
        included: false,
      },
    ],
  },
];

const BundleInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold leading-8">Bundle Benefits</h3>

      <div className="grid lg:grid-cols-3 gap-6 w-fit">
        {bundleStats.map((stat, i) => (
          <div
            key={i}
            className="max-w-[22.5rem] divide-y-2 *:py-4 h-auto last:[&>div]:border-b-2"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-base font-semibold ">{stat.title}</h4>

              <InfoIcon className="size-5" />
            </div>

            {stat.package.map((item) => (
              <div className="flex justify-start items-center gap-3">
                {item.included ? (
                  <CheckFill className="min-w-5" />
                ) : (
                  <NoCheckFillIcon className="min-w-5" />
                )}
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
export default BundleInfo;
