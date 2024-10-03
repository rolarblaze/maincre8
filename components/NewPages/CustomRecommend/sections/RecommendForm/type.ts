export interface RecommendFormValues {
  // BUSINESS INFORMATION
  contactEmail: string;
  contactPhoneNumber: string;
  industry: string[];

  // PREFERRED SOLUTIONS
  usefulDigitalServices: string[];

  // ATTACH A FILE
  document: File | null;
}
