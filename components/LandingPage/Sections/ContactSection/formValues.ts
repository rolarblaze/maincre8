export const contactFormData = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name",
  },
  {
    name: "phoneNumber",
    type: "text",
    label: "Phone Number",
    placeholder: "Enter phone number",
  },
  {
    name: "email",
    type: "email",
    label: "Work Email",
    placeholder: "Enter work email",
  },
  {
    name: "message",
    type: "textArea",
    label: "Message",
    placeholder: "Type in your message",
  },
];

export interface ContactFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export type FieldName = keyof ContactFormValues;
