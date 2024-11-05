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
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
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
    label: "Millennials",
    sublabel: "24-40",
    value: "Millennials",
  },
  {
    label: "Gen Z",
    sublabel: "18-24",
    value: "Gen Z",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
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
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
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
    label: "Twitter",
    value: "Twitter,",
    sublabel: "X",
  },
  {
    label: "Other",
    sublabel: "please specify",
    value: "Other",
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
    label: "Other",
    value: "Other",
    sublabel: "Please specify",
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
    sublabel: "Select one.",
    options: digitalMarketObjOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "digitalTargetAudience",
    type: "select",
    label: "Who is your target audience?",
    sublabel: "Select all that apply",
    options: digitalTargetAudienceOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
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
    sublabel: "Select one",
    options: digitalVoiceToneOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "digitalPlatform",
    type: "select",
    label: "Which digital platforms do you want to focus on?",
    sublabel: "Select one",
    options: digitalPlatformOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "digitalConsumer",
    type: "select",
    label: "What is the desired consumer action?",
    sublabel: "Select one",
    options: digitalConsumerOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "digitalCampaignDur",
    type: "select",
    label: "What is the duration of this campaign?",
    sublabel: "Select one",
    options: digitalCampaignDurOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
];
