import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import {
  allInOneFormSchema,
  allInOneInitialValues,
  AllInOneValues,
} from "../shared/formTypes/allInOneTypes";
import { addAlert } from "@/redux/alerts";
import { allInOneFormData } from "../shared/formData/allInOnebundle";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import InputFile from "@/components/Forms/InputFile";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import { FileUploadIcon } from "@/public/svgs";
import FormFooter from "../shared/FormFooter";
import useFileUpload from "@/hooks/UseFileUpload";
import { submitFormData } from "@/redux/myServices/features";
import { formConfig } from "@/redux/myServices/formConfig";
import { handleFormModal } from "@/redux/myServices";
import { selectFileUploadState } from "@/redux/file";
import { briefFileUploadEndpoints } from "../shared/briefEndpoint";
import { trackUserOrder } from "@/redux/servicesTracker/features";

function AllInOneBundleForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.forms?.AllInOne?.isLoading);

  const fileOneState = useAppSelector((state) =>
    selectFileUploadState(state, "allInOneBrandColorFile"),
  );

  const { trackingProgress } = useAppSelector((state) => state.tracker);
  const trackingId = trackingProgress?.activeBundle?.trackingId;

  const { handleFileUpload } = useFileUpload();

  // Define formik
  const formik = useFormik<AllInOneValues>({
    initialValues: allInOneInitialValues,
    validationSchema: allInOneFormSchema,
    onSubmit: async (values, { resetForm }: FormikHelpers<AllInOneValues>) => {
      try {
        const config = formConfig.AllInOne;
        if (!config) {
          throw new Error("Form configuration not found");
        }
        const formPayload = config.constructPayload(values);

        // Dispatch the thunk with endpoint and payload
        const response = await dispatch(
          submitFormData({
            formName: "AllInOne", // Pass only formName
            payload: formPayload, // Pass only the payload
            trackingId: trackingId as string,
          }),
        );
        if (response?.payload) {
          dispatch(
            addAlert({
              id: "",
              headText: "Success",
              subText: "Your all-in-one brief has been submitted",
              type: "success",
            }),
          );
        }
        resetForm();
        dispatch(handleFormModal({ formName: "AllInOne", isModalOpen: false }));
        dispatch(trackUserOrder(parseInt(trackingId as string) as number));
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText:
              "Error submitting digital marketing brief, please try again later",
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
        briefFileUploadEndpoints.allInOne,
        fileId,
        fieldName,
        formik,
      );
    }
  };
  return (
    <form onSubmit={handleSubmit} className="noScrollbar w-full">
      <main className="w-full space-y-8">
        {allInOneFormData.map((data, dataIdx) => {
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
                <div className="space-y-2">
                  <Textarea
                    id={data.name}
                    name={data.name}
                    label={data.label}
                    sublabel={data.sublabel}
                    placeholder={data.placeholder}
                    value={
                      (values[data.name as keyof AllInOneValues] as string) ||
                      ""
                    }
                    error={errors[data.name as keyof AllInOneValues]}
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

                      // error={errors}
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
        endpoint={briefFileUploadEndpoints.allInOne}
        isLoading={isLoading}
        fileId="AIFooterFile"
      />
    </form>
  );
}

export default AllInOneBundleForm;
