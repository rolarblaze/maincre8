import * as Yup from "yup";
export interface DigitalMarketingValues {
  digitalMarketObj: string;
  digitalTargetAudience: string[];
  digitalKeyMessage: string;
  digitalVoiceTone: string;
  digitalPlatform: string[];
  digitalConsumer: string;
  digitalCampaignDur: string;
  document: string;
}

export const digitalMarketingInitialValues = {
  digitalMarketObj: "",
  digitalTargetAudience: [],
  digitalKeyMessage: "",
  digitalVoiceTone: "",
  digitalPlatform: [],
  digitalConsumer: "",
  digitalCampaignDur: "",
  document: "",
};

// Define the validation schema for your form
export const digitalMarketingFormSchema = Yup.object().shape({
  // SELECT FIELDS
  digitalMarketObj: Yup.string().required(
    "Please select a marketing Objective",
  ),
  digitalTargetAudience: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one target audience option is required")
    .required("Please select a target audience"),
  digitalKeyMessage: Yup.string().optional(),
  digitalVoiceTone: Yup.string().required("Please select a voice tone"),
  digitalPlatform: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one digital platform option is required")
    .required("Please select a digital platform option"),
  digitalConsumer: Yup.string().required("Please select a consumer type"),
  digitalCampaignDur: Yup.string()
    .required()
    .required("Please select a campaign duration option"),

  // ATTACH A FILE
  document: Yup.mixed().nullable().optional(),
});
