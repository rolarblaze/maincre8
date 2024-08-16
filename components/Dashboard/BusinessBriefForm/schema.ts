import * as Yup from 'yup';

export const validationSchema = Yup.object({
  // BUSINESS INFORMATION
  industry: Yup.string().required('Industry is required'),
  companyName: Yup.string().required('Company Name is required'),
  companySize: Yup.string().required('Company Size is required'),
  websiteURL: Yup.string().url('Invalid URL format').required('Website URL is required'),
  contactPersonName: Yup.string().required('Contact Person Name is required'),
  contactEmail: Yup.string().email('Invalid email format').required('Contact Email is required'),
  contactPhoneNumber: Yup.string()
    .matches(/^[0-9]{10,11}$/, 'Phone number must be 10 or 11 digits')
    .required('Contact Phone Number is required'),

  // BUSINESS CHALLENGES
  challenges: Yup.string().required('Challenges are required'),
  digitalSolution: Yup.string().required('Digital Solution is required'),
  solutionOutcomes: Yup.string().required('Solution Outcomes are required'),

  // TARGET AUDIENCE
  audience: Yup.string().required('Audience is required'),
  ageGroup: Yup.string().required('Age Group is required'),
  gender: Yup.string().oneOf(['male', 'female', 'other'], 'Invalid Gender').required('Gender is required'),
  location: Yup.string().required('Location is required'),
  interestBehaviours: Yup.string().required('Interest Behaviours are required'),
  customerPersonas: Yup.string().required('Customer Personas are required'),
  personaDescribe: Yup.string().required('Persona Description is required'),

  // DESIRED OUTCOMES
  desiredOutcomes: Yup.string().required('Desired Outcomes are required'),

  // BUDGET
  budgetProjection: Yup.string().required('Budget Projection is required'),

  // PREFERRED SOLUTIONS
  usefulDigitalServices: Yup.array().of(Yup.string()).required('Useful Digital Services are required'),
  webDevelopment: Yup.boolean(),
  eCommerce: Yup.boolean(),

  // COMPETITOR ANALYSIS
  mainCompetitor: Yup.string().required('Main Competitor is required'),
  mainCompetitorWebsite: Yup.string().url('Invalid URL format').required('Main Competitor Website is required'),
  dislikeDigitalPrescence: Yup.string().required('Dislike Digital Presence is required'),

  // ADDITIONAL INFORMATION
  additionalInformation: Yup.string().optional(),

  // CONSENT
  receiveUpdates: Yup.boolean().nullable().required('Consent is required'),
});
