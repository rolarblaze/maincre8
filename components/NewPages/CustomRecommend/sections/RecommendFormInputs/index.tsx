import React, { useState } from "react";
import {
  recommendContactFormData,
  recommendSelectFormData,
} from "../RecommendForm/constants";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import InputFile from "@/components/Forms/InputFile";
import { FileUploadIcon } from "@/public/svgs";
import InputField from "@/components/Forms/InputField";
import { RecommendFormValues } from "../RecommendForm/type";
import { FormikProps } from "formik";
import { uploadRelevantDocument } from "@/redux/order/features";
import { useAppDispatch } from "@/redux/store";

function RecommendFormInputs({
  formik,
}: {
  formik: FormikProps<RecommendFormValues>;
}) {
  const dispatch = useAppDispatch();
  const [uploadedDocumentLink, setUploadedDocumentLink] = useState<
    string | null
  >(null);

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
    if (!file) {
      formik.setFieldError("document", "Please attach a document.");
      return;
    } else if (file && file.size > 5000000) {
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
              optionStyles="w-full md:w-1/2"
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

      {/* INPUT FILE */}
      <div>
        <InputFile
          label={
            <div className="flex flex-col gap-2">
              <p className="text-base text-black">Upload a brief document</p>
              <p className="text-sm font-normal text-grey400">
                Optional &bull; MAX. 50MB
              </p>
            </div>
          }
          id="document"
          name="document"
          icon={<FileUploadIcon />}
          handleUpload={(value: File | null) => handleFileUpload(value)}
          error={errors.document}
        />
      </div>

      {/* PHONE AND EMAIL */}
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
        {recommendContactFormData.map((contact, idx) => {
          return (
            <InputField
              key={idx}
              type={contact.type as RecommendFormType}
              name={contact.name}
              label={contact.label}
              placeholder={contact.placeholder}
              classNames="bg-white"
              value={
                (values[contact.name as keyof RecommendFormValues] as string) ||
                ""
              }
              error={
                touched[contact.name as keyof RecommendFormValues] &&
                (errors[contact.name as keyof RecommendFormValues] as
                  | string
                  | undefined)
              }
              onChange={handleChange}
              onBlur={handleBlur}
            />
          );
        })}
      </div>
    </main>
  );
}

export default RecommendFormInputs;
