"use client";
import { Field, FormikHelpers, useFormik } from "formik";
import { Button, InputField, Textarea } from "@/components";
import {
  RECOMMEND_INITIAL_VALUES,
  recommendContactFormData,
  recommendSelectFormData,
  serviceKindsOptions,
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
import CustomDropdown from "@/components/Forms/CustomSelect";

const RecommendForm = () => {
  const dispatch = useAppDispatch();
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
          contact_phone_number: values.contactPhoneNumber,

          //   relevant_document_link:
          //     uploadedDocumentLink || values.relevant_document_link,
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
  type RecommendFormType = "number" | "email" | "text" | "password" | "url";
  return (
    <section className="full-width flex justify-center bg-grey50 px-5 pb-[6.3rem] pt-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[43rem] space-y-10 rounded-[10px] bg-white px-[3.4rem] py-8"
      >
        <h3 className="text-center">Get a Personalised Recommendation</h3>
        <main className="space-y-8">
          {/* SELECT OPTIONS */}
          <div className="space-y-8">
            {recommendSelectFormData.map((data, dataIdx) => {
              return (
                <CustomDropdown
                  key={dataIdx}
                  name={data.name}
                  label={data.label}
                  placeholder="Select"
                  options={data.options}
                  isCheckbox={true} // Enable checkbox mode
                  optionStyles="w-1/2"
                  formik={formik}
                />
              );
            })}
          </div>

          {/* ADDITIONAL INFO */}
          <div>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              label="Please share any additional information that will help us recommend the best service for you."
              placeholder="Type"
              value={values.additionalInfo}
              error={touched.additionalInfo && errors.additionalInfo}
              onChange={handleChange}
              onBlur={handleBlur}
              textAreaStyle="placeholder:!text-grey900"
            />
          </div>

          {/* PHONE AND EMAIL */}
          <div className="flex w-full justify-between gap-9">
            {recommendContactFormData.map((contact, idx) => {
              return (
                <InputField
                  key={idx}
                  type={contact.type as RecommendFormType}
                  name={contact.name}
                  label={contact.label}
                  placeholder={contact.placeholder}
                  classNames="bg-white"
                  value={values[contact.name as keyof RecommendFormValues]}
                  error={
                    touched[contact.name as keyof RecommendFormValues] &&
                    errors[contact.name as keyof RecommendFormValues]
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              );
            })}
          </div>

          <Button
            type="submit"
            label="Submit"
            isLoading={isSubmitting}
            classNames="active:scale-[0.98]"
          />
        </main>
      </form>
    </section>
  );
};

export default RecommendForm;
