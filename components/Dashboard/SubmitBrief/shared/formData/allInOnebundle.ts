export const allInOneGoalOptions = [
  {
    label: "Increase brand awareness",
    value: "Increase brand awareness",
  },
  {
    label: "Drive more sales",
    value: "Drive more sales",
  },
  {
    label: "Engage with audience",
    value: "Engage with audience",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const allInOneAudienceOptions = [
  {
    label: "Gen Z (18-24)",
    value: "Gen Z (18-24)",
  },
  {
    label: "Millennials (25-34)",
    value: "Millennials (25-34)",
  },
  {
    label: "Older Millennial's (35-44)",
    value: "Older Millennial's (35-44)",
  },
  {
    label: "Gen X (45-54)",
    value: "Gen X (45-54)",
  },
  {
    label: "Boomers (55+)",
    value: "Boomers (55+)",
  },
];

export const allInOneKPIOption = [
  {
    label: "Follower growth",
    value: "Follower growth",
  },
  {
    label: "Engagement rate",
    value: "Engagement rate",
  },
  {
    label: "Website traffic",
    value: "Website traffic",
  },
  {
    label: "Conversion rate",
    value: "Conversion rate",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const allInOnePersonalityOptions = [
  {
    label: "Modern & Bold",
    value: "Modern & Bold",
  },
  {
    label: "Professionals & Corporate",
    value: "Professionals & Corporate",
  },
  {
    label: "Friendly & Casual",
    value: "Friendly & Casual",
  },
  {
    label: "Creative & Unique",
    value: "Creative & Unique",
  },
  {
    label: "Other (Please specify)",
    value: "Other (Please specify)",
  },
];

export const allInOnePlatformOptions = [
  {
    label: "Facebook",
    value: "Facebook",
  },
  {
    label: "Instagram",
    value: "Instagram",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn",
  },
];

export const allInOneContentStyleOptions = [
  {
    label: "Formal",
    value: "Formal",
  },
  {
    label: "Conversational",
    value: "Conversational",
  },
  {
    label: "Humorous",
    value: "Humorous",
  },
];

export const allInOneMainGoalOptions = [
  {
    label: "Nurturing Leads",
    value: "Nurturing Leads",
  },
  {
    label: "Driving Sales",
    value: "Driving Sales",
  },
  {
    label: "Retaining Existing Customers",
    value: "Retaining Existing Customers",
  },
  {
    label: "Other",
    value: "Other",
  },
];

// FORM DATA
export const allInOneFormData = [
  {
    name: "allInOneGoal",
    type: "select",
    label: "What are your goals for this project?",
    subLabel: "Select all that apply",
    options: allInOneGoalOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "allInOneAudience",
    type: "select",
    label: "Who is your target audience for this content?",
    subLabel: "Select all that apply",
    options: allInOneAudienceOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "allInOneKPI",
    type: "select",
    label:
      "What Key Performance Indicators (KPIs) would you like us to focus on?",
    subLabel: "Select all that apply",
    options: allInOneKPIOption,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "allInOnePersonality",
    type: "select",
    label: "Describe your brand's personality and tone",
    options: allInOnePersonalityOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "allInOneBrandColor",
    type: "textArea",
    label: "What is your brand's preferred Brand Color's or Style Guide",
    subLabel: "Free-text field or file upload option",
    placeholder: "Type",
  },
  {
    name: "allInOneBrandAdmire",
    type: "textArea",
    label: "Are there any competitors or brands you admire?",
    subLabel: "List any brands you admire or want to differentiate from",
    placeholder: "Type",
  },
  {
    name: "allInOnePlatform",
    type: "select",
    label: "Which social media platforms would you like us to manage?",
    subLabel: "Select all that apply",
    options: allInOnePlatformOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "allInOneExistingMarket",
    type: "textArea",
    label: "Describe any existing marketing challenges you are experiencing",
    placeholder: "Type",
  },
  {
    name: "allInOneKeywords",
    type: "textArea",
    label:
      "List specific topics or keywords you want the blog posts to focus on",
    placeholder: "Type",
  },
  {
    name: "allInOneCompetitorsWebsite",
    type: "textArea",
    label: "List your main competitors' websites (for SEO research)",
    placeholder: "Type",
  },
  {
    name: "allInOneContentStyle",
    type: "select",
    label: "Are there any preferred content styles or tones?",
    subLabel: "Select all that apply",
    options: allInOneContentStyleOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
  {
    name: "allInOneMainGoal",
    type: "select",
    label: "What are the main goals for email marketing",
    subLabel: "Select all that apply",
    options: allInOneMainGoalOptions,
    placeholder: "Select",
    isRadio: false,
    isCheckbox: true,
  },
];
