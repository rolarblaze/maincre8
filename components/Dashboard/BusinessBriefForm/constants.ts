export const INITIAL_VALUES: FormValues = {
  // BUSINESS INFORMATION
  industry: "",
  companyName: "",
  companySize: "",
  websiteURL: "",
  contactPersonName: "",
  contactEmail: "",
  contactPhoneNumber: "",

  // BUSINESS CHALLENGES
  challenges: "",
  digitalSolution: "",
  solutionOutcomes: "",

  // TARGET AUDIENCE
  audience: "",
  ageGroup: "",
  gender: null,
  location: "",
  interestBehaviours: "",
  customerPersonas: "",
  personaDescribe: "",
  relevant_document_link: "",

  // DESIRED OUTCOMES
  desiredOutcomes: "",

  // BUDGET
  budgetProjection: "",
  budget: "",

  // PREFERRED SOLUTIONS
  usefulDigitalServices: [],

  // COMPETITOR ANALYSIS
  mainCompetitor: "",
  mainCompetitorWebsite: "",
  dislikeDigitalPrescence: "",

  // ADDITIONAL INFORMATION
  additionalInformation: "",
  document: null as File | null,

  // CONSENT
  receiveUpdates: null,
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

// NUMBER OF EMPLOYEES
export const companySizeOptions = [
  {
    label: "1-10 employees",
    value: "1-10",
  },
  {
    label: "11-50 employees",
    value: "11-50",
  },
  {
    label: "51-200 employees",
    value: "51-200",
  },
  {
    label: "201-500 employees",
    value: "201-500",
  },
  {
    label: "501-1000 employees",
    value: "501-1000",
  },
  {
    label: "1001-5000 employees",
    value: "1001-5000",
  },
];

// DIGITAL SOLUTION OPTION
export const digitalSolutionOptions = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

// GENDER OPTION
export const genderOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Other",
    value: "other",
  },
];

// CUSTOMER PERSONA OPTION
export const customerPersonaOptions = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

// BUDGET PROJECTION OPTIONS
export const budgetProjectionOptions = [
  {
    label: "10,000 to 50,000",
    value: "100000 to 500000",
  },
  {
    label: "50,000 to 200,000",
    value: "50000 to 200000",
  },
  {
    label: "200,000 to 500,000",
    value: "200000 to 500000",
  },
  {
    label: "500,000 to 1,000,000",
    value: "500000 to 1000000",
  },
];

// UPDATE CUSTOMER OPTION
export const updateOptions = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
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
