import Button from "@/components/Button";
import { Chart, ListCheck, Palette } from "@/public/icons";

export const serviceBundles = {
  digital: [
    {
      icon: <Chart />,
      bundle: "SEO Optimization Bundle",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: ["Keyword Research", "On-Page SEO", "Link Building"],
    },
    {
      icon: <Chart />,
      bundle: "Digital Marketing Strategy",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: ["Campaign Planning", "Ad Management", "Performance Reporting"],
    },
    {
      icon: <Chart />,
      bundle: "E-commerce Setup Bundle",
      price: "$180",
      description: "For most businesses that want to optimize web queries",
      features: ["Storefront Design", "Product Listing", "Payment Integration"],
    },
  ],
  creative: [
    {
      icon: <Palette />,
      bundle: "Brand Identity Bundle",
      price: "$20",
      description: "For most businesses that want to optimize web queries",
      features: ["Logo Design", "Brand Guidelines", "Stationery Design"],
    },
    {
      icon: <Palette />,
      bundle: "Social Media Content Creation",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: ["Content Planning", "Graphic Design", "Video Production"],
    },
    {
      icon: <Palette />,
      bundle: "Website Design Bundle",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: ["Website Layout", "Responsive Design", "User Experience"],
    },
  ],
};

export const TabButton = ({
  tab,
  activeTab,
  onClick,
  Icon,
  label,
}: {
  tab: "digital" | "creative";
  activeTab: "digital" | "creative";
  onClick: (tab: "digital" | "creative") => void;
  Icon: React.ComponentType<{ fillColor: string }>;
  label: string;
}) => (
  <button
    onClick={() => onClick(tab)}
    className={`px-4 py-2 flex items-center gap-2 text-sm border border-gray-600 rounded-lg ${
      activeTab === tab
        ? "bg-white text-[#093160]"
        : "bg-transparent text-white"
    }`}
  >
    <Icon fillColor={activeTab === tab ? "#093160" : "#ffffff"} /> {label}
  </button>
);

export const Card = ({
  title,
  description,
  icon,
  price,
  features,
}: {
  title: string;
  description: string;
  icon: React.ReactElement;
  price: string;
  features: string[];
}) => (
  <div className="bg-white py-4 px-8 rounded-lg">
    <div className="flex items-center justify-center gap-2 bg-grey50 rounded-lg py-1.5 mb-4">
      <p>{icon}</p>
      <p className="font-semibold text-grey500">{title}</p>
    </div>
    <p className="text-black">
      <span className="font-bold leading-10 text-3xl">{price}</span> /month
    </p>
    <p>{description}</p>

    <Button label="Get Started" classNames="!py-2 !text-xs mt-4 mb-6" />
    {features.map((feature, index) => (
      <div className="flex gap-2 mb-4" key={index}>
        <ListCheck /> <span>{feature}</span>
      </div>
    ))}
  </div>
);
