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
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
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
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const brandAssetOptions = [
  {
    label: "Yes",
    sublabel: "Please upload or provide links",
    value: "Yes",
  },
  {
    label: "No, I need everything from scratch",
    value: "No, I need everything from scratch",
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
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
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
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
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
    sublabel: "Select all that apply",
    options: brandMarketOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "brandPersonality",
    type: "select",
    label: "What tone or personality should your brand have?",
    sublabel: "Select one",
    options: brandPersonalityOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "brandAsset",
    type: "select",
    label: "Do you already have any brand assets",
    sublabel: "logo, color pallete, typography?Select one",
    options: brandAssetOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "brandUSP",
    type: "textArea",
    label: "What is your unique selling proposition",
    sublabel: "USP?",
    placeholder: "Type",
  },
  {
    name: "brandDeliverable",
    type: "select",
    label: "What are the key deliverables for this brand design?",
    sublabel: "Select all that apply",
    options: brandDeliverableOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "brandKPI",
    type: "select",
    label:
      "What are your key performance indicators (KPIs) for the brand design?",
    sublabel: "Select all that apply",
    options: brandKPIOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "brandCompetitors",
    type: "textArea",
    label: "Are there any competitors or brands you admire?",
    sublabel: "Free-text field or file upload option",
    placeholder: "Type",
    isImage: true,
  },
  {
    name: "brandGuidelines",
    type: "textArea",
    label:
      "Do you have any specific guidelines or restrictions we should be aware of?",
    placeholder: "Type",
  },
];
