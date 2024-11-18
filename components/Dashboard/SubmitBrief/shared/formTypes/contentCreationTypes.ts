import * as Yup from "yup";

export interface ContentCreationValues {
  contentType: string[];
  contentGoal: string;
  contentAudience: string[];
  contentTone: string;
  contentKeywords: string;
  contentLength: string;
  contentSpecificGuidelines: string;
  contentCTA: string;
  contentKPI: string[];
  contentTimeline: string;
  document: string
}
export const contentCreationInitialValues = {
  contentType: [],
  contentGoal: "",
  contentAudience: [],
  contentTone: "",
  contentKeywords: "",
  contentLength: "",
  contentSpecificGuidelines: "",
  contentCTA: "",
  contentKPI: [],
  contentTimeline: "",
  document: ""
};

export const contentCreationFormSchema = Yup.object().shape({
  // SELECT FIELDS
  contentType: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one content type option is required")
    .required("Please select a content type"),
  contentGoal: Yup.string().required("Please select a content goal"),
  contentAudience: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one content audience opion is required")
    .required("Please select a content audience"),
  contentTone: Yup.string().required("Please select a content tone option"),
  contentKeywords: Yup.string().required(
    "Please select a content keyword option",
  ),
  contentLength: Yup.string().required("Please select a content length option"),
  contentSpecificGuidelines: Yup.string().required(
    "Please select a content guideline option",
  ),
  contentCTA: Yup.string().required("Please select a content CTA option"),
  contentKPI: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one content KPI option is required")
    .required("Please select a content KPI option"),
  contentTimeline: Yup.string().required(
    "Please select a content timeline option",
  ),

  // ATTACH A FILE
  document: Yup.mixed().nullable().optional(),
});
