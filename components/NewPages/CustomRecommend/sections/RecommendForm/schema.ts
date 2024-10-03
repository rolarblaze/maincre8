import * as Yup from "yup";

export const validationSchema = Yup.object({
  // BUSINESS INFORMATION (Compulsory)
  contactEmail: Yup.string()
    .email("Invalid email format")
    .required("Contact Email is required"),
  contactPhoneNumber: Yup.string().required("Contact Phone Number is required"),

  // PREFERRED SOLUTIONS (Optional)
  usefulDigitalServices: Yup.array().of(Yup.string()).optional(),

  // ATTACH FILE (Optional)
  document: Yup.mixed()
    .nullable()
    .test("fileSize", "Max file size exceeded.", (value) => {
      if (!value) return true; // Skip validation if no file is provided
      return value instanceof File && value.size <= 5000000;
    }),
});
