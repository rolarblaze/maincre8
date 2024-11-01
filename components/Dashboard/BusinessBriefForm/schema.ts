import * as Yup from "yup";

export const validationSchema = Yup.object({
  // BUSINESS INFORMATION (Compulsory)
  companyName: Yup.string().required("Company Name is required"),
  industry: Yup.string().required("Industry is required"),
  companySize: Yup.string().required("Company Size is required"),
  websiteURL: Yup.string()
    .matches(
      /^(https?:\/\/|www\.)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+.*$/,
      "Invalid URL format"
    )
    .required("Website URL is required"),
  contactPersonName: Yup.string().required("Contact Person Name is required"),
  contactEmail: Yup.string()
    .email("Invalid email format")
    .required("Contact Email is required"),
  contactPhoneNumber: Yup.string().required("Contact Phone Number is required"),

  // BUSINESS CHALLENGES (Optional)
  challenges: Yup.string().optional(),
  digitalSolution: Yup.string().optional(),
  solutionOutcomes: Yup.string().optional(),

  // TARGET AUDIENCE (Optional)
  audience: Yup.string().optional(),
  ageGroup: Yup.string().optional(),
  gender: Yup.string()
    .oneOf(["male", "female"])
    .required("Please select a gender"),
  location: Yup.string().optional(),
  interestBehaviours: Yup.string().optional(),
  customerPersonas: Yup.string().optional(),
  personaDescribe: Yup.string().optional(),

  // DESIRED OUTCOMES (Optional)
  desiredOutcomes: Yup.string().optional(),

  // BUDGET (Optional)
  budgetProjection: Yup.string().optional(),
  budget: Yup.string().optional(),

  // PREFERRED SOLUTIONS (Optional)
  usefulDigitalServices: Yup.array().of(Yup.string()).optional(),

  // COMPETITOR ANALYSIS (Optional)
  mainCompetitor: Yup.string().optional(),
  mainCompetitorWebsite: Yup.string()
    .matches(
      /^(https?:\/\/|www\.)[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+.*$/,
      "Invalid URL format"
    )
    .optional(),
  dislikeDigitalPrescence: Yup.string().optional(),

  // ADDITIONAL INFORMATION (Optional)
  additionalInformation: Yup.string().optional(),

  // ATTACH FILE (Optional)
  document: Yup.mixed()
    .nullable()
    .test("fileSize", "Max file size exceeded.", (value) => {
      if (!value) return true; // Skip validation if no file is provided
      return value instanceof File && value.size <= 5000000;
    }),

  // CONSENT (Optional)
  receiveUpdates: Yup.boolean().nullable().optional(),
});
