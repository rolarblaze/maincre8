import * as Yup from "yup";

// Define the validation schema for your form
export const recommendFormSchema = Yup.object().shape({
  // SELECT FIELDS
  serviceKinds: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one service kind is required")
    .required("Please select a service kind"),
  serviceGoal: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one service goal is required")
    .required("Please select a service goal"),
  monthlyBudget: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one monthly budget option is required")
    .required("Please select a monthly budget"),
  anticipationDuration: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one anticipation duration is required")
    .required("Please select an anticipation duration"),
  businessType: Yup.array()
    .of(Yup.string().required())
    .min(1, "At least one business type is required")
    .required("Please select a business type"),

  // ADDITIONAL INFO
  additionalInfo: Yup.string().optional(),

  // ATTACH A FILE
  document: Yup.mixed().nullable().required("Please upload a brief"),

  // CONTACT INFO
  contactEmail: Yup.string()
    .email("Invalid email format")
    .required("Contact email is required"),
  contactPhoneNumber: Yup.string().required("Contact phone number is required"),
});
