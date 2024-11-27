import { RecommendFormValues } from "./type";

export const RECOMMEND_INITIAL_VALUES: RecommendFormValues = {
  // SELECT FIELDS
  serviceKinds: [],
  serviceGoal: [],
  monthlyBudget: [],
  anticipationDuration: [],
  businessType: [],

  // ADDITIONAL INFO
  additionalInfo: "",

  document: "",

  // CONTACT INFO
  contactEmail: "",
  contactPhoneNumber: "",
};

// DEFAULT OPTION HOLDER
export const optionHolder = [
  {
    label: "default",
    value: "default",
  },
];

// SELECT FIELD OPTIONS
export const serviceKindsOptions = [
  {
    label: "Brand Design",
    value: "Brand Design",
  },
  {
    label: "Digital Marketing",
    value: "Digital Marketing",
  },
  {
    label: "Graphic Design",
    value: "Graphic Design",
  },
  {
    label: "Content Writing",
    value: "Content Writing",
  },
  {
    label: "Social Media Management",
    value: "Social Media Management",
  },
  {
    label: "I'm not sure yet",
    value: "I'm not sure yet",
  },
];
export const serviceGoalOptions = [
  {
    label: "Build Brand Awareness",
    value: "Build Brand Awareness",
  },
  {
    label: "Increase Sales/Conversions",
    value: "Increase Sales/Conversions",
  },
  {
    label: "improve Online Presence",
    value: "improve Online Presence",
  },
  {
    label: "Launch a New Product/Service",
    value: "Launch a New Product/Service",
  },
  {
    label: "Social Media Management",
    value: "Social Media Management",
  },
  {
    label: "I'm not sure yet",
    value: "I'm not sure yet",
  },
];
export const monthlyBudgetOptions = [
  {
    label: "Less than $500",
    value: "Less than 500",
  },
  {
    label: "$500 - $1,000",
    value: "500 - 1,000",
  },
  {
    label: "$1,000 - $2,500",
    value: "1,000 - 2,500",
  },
  {
    label: "$2,500 and above",
    value: "2,500 and above",
  },
  {
    label: "We haven't set a budget.",
    value: "We haven't set a budget.",
  },
];

export const anticipationDurationOptions = [
  {
    label: "One-time project",
    value: "One-time project",
  },
  {
    label: "1-3 months",
    value: "1-3 months",
  },
  {
    label: "3-6 months",
    value: "3-6 months",
  },
  {
    label: "6-12 months",
    value: "6-12 months",
  },
  {
    label: "Ongoing",
    value: "Ongoing",
  },
];

export const businessTypeOptions = [
  {
    label: "Startup",
    value: "Startup",
  },
  {
    label: "Small Business",
    value: "Small Business",
  },
  {
    label: "Medium-Sized Business",
    value: "Medium-Sized Business",
  },
  {
    label: "Enterprise",
    value: "Enterprise",
  },
];

// FORM DATA
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

export const recommendSelectFormData = [
  {
    name: "serviceKinds",
    label: "What kind of services are you interested in?",
    options: serviceKindsOptions,
  },
  {
    name: "serviceGoal",
    label: "What is your primary goal for this service?",
    options: serviceGoalOptions,
  },
  {
    name: "monthlyBudget",
    label: "What is your estimated monthly budget for this service?",
    options: monthlyBudgetOptions,
  },
  {
    name: "anticipationDuration",
    label: "How long do you anticipate needing these services?",
    options: anticipationDurationOptions,
  },
  {
    name: "businessType",
    label: "What type of business do you operate?",
    options: businessTypeOptions,
  },
];
