import * as Yup from "yup";

export interface BrandDesignValues {
  brandCoreValue: string;
  brandMarket: string[];
  brandPersonality: string;
  brandAsset: string;
  brandUSP: string;
  brandDeliverable: string[];
  brandKPI: string[];
  brandCompetitors: string;
  brandCompetitorsDocument: string;
  brandGuidelines: string;
  document: string;
}

export const brandDesignInitialValues = {
  brandCoreValue: "",
  brandMarket: [],
  brandPersonality: "",
  brandAsset: "",
  brandUSP: "",
  brandDeliverable: [],
  brandKPI: [],
  brandCompetitors: "",
  brandCompetitorsDocument: "",
  brandGuidelines: "",
  document: "",
};

export const brandDesignFormSchema = Yup.object().shape({
  // SELECT FIELDS
  brandCoreValue: Yup.string().required("At Please input a core value"),
  brandMarket: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one brand market option is required")
    .required("Please select a brand market"),
  brandPersonality: Yup.string().required("Please select a brand personality"),
  brandAsset: Yup.string().required("Please select a brand asset"),
  brandUSP: Yup.string().required(
    "Please type in a brand unique selling point",
  ),
  brandDeliverable: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one brand deliverable option is required")
    .required("Please select a brand deliverable option"),
  brandKPI: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one brand KPI option is required")
    .required("Please select a brand KPI option"),
  brandCompetitors: Yup.string().required("Please type in a competitor option"),
  brandCompetitorsDocument: Yup.mixed().nullable().optional(),
  brandGuidelines: Yup.string().required(
    "Please type a brand guideline option",
  ),

  // ATTACH A FILE
  document: Yup.mixed().nullable().optional(),
});
