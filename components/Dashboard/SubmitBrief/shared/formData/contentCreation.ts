export const contentTypeOptions = [
  {
    label: "Blog posts",
    value: "Blog posts",
  },
  {
    label: "Social Media captions",
    value: "Social Media captions",
  },
  {
    label: "Website copy",
    value: "Website copy",
  },
  {
    label: "Product descriptions",
    value: "Product descriptions",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const contentGoalOptions = [
  {
    label: "Increase brand awareness",
    value: "Increase brand awareness",
  },
  {
    label: "Drive traffic to website",
    value: "Drive traffic to website",
  },
  {
    label: "Inform/educate the audience",
    value: "Inform/educate the audience",
  },
  {
    label: "Promote a product or service",
    value: "Promote a product or service",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const contentAudienceOptions = [
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
    sublabel: "25-40",
    value: "Millennials",
  },
  {
    label: "Gen Z",
    sublabel: "18 -24",
    value: "Gen Z",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const contentToneOptions = [
  {
    label: "Professional and informative",
    value: "Professional and informative",
  },
  {
    label: "Conversational and friendly",
    value: "Conversational and friendly",
  },
  {
    label: "Fun and engaging",
    value: "Fun and engaging",
  },
  {
    label: "Bold and assertive",
    value: "Bold and assertive",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const contentLengthOptions = [
  {
    label: "Short-form",
    sublabel: "300-500 words",
    value: "Short-form",
  },
  {
    label: "Medium-form",
    sublabel: "500-1,000 words",
    value: "Medium-form",
  },
  {
    label: "Long-form",
    sublabel: "1,000 + words",
    value: "Long-form",
  },
];

export const contentCTAOptions = [
  {
    label: "Visit website",
    value: "Visit website",
  },
  {
    label: "Make a purchase",
    value: "Make a purchase",
  },
  {
    label: "Subscribe to a service",
    value: "Subscribe to a service",
  },
  {
    label: "Share on social media",
    value: "Share on social media",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const contentKPIOptions = [
  {
    label: "Increased website traffic",
    value: "Increased website traffic",
  },
  {
    label: "Improved SEO rankings",
    value: "Improved SEO rankings",
  },
  {
    label: "Higher engagement",
    value: "Higher engagement",
  },
  {
    label: "Lead generation",
    value: "Lead generation",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const contentTimelineOptions = [
  {
    label: "1-2 weeks",
    value: "1-2 weeks",
  },
  {
    label: "2-4 weeks",
    value: "2-4 weeks",
  },
  {
    label: "Flexible",
    value: "Flexible",
  },
];

// FORM DATA
export const contentCreationFormData = [
  {
    name: "contentType",
    type: "select",
    label: "What type of content do you need?",
    sublabel: "Select all that apply",
    options: contentTypeOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "contentGoal",
    type: "select",
    label: "What is the primary goal of this content?",
    sublabel: "Select one",
    options: contentGoalOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "contentAudience",
    type: "select",
    label: "Who is your target audience for this content?",
    sublabel: "Select all that apply",
    options: contentAudienceOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "contentTone",
    type: "select",
    label: "What tone or style should the content have?",
    sublabel: "Select one",
    options: contentToneOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "contentKeywords",
    type: "textArea",
    label: "Do you have specific keywords or topics to focus on?",
    placeholder: "Type",
  },
  {
    name: "contentLength",
    type: "select",
    label: "What is the desired length of the content?",
    sublabel: "Select one",
    options: contentLengthOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "contentSpecificGuidelines",
    type: "textArea",
    label:
      "Are there any specific guidelines, research, or references we should follow?",
    placeholder: "Type",
  },
  {
    name: "contentCTA",
    type: "select",
    label: "What is the desired call to action (CTA) for this content?",
    sublabel: "Select one",
    options: contentCTAOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "contentKPI",
    type: "select",
    label: "What are your key performance indicators (KPIs) for this content?",
    sublabel: "Select all that apply",
    options: contentKPIOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "contentTimeline",
    type: "select",
    label: "What is your timeline for delivery?",
    sublabel: "Select one",
    options: contentTimelineOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
];
