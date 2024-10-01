import * as Yup from "yup";

export const contactFormData = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name",
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name",
  },
  {
    name: "phone_number",
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
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  message: string;
}

export type FieldName = keyof ContactFormValues;

export const contactValidationSchema = Yup.object({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  phone_number: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Work email is required"),
  message: Yup.string().required("Message is required"),
});
