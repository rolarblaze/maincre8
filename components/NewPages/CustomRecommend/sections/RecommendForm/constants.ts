import { RecommendFormValues } from "./type";

export const RECOMMEND_INITIAL_VALUES: RecommendFormValues = {
  // BUSINESS INFORMATION
  contactEmail: "",
  contactPhoneNumber: "",
  industry: [],
  // PREFERRED SOLUTIONS
  usefulDigitalServices: [],

  document: null as File | null,
};

export const optionHolder = [
  {
    label: "default",
    value: "default",
  },
];

// TYPE OF INDUSTRY
export const typeOfIndustryOptions = [
  {
    label: "Agriculture",
    value: "Agriculture",
  },
  {
    label: "Automobiles and Components",
    value: "Automobiles and Components",
  },
  {
    label: "Commercial and Professional Service",
    value: "Commercial and Professional Service",
  },
  {
    label: "Constructions and Real Estate",
    value: "Constructions and Real Estate",
  },
  {
    label: "Consumer Services",
    value: "Consumer Services",
  },
  {
    label: "Education",
    value: "Education",
  },
  {
    label: "Energy and Utilities",
    value: "Energy and Utilities",
  },
  {
    label: "Financial Institution",
    value: "Financial Institution",
  },
  {
    label: "Food, Beverage, and Tobacco",
    value: "Food, Beverage, and Tobacco",
  },
  {
    label: "Healthcare",
    value: "Healthcare",
  },
  {
    label: "Hospitality",
    value: "Hospitality",
  },
  {
    label: "Insurance",
    value: "Insurance",
  },
  {
    label: "Media and Entertainment",
    value: "Media and Entertainment",
  },
  {
    label: "Non-Governmental Organization",
    value: "Non-Governmental Organization",
  },
  {
    label: "Oil and Gas",
    value: "Oil and Gas",
  },
  {
    label: "Retail",
    value: "Retail",
  },
];

export const USEFUL_DIGITAL_SERVICES = [
  {
    key: "digitalMarketing",
    value: "Digital Marketing (SEO, PPC, Social Media Marketing)",
  },
  {
    key: "contentCreation",
    value: "Content Creation (Blogs, Videos, Graphics)",
  },
  { key: "webDevandDesign", value: "Website Development and Design" },
  { key: "eCommerce", value: "E-commerce Solutions" },
  { key: "dataAnalyticsandReporting", value: "Data Analytics and Reporting" },
  { key: "emailMarketing", value: "Email Marketing" },
  { key: "others", value: "Others (please specify)" },
];
