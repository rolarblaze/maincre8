export interface RecommendFormValues {
  // SELECT FIELDS
  serviceKinds: string[];
  serviceGoal: string[];
  monthlyBudget: string[];
  anticipationDuration: string[];
  businessType: string[];

  // ADDITIONAL INFO
  additionalInfo: string;

  // ATTACH A FILE
  document: string | null;

  // CONTACT INFO
  contactEmail: string;
  contactPhoneNumber: string;
}

export type RecommendFormType =
  | "number"
  | "email"
  | "text"
  | "password"
  | "url";
