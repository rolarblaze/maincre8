"use client";
import { Field, FormikHelpers, useFormik } from "formik";
import {
  Button,
  CheckBoxField,
  DropdownSelect,
  InputField,
  PhoneNumberInput,
  UploadFile,
} from "@/components";
import {
  INITIAL_VALUES,
  RECOMMEND_INITIAL_VALUES,
  typeOfIndustryOptions,
  USEFUL_DIGITAL_SERVICES,
} from "./constants";
import { validationSchema } from "./schema";
import { addAlert } from "@/redux/alerts";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import {
  uploadRelevantDocument,
  submitRecommendationBrief,
} from "@/redux/order/features";
import { RecommendFormValues } from "./type";

const RecommendForm = () => {
  const dispatch = useAppDispatch();
  const [phone, setPhone] = useState<string>();
  const [uploadedDocumentLink, setUploadedDocumentLink] = useState<
    string | null
  >(null);

  const formik = useFormik<RecommendFormValues>({
    initialValues: RECOMMEND_INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<RecommendFormValues>,
    ) => {
      try {
        const finalValues = {
          contact_email: values.contactEmail,
          contact_phone_number: phone || "",
          previously_implemented_digital_solutions: values.digitalSolution,
          solution_and_outcome_description: values.solutionOutcomes,

          competitor_like_and_dislike: values.dislikeDigitalPrescence,
          relevant_document_link:
            uploadedDocumentLink || values.relevant_document_link,
        };

        await dispatch(submitRecommendationBrief(finalValues));

        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Brief submitted successfully",
            type: "success",
          }),
        );
        resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText: "Error submitting brief, please try again later",
            type: "error",
          }),
        );
      }
    },
  });

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  const handleFileUpload = async (file: File | null) => {
    if (file && file.size > 5000000) {
      setFieldValue("document", null);
      formik.setFieldError("document", "Max file size exceeded.");
      return;
    }

    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await dispatch(
          uploadRelevantDocument(formData),
        ).unwrap();
        const file_link = response.file_link;

        setUploadedDocumentLink(file_link); // Store the file link for later use
        setFieldValue("document", file.name); // Store the file name as a string
        formik.setFieldError("document", ""); // Clear any existing file errors
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      formik.setFieldError("document", "File upload failed.");
    }
  };

  return (
    <section className="full-width flex justify-center bg-grey50 px-5 pb-[6.3rem] pt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[43rem] space-y-8 rounded-[10px] bg-white px-[3.4rem] py-8"
      >
        <h3 className="text-center">Get a Personalised Recommendation</h3>
        {/* BUSINESS INFORMATION */}
        <div className="space-y-6">
          <div className="space-y-6 rounded-bl-lg">
            {/* TYPE OF INDUSTRY */}
            <DropdownSelect
              id="industry"
              name="industry"
              label="Type of Industry"
              placeholder="Select type"
              options={typeOfIndustryOptions}
              value={values.industry || ""}
              onChange={handleChange}
              error={touched.industry && errors.industry}
            />

            {/* CONTACT EMAIL */}
            <InputField
              type="email"
              name="contactEmail"
              label="Contact Email"
              placeholder="Enter Contact Email"
              classNames="bg-white"
              value={values.contactEmail}
              error={touched.contactEmail && errors.contactEmail}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {/* CONTACT PHONE NUMBER */}
            <div>
              <PhoneNumberInput
                value={phone as string}
                form={formik}
                name="contactPhoneNumber"
                // onChange={handlePhoneChange}
                label="Contact Phone number"
                formError={
                  touched.contactPhoneNumber && errors.contactPhoneNumber
                }
              />
            </div>
          </div>
        </div>

        {/* PREFERRED SOLUTIONS */}
        <div className="space-y-6">
          <legend className="text-lg font-semibold leading-6 text-grey900">
            Preferred Solutions
          </legend>

          <div className="space-y-6">
            <label htmlFor="usefulDigitalSolutions" className="font-medium">
              Which of the following digital services do you think might be
              useful? (Select all that apply)
            </label>

            {USEFUL_DIGITAL_SERVICES.map((item) => (
              <CheckBoxField
                key={item.key}
                name="usefulDigitalServices"
                label={item.value}
                value={item.value}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        <Button
          type="submit"
          label="Submit a brief"
          isLoading={isSubmitting}
          classNames="w-fit text-sm px-4 py-2 active:scale-[0.98] rounded-bl-2xl"
        />
      </form>
    </section>
  );
};

export default RecommendForm;
