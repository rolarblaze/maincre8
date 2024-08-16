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

  // DESIRED OUTCOMES
  desiredOutcomes: "",

  // BUDGET
  budgetProjection: "",

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

export const USEFUL_DIGITAL_SERVICES = [
  { key: "digitalMarketing", value: "Digital Marketing (SEO, PPC, Social Media Marketing)" },
  { key: "contentCreation", value: "Content Creation (Blogs, Videos, Graphics)" },
  { key: "webDevandDesign", value: "Website Development and Design" },
  { key: "eCommerce", value: "E-commerce Solutions" },
  { key: "dataAnalyticsandReporting", value: "Data Analytics and Reporting" },
  { key: "emailMarketing", value: "Email Marketing" },
  { key: "others", value: "Others (please specify)" },
];
