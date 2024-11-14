const labels = {
  all: "All",
  onbboarding: "Onboarding",
  bundles: "Bundles",
  content: "Content",
  marketing: "Marketing",
  payment: "Payments",
  support: "Support",
  projectManagement: "Project Management",
};
// data/faqData.ts
export const newFAQData = [
  {
    question: "What is SellCrea8 and how does it work?",
    answer:
      "SellCrea8 is a platform designed to streamline the booking process for creative and digital services. It offers a wide range of features including service booking, payment processing, flexible packages, and personalized recommendations.",
    labels: [labels.all,labels.onbboarding],
  },
  {
    question: "Can I customize my SellCrea8 package?​",
    answer:
      "Yes, all packages can be tailored to fit your specific needs. Simply select add-ons or modify services based on your business goals",
    labels: [labels.all, labels.onbboarding, labels.bundles],
  },
  {
    question: "How long does it take to receive the final deliverables?​",
    answer:
      "Delivery times vary, but most projects are completed within 7–14 days. We will provide an estimated timeline when you place an order and book an onboarding call with us",
    labels: [labels.all, labels.projectManagement],
  },
  {
    question: "Do I need a long-term contract to subscribe to SellCrea8?",
    answer:
      "No, SellCrea8 operates on a flexible, no-contract basis. You can renew your package & add ons monthly and cancel anytime",
    labels: [labels.all, labels.bundles, labels.payment],
  },
  {
    question: "What makes SellCrea8 better than hiring an in-house team?​",
    answer:
      "SellCrea8 offers expert services without the high costs of hiring full-time staff. You also get flexibility and access to a wide range of specialized skills and packages",
    labels: [labels.all, labels.projectManagement],
  },
  {
    question: "What is the process for submitting a project brief?",
    answer:
      " You can easily submit your project brief through our platform. After selecting a package, you will be guided through the process to provide necessary information",
    labels: [
      labels.all,
      labels.bundles,
      labels.support,
      labels.projectManagement,
    ],
  },
  {
    question: "Can SellCrea8 handle urgent or last-minute requests",
    answer:
      "Yes, we offer expedited services for urgent projects. Just let us know your timeline, and we will do our best to accommodate",
    labels: [labels.all, labels.bundles, labels.projectManagement],
  },
  {
    question: "How do I get started with SellCrea8?​",
    answer:
      "Getting started is easy! Choose your package, submit/fill your project brief, and our team will begin working on your deliverables right away. ",
    labels: [labels.onbboarding,labels.onbboarding],
  },
];
