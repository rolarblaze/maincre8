import * as Yup from "yup";

export interface AllInOneValues {
  allInOneGoal: string[];
  allInOneAudience: string[];
  allInOneKPI: string[];
  allInOnePersonality: string[];
  allInOneBrandColor: string;
  allInOneBrandAdmire: string;
  allInOnePlatform: string[];
  allInOneExistingMarket: string;
  allInOneKeywords: string;
  allInOneCompetitorsWebsite: string;
  allInOneContentStyle: string[];
  allInOneMainGoal: string[];
}

export const allInOneInitialValues: AllInOneValues = {
  allInOneGoal: [],
  allInOneAudience: [],
  allInOneKPI: [],
  allInOnePersonality: [],
  allInOneBrandColor: "",
  allInOneBrandAdmire: "",
  allInOnePlatform: [],
  allInOneExistingMarket: "",
  allInOneKeywords: "",
  allInOneCompetitorsWebsite: "",
  allInOneContentStyle: [],
  allInOneMainGoal: [],
};

export const graphicsDesignFormSchema = Yup.object().shape({
  // SELECT FIELDS
  allInOneGoal: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one goal is required")
    .required("Please select a goal"),
  allInOneAudience: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one target audience option is required")
    .required("Please select a target audience"),

  allInOneKPI: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one KPI option is required")
    .required("Please select a KPI option"),

  allInOnePersonality: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one personality option is required")
    .required("Please select a personality option"),
  allInOneBrandColor: Yup.string().required("Please input a brand color."),
  allInOneBrandAdmire: Yup.string().required(
    "Please input a brand admiration.",
  ),
  allInOnePlatform: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one platform option is required")
    .required("Please select a platform option"),
  allInOneExistingMarket: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one existing market option is required")
    .required("Please select an existing market option"),
  allInOneKeywords: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one keyword option is required")
    .required("Please select a keyword option"),
  allInOneCompetitorsWebsite: Yup.string().required("Please input a website"),
  allInOneContentStyle: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one content style is required")
    .required("Please select a content style option"),
  allInOneMainGoal: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one main goal is required")
    .required("Please select a main goal option"),

  // ATTACH A FILE
  document: Yup.mixed().nullable().optional(),
});
