import * as Yup from "yup";

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

export const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Work email is required"),
  message: Yup.string().required("Message is required"),
});
