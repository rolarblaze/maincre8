import * as Yup from "yup";

export const validationSchema = Yup.object({
  // SELECT FIELD (Optional)
  serviceKinds: Yup.array().of(Yup.string()).optional(),
  serviceGoal: Yup.array().of(Yup.string()).optional(),
  monthlyBudget: Yup.array().of(Yup.string()).optional(),
  anticipationDuration: Yup.array().of(Yup.string()).optional(),
  businessType: Yup.array().of(Yup.string()).optional(),

  // ADDITINAL INFO
  additionalInfo: Yup.string().optional(),

  // ATTACH FILE (Optional)
  document: Yup.mixed()
    .nullable()
    .test("fileSize", "Max file size exceeded.", (value) => {
      if (!value) return true; // Skip validation if no file is provided
      return value instanceof File && value.size <= 5000000;
    }),

  // CONTACT INFO
  contactEmail: Yup.string()
    .email("Invalid email format")
    .required("Contact Email is required"),
  contactPhoneNumber: Yup.string().required("Contact Phone Number is required"),
});
