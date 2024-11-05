// DIGITAL MARKETING
/*
-options
-labels
-formData
-INITIAL VALUES
-
*/

// OPTIONS
export const digitalMarketObjOptions = [
  {
    label: "Increase brand awareness ",
    value: "Increase brand awareness ",
  },
  {
    label: "Drive traffic to your website",
    value: "Drive traffic to your website",
  },
  {
    label: "Generate leads or sales",
    value: "Generate leads or sales",
  },
  {
    label: "Improve engagement on social media",
    value: "Improve engagement on social media",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const digitalTargetAudienceOptions = [
  {
    label: "General consumers",
    value: "General consumers",
  },
  {
    label: "B2B clients",
    value: "B2B clients",
  },
  {
    label: "Millennials (24-40)",
    value: "Millennials (24-40)",
  },
  {
    label: "Gen Z (18-24)",
    value: "Gen Z (18-24)",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const digitalVoiceToneOptions = [
  {
    label: "Professional",
    value: "Professional",
  },
  {
    label: "Friendly and conversational",
    value: "Friendly and conversational",
  },
  {
    label: "Bold and assertive",
    value: "Bold and assertive",
  },
  {
    label: "Fun and playful",
    value: "Fun and playful",
  },
  {
    label: "Other (Please specify)",
    value: "Professional",
  },
];

export const digitalPlatformOptions = [
  {
    label: "Facebook",
    value: "Facebook,",
  },
  {
    label: "Instagram",
    value: "Instagram,",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn,",
  },
  {
    label: "Google Ads",
    value: "Google Ads,",
  },
  {
    label: "Youtube",
    value: "Youtube,",
  },
  {
    label: "Twitter (X)",
    value: "Twitter (X),",
  },
  {
    label: "Other (please specify)",
    value: "Other (please specify),",
  },
];

export const digitalConsumerOptions = [
  {
    label: "Visit website",
    value: "Visit website",
  },
  {
    label: "Make a purchase",
    value: "Make a purchase",
  },
  {
    label: "Fill out a form or contact us",
    value: "Fill out a form or contact us",
  },
  {
    label: "Follow/Engage on social media",
    value: "Follow/Engage on social media",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const digitalCampaignDurOptions = [
  {
    label: "1-3 months",
    value: "1-3 months",
  },
  {
    label: "3-6 months",
    value: "3-6 months",
  },
  {
    label: "6-12 months",
    value: "6-12 months",
  },
  {
    label: "Ongoing",
    value: "Ongoing",
  },
];

// FORM DATA
export const digitalMarketFormData = [
  {
    name: "digitalMarketObj",
    type: "select",
    label: "What is your primary marketing objective?",
    subLabel: "Select one.",
    options: digitalMarketObjOptions,
    placeholder: "Select",
  },
  {
    name: "digitalTargetAudience",
    type: "select",
    label: "Who is your target audience?",
    subLabel: "Select all that apply",
    options: digitalTargetAudienceOptions,
    placeholder: "Select",
  },
  {
    name: "digitalKeyMessage",
    type: "textArea",
    label: "What is the key message you want to communicate?",
    placeholder: "Type",
  },
  {
    name: "digitalVoiceTone",
    type: "select",
    label: "What tone of voice would you prefer for your campaign?",
    subLabel: "Select one",
    options: digitalVoiceToneOptions,
    placeholder: "Select",
  },
  {
    name: "digitalPlatform",
    type: "select",
    label: "Which digital platforms do you want to focus on?",
    subLabel: "Select one",
    options: digitalPlatformOptions,
    placeholder: "Select",
  },
  {
    name: "digitalConsumer",
    type: "select",
    label: "What is the desired consumer action?",
    subLabel: "Select one",
    options: digitalConsumerOptions,
    placeholder: "Select",
  },
  {
    name: "digitalCampaignDur",
    type: "select",
    label: "What is the duration of this campaign?",
    subLabel: "Select one",
    options: digitalCampaignDurOptions,
    placeholder: "Select",
  },
];
