export const brandMarketOptions = [
  {
    label: "Local consumers",
    value: "Local consumers",
  },
  {
    label: "International market",
    value: "International market",
  },
  {
    label: "Startups",
    value: "Startups",
  },
  {
    label: "Small to medium businesses",
    value: "Small to medium businesses",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const brandPersonalityOptions = [
  {
    label: "Bold and dynamic",
    value: "Bold and dynamic",
  },
  {
    label: "Modern and sleek",
    value: "Modern and sleek",
  },
  {
    label: "Friendly and approachable",
    value: "Friendly and approachable",
  },
  {
    label: "Elegant and sophisticated",
    value: "Elegant and sophisticated",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const brandAssetOptions = [
  {
    label: "Yes (Please upload or provide links)",
    value: "Yes (Please upload or provide links)",
  },
  {
    label: "No, I need everything from scratch)",
    value: "No, I need everything from scratch)",
  },
];

export const brandDeliverableOptions = [
  {
    label: "Logo",
    value: "Logo",
  },
  {
    label: "Businesss card design",
    value: "Businesss card design",
  },
  {
    label: "Website design",
    value: "Website design",
  },
  {
    label: "Package design",
    value: "Package design",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const brandKPIOptions = [
  {
    label: "Increase brand awareness",
    value: "Increase brand awareness",
  },
  {
    label: "Visual consistency across channels",
    value: "Visual consistency across channels",
  },
  {
    label: "Audience engagement",
    value: "Audience engagement",
  },
  {
    label: "Sales growth",
    value: "Sales growth",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

// FORM DATA

export const brandDesignFormData = [
  {
    name: "brandCoreValue",
    type: "textArea",
    label: "What is the core value or mission of your brand?",
    placeholder: "Type",
  },
  {
    name: "brandMarket",
    type: "select",
    label: "Who is your target market?",
    subLabel: "Select all that apply",
    options: brandMarketOptions,
    placeholder: "Select",
  },
  {
    name: "brandPersonality",
    type: "select",
    label: "What tone or personality should your brand have?",
    subLabel: "Select one",
    options: brandPersonalityOptions,
    placeholder: "Select",
  },
  {
    name: "brandAsset",
    type: "select",
    label: "Do you already have any brand assets",
    subLabel: "logo, color pallete, typography?Select one",
    options: brandAssetOptions,
    placeholder: "Select",
  },
  {
    name: "brandDeliverable",
    type: "select",
    label: "What are the key deliverables for this brand design?",
    subLabel: "Select all that apply",
    options: brandDeliverableOptions,
    placeholder: "Select",
  },
  {
    name: "brandKPI",
    type: "select",
    label:
      "What are your key performance indicators (KPIs) for the brand design?",
    subLabel: "Select all that apply",
    options: brandKPIOptions,
    placeholder: "Select",
  },
  {
    name: "brandCompetitors",
    type: "textArea",
    label: "Are there any competitors or brands you admire?",
    subLabel: "Free-text field or file upload option",
    placeholder: "Type",
  },
  {
    name: "brandGuidelines",
    type: "textArea",
    label:
      "Do you have any specific guidelines or restrictions we should be aware of?",
    placeholder: "Type",
  },
];
