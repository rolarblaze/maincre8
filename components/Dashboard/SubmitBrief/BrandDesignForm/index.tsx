import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useState } from "react";
import {
  brandDesignFormSchema,
  brandDesignInitialValues,
  BrandDesignValues,
} from "../shared/formTypes/brandDesignTypes";
import { FormikHelpers, useFormik } from "formik";
import { addAlert } from "@/redux/alerts";
import { brandDesignFormData } from "../shared/formData/brandDesign";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import InputFile from "@/components/Forms/InputFile";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import { FileUploadIcon } from "@/public/svgs";
import FormFooter from "../shared/FormFooter";
import useFileUpload from "@/hooks/UseFileUpload";
import { formConfig } from "@/redux/myServices/formConfig";
import { submitFormData } from "@/redux/myServices/features";
import { handleFormModal } from "@/redux/myServices";
import { selectFileUploadState } from "@/redux/file";
import { briefFileUploadEndpoints } from "../shared/briefEndpoint";

function BrandDesignForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state: any) => state.forms?.brandDesign?.isLoading,
  );

  const fileOneState = useAppSelector((state) =>
    selectFileUploadState(state, "brandCompetitorsFile"),
  );

  const { trackingProgress } = useAppSelector((state) => state.tracker);
  const trackingId = trackingProgress?.activeBundle?.trackingId;

  const { handleFileUpload } = useFileUpload();
  // Define formik
  const formik = useFormik<BrandDesignValues>({
    initialValues: brandDesignInitialValues,
    validationSchema: brandDesignFormSchema,
    onSubmit: async (
      payload,

      { resetForm }: FormikHelpers<BrandDesignValues>,
    ) => {
      // HANDLE FORM SUBMISSION
      try {
        const config = formConfig.brandDesign;
        if (!config) {
          throw new Error("Form configuration not found");
        }

        // Construct payload using the config's logic
        const formPayload = config.constructPayload(payload);

        // Dispatch the thunk with endpoint and payload
        const response = await dispatch(
          submitFormData({
            formName: "brandDesign", // Pass only formName
            payload: formPayload, // Pass only the payload
            trackingId: trackingId as string,
          }),
        );

        if (response?.payload) {
          dispatch(
            addAlert({
              id: "",
              headText: "Success",
              subText: "Your brand design brief has been submitted",
              type: "success",
            }),
          );
        }

        resetForm();
        dispatch(
          handleFormModal({ formName: "brandDesign", isModalOpen: false }),
        );
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

  const { values, errors, handleBlur, handleChange, handleSubmit } = formik;

  // HANDLE FILE UPLOAD ONCHANGE
  const onFileChange = async (
    file: File | null,
    fileId: string,
    fieldName: string,
  ) => {
    if (formik) {
      await handleFileUpload(
        file,
        briefFileUploadEndpoints.brandDesign,
        fileId,
        fieldName,
        formik,
      );
    }
  };
  return (
    <form onSubmit={handleSubmit} className="noScrollbar w-full">
      <main className="w-full space-y-8">
        {brandDesignFormData.map((data, dataIdx) => {
          return (
            <div key={dataIdx}>
              {data.type === "select" && (
                <CustomDropdown
                  name={data.name}
                  label={data.label}
                  sublabel={data.sublabel}
                  placeholder={data.placeholder}
                  options={data.options || []}
                  isCheckbox={data.isCheckbox}
                  isRadio={data.isRadio}
                  optionStyles="w-full md:w-1/2"
                  formik={formik}
                />
              )}
              {data.type === "textArea" && (
                <div>
                  <Textarea
                    id={data.name}
                    name={data.name}
                    label={data.label}
                    sublabel={data.sublabel}
                    placeholder={data.placeholder}
                    value={
                      (values[
                        data.name as keyof BrandDesignValues
                      ] as string) || ""
                    }
                    error={errors[data.name as keyof BrandDesignValues]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    textAreaStyle="placeholder:!text-grey900"
                  />
                  {data.isImage && (
                    <InputFile
                      label={<CustomFileLabel />}
                      id={`${data.name}Document`}
                      name={`${data.name}Document`}
                      icon={<FileUploadIcon />}
                      onFileChange={(file: File | null) =>
                        onFileChange(
                          file,
                          `${data.name}File`,
                          `${data.name}Document`,
                        )
                      }
                      showUploadButton={false}
                      parentClassNames="md:!flex-col"
                      buttonStyles="px-4"
                      isLoading={fileOneState.isLoading}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </main>
      <FormFooter
        formik={formik}
        name="document"
        endpoint={briefFileUploadEndpoints.brandDesign}
        isLoading={isLoading}
        fileId="BDFooterFile"
      />
    </form>
  );
}

export default BrandDesignForm;
