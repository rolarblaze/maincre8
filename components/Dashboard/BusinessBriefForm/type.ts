interface FormValues {
  // BUSINESS INFORMATION
  industry: string;
  companyName: string;
  companySize: string;
  websiteURL: string;
  contactPersonName: string;
  contactEmail: string;
  contactPhoneNumber: string;

  // BUSINESS CHALLENGES
  challenges: string;
  digitalSolution: string;
  solutionOutcomes: string;

  // TARGET AUDIENCE
  audience: string;
  ageGroup: string;
  gender: "male" | "female" | "others" | null;
  location: string;
  interestBehaviours: string;
  customerPersonas: string;
  personaDescribe: string;

  // DESIRED OUTCOMES
  desiredOutcomes: string;

  // BUDGET
  budgetProjection: string;

  // PREFERRED SOLUTIONS
  usefulDigitalServices: string[];

  // COMPETITOR ANALYSIS
  mainCompetitor: string;
  mainCompetitorWebsite: string;
  dislikeDigitalPrescence: string;

  // ADDITIONAL INFORMATION
  additionalInformation: string;

  // CONSENT
  receiveUpdates: "Yes" | "No" | null;
}
