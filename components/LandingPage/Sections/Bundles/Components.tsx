import Button from "@/components/Button";
import { Chart, ListCheck, Palette } from "@/public/icons";

export const serviceBundles = {
  digital: [
    {
      icon: <Chart />,
      bundle: "SEO Optimization Bundle",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Link Building",
        "Technical SEO Audit",
        "Content Creation and Optimization",
        "Local SEO",
        "Mobile SEO",
        "Voice Search Optimization",
        "Schema Markup Implementation",
        "Site Speed Optimization",
        "Image Optimization",
        "SEO Competitor Analysis",
        "User Experience (UX) Enhancements",
        "Analytics and Reporting",
        "SEO Training and Consultation",
      ],
    },
    {
      icon: <Chart />,
      bundle: "Digital Marketing Strategy",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: [
        "Campaign Planning",
        "Ad Management",
        "Performance Reporting",
        "Audience Research and Segmentation",
        "Creative Design and Development",
        "A/B Testing",
        "Landing Page Optimization",
        "Budget Allocation and Management",
        "Remarketing/Retargeting Strategies",
        "Social Media Advertising",
        "Influencer Marketing",
        "Content Marketing",
        "Email Marketing Campaigns",
        "Campaign Automation Tools",
        "Competitive Analysis and Benchmarking",
      ],
    },
    {
      icon: <Chart />,
      bundle: "E-commerce Setup Bundle",
      price: "$180",
      description: "For most businesses that want to optimize web queries",
      features: [
        "Storefront Design",
        "Product Listing",
        "Payment Integration",
        "SEO Optimization",
        "Mobile Optimization",
        "User Experience (UX) Design",
        "Customer Support Integration",
        "Inventory Management System",
        "Marketing Tools Integration",
        "Security Features",
        "Shipping and Fulfillment Integration",
        "Customer Reviews and Ratings",
        "Loyalty Programs and Discounts",
        "Content Management System (CMS)",
      ],
    },
  ],
  creative: [
    {
      icon: <Palette />,
      bundle: "Brand Identity Bundle",
      price: "$20",
      description: "For most businesses that want to optimize web queries",
      features: [
        "Logo Design",
        "Brand Guidelines",
        "Business Card Design",
        "Stationery Design (Letterhead, Envelope)",
        "Packaging Design",
        "Website Design Consistency with Branding",
        "Signage and Display Design",
        "Uniform and Merchandise Design",
        "Brand Voice Development",
        "Brand Storytelling",
        "Brand Identity Consultation",
        "Brand Audit and Analysis",
        "Brand Reputation Management",
        "Brand Awareness Campaigns",
        "Brand Partnership Development",
      ],
    },
    {
      icon: <Palette />,
      bundle: "Social Media Content Creation",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: [
        "Post Design",
        "Content Calendar",
        "Engagement Analytics",
        "Social Media Strategy Development",
        "Platform-Specific Content Creation",
        "Community Management",
        "Influencer Collaboration",
        "Social Media Advertising",
        "Hashtag Research and Optimization",
        "Reputation Management",
        "User-Generated Content Promotion",
        "Live Streaming and Video Content",
        "Competitor Analysis",
        "Social Media Contests and Giveaways",
        "Regular Performance Reports",
      ],
    },
    {
      icon: <Palette />,
      bundle: "Website Design Bundle",
      price: "$100",
      description: "For most businesses that want to optimize web queries",
      features: [
        "Custom Website Design",
        "Responsive Layout",
        "Basic SEO Optimization",
        "Content Management System Integration",
        "E-commerce Functionality",
        "Custom Graphics and Branding",
        "Social Media Integration",
        "Blog Setup",
        "Contact Form Integration",
        "Website Maintenance and Support",
        "Web Hosting and Domain Setup",
        "Security Features (SSL, Firewalls)",
        "Multilingual Support",
        "Analytics and Tracking Setup",
        "Performance Optimization",
      ],
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
