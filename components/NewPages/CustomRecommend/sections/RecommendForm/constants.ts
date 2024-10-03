import { RecommendFormValues } from "./type";

export const RECOMMEND_INITIAL_VALUES: RecommendFormValues = {
  // ADDITIONAL INFO
  additionalInfo: "",

  // CONTACT INFO
  contactEmail: "",
  contactPhoneNumber: "",
  // industry: [],
  // PREFERRED SOLUTIONS
  // usefulDigitalServices: [],

  // document: null as File | null,
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

export const recommendContactFormData = [
  {
    name: "contactPhoneNumber",
    type: "text",
    label: "Phone Number",
    placeholder: "+1...",
  },
  {
    name: "contactEmail",
    type: "email",
    label: "Email",
    placeholder: "Enter email",
  },
];

`SUBMIT A BRIEF FORM
1. service kinds.

OPTIONS
Brand Design, Digital Marketing, Graphic Design, Content Writing, Social Media Management, I'm not sure yet.

LABEL: What kind of services are you interested in?

2. service goal.
OPTIONS
Build Brand Awareness, Increase Sales/Conversions, improve Online Presence, Launch a New Product/Service, Social Media Management, I'm not sure yet 

LABEL: What is your primary goal for this service?

3. monthly budget.
OPTIONS
Less than $500
500 -1,000
1,000 - 2,500
2,500 and above
We haven't set a budget.

LABEL: What is your estimated monthly budget for this service?

4. anticipation duration.
OPTIONS 
One-time project
1-3 months
3-6 months
6-12 months
Ongoing

LABEL: How long do you anticipate needing these services?

5. business type.

OPTIONS
Startup
Small Business
Medium-Sized Business
Enterprise

LABEL: What type of business do you operate?

7. additionalInfo.
LABEL: Please share any additional information that will help us recommend the best service for you.`;
