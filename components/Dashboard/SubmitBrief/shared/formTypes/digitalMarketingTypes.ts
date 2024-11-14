import * as Yup from "yup";
export interface DigitalMarketingValues {
  digitalMarketObj: string[];
  digitalTargetAudience: string[];
  digitalKeyMessage: string;
  digitalVoiceTone: string[];
  digitalPlatform: string[];
  digitalConsumer: string[];
  digitalCampaignDur: string[];
}

export const digitalMarketingInitialValues = {
  digitalMarketObj: [],
  digitalTargetAudience: [],
  digitalKeyMessage: "",
  digitalVoiceTone: [],
  digitalPlatform: [],
  digitalConsumer: [],
  digitalCampaignDur: [],
};

// Define the validation schema for your form
export const digitalMarketingFormSchema = Yup.object().shape({
  // SELECT FIELDS
  digitalMarketObj: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one Digital Marketing Objective is required")
    .required("Please select a marketing Objective"),
  digitalTargetAudience: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one target audience option is required")
    .required("Please select a target audience"),
  digitalKeyMessage: Yup.string().optional(),
  digitalVoiceTone: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one voice tone opion is required")
    .required("Please select a voice tone"),
  digitalPlatform: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one digital platform option is required")
    .required("Please select a digital platform option"),
  digitalConsumer: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one consumer type is required")
    .required("Please select a consumer type"),
  digitalCampaignDur: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one campaign duration option is required")
    .required("Please select a campaign duration option"),

  // ATTACH A FILE
  document: Yup.mixed().nullable().optional(),
});
