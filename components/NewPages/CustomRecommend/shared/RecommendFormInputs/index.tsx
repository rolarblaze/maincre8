import React, { useState } from "react";
import {
  recommendContactFormData,
  recommendSelectFormData,
} from "../constants";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import InputFile from "@/components/Forms/InputFile";
import { FileUploadIcon } from "@/public/svgs";
import InputField from "@/components/Forms/InputField";
import { RecommendFormType, RecommendFormValues } from "../type";
import { FormikProps } from "formik";
import { RootState} from "@/redux/store";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import useFileUpload from "@/hooks/UseFileUpload";
import { briefEndpoints } from "@/components/Dashboard/SubmitBrief/shared/briefEndpoint";
import { useSelector } from "react-redux";
import { selectFileUploadState } from "@/redux/file";

function RecommendFormInputs({
  formik,
}: {
  formik: FormikProps<RecommendFormValues>;
}) {
  const { values, errors, touched, handleBlur, handleChange } = formik;

  const recommendBriefFileState = useSelector((state: RootState) =>
    selectFileUploadState(state, "recommendBriefFile"),
  );
  const { handleFileUpload } = useFileUpload();

  // HANDLE FILE UPLOAD ONCHANGE
  const onFileChange = async (
    file: File | null,
    fileId: string,
    fieldName: string,
  ) => {
    if (formik) {
      await handleFileUpload(
        file,
        briefEndpoints.recommendationBrief,
        fileId,
        fieldName,
        formik,
      );
    }
  };

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
          label={<CustomFileLabel />}
          id="document"
          name="document"
          icon={<FileUploadIcon />}
          onFileChange={(file: File | null) =>
            onFileChange(file, `recommendBriefFile`, `document`)
          }
          showUploadButton={false}
          error={errors.document}
          isLoading={recommendBriefFileState.isLoading}
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
