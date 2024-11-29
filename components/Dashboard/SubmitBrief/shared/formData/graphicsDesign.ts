export const graphicsTypeOptions = [
  {
    label: "Social media posts",
    value: "Social media posts",
  },
  {
    label: "Infographics",
    value: "Infographics",
  },
  {
    label: "Print materials",
    sublabel: "flyers, posters, etc",
    value: "Print materials",
  },
  {
    label: "Digital ads",
    value: "Digital ads",
  },
  {
    label: "Other",
    sublabel: "Please specify",
    value: "Other",
  },
];

export const graphicsTargetAudOptions = [
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

export const graphicsToneOptions = [
  {
    label: "Minimalist",
    value: "Minimalist",
  },
  {
    label: "Bold and vibrant",
    value: "Bold and vibrant",
  },
  {
    label: "Professional and clean",
    value: "Professional and clean",
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

export const graphicsDeliverableOptions = [
  {
    label: "Final design files",
    sublabel: "JPG, PNG, PDF",
    value: "Final design files",
  },
  {
    label: "Source files",
    sublabel: "AI, PSD",
    value: "Source files",
  },
  {
    label: "Mockups or proofs",
    value: "Mockups or proofs",
  },
  {
    label: "Print-ready files",
    value: "Print-ready files",
  },
];

export const graphicsTimelineOptions = [
  {
    label: "1-2 weeks",
    value: "1-2 weeks",
  },
  {
    label: "2-4 weeks",
    value: "2-4 weeks",
  },
  {
    label: "4-6 weeks",
    value: "4-6 weeks",
  },
];

// FORM DATA
export const graphicsDesignFormData = [
  {
    name: "graphicsType",
    type: "select",
    label: "What type of graphic design do you need?",
    sublabel: "Select all that apply",
    options: graphicsTypeOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "graphicsColorPalette",
    type: "textArea",
    label: "What is your brand's color palette and style preference?",
    sublabel: "Free-text field or file upload option",
    placeholder: "Type",
    isImage: true,
  },
  {
    name: "graphicsTargetAud",
    type: "select",
    label: "Who is your target audience for this design",
    sublabel: "Select all that apply",
    options: graphicsTargetAudOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "graphicsPrimaryMessage",
    type: "textArea",
    label: "What is your brand's color palette and style preference?",
    sublabel: "Free-text field or file upload option",
    placeholder: "Type",
    isImage: true,
  },
  {
    name: "graphicsTone",
    type: "select",
    label: "What tone or style should the design have?",
    sublabel: "Select one",
    options: graphicsToneOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
  {
    name: "graphicsDeliverable",
    type: "select",
    label: "What are the key deliverables for this project?",
    sublabel: "Select all that apply",
    options: graphicsDeliverableOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },

  {
    name: "graphicsReferences",
    type: "textArea",
    label:
      "Are there any design inspirations or references you want us to consider?",
    sublabel: "Free-text field or file upload option",
    placeholder: "Type",
    isImage: true,
  },
  {
    name: "graphicsTimeline",
    type: "select",
    label: "What is the timeline for completing the design project?",
    sublabel: "Select one",
    options: graphicsTimelineOptions,
    placeholder: "Select",
    isRadio: true,
    isCheckbox: false,
  },
];
