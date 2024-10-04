export interface RecommendFormValues {
  // SELECT FIELDS
  serviceKinds: string[];
  serviceGoal: string[];
  monthlyBudget: string[];
  anticipationDuration: string[];
  businessType: string[];

  // ADDITIONAL INFO
  additionalInfo: string;

  // CONTACT INFO
  contactEmail: string;
  contactPhoneNumber: string;
}
