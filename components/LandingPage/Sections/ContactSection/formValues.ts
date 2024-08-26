export interface ContactFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
  contactFile: null;
}

export type FieldName = keyof ContactFormValues;

