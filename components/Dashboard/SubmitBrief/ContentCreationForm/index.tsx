import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import React from "react";
import {
  contentCreationFormSchema,
  contentCreationInitialValues,
  ContentCreationValues,
} from "../shared/formTypes/contentCreationTypes";
import { addAlert } from "@/redux/alerts";
import { contentCreationFormData } from "../shared/formData/contentCreation";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import FormFooter from "../shared/FormFooter";
import { briefEndpoints } from "../shared/briefEndpoint";
import { formConfig } from "@/redux/myServices/formConfig";
import { submitFormData } from "@/redux/myServices/features";
import { handleFormModal } from "@/redux/myServices";

function ContentCreationForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state: any) => state.forms?.contentCreation?.isLoading,
  );

  // Define formik
  const formik = useFormik<ContentCreationValues>({
    initialValues: contentCreationInitialValues,
    validationSchema: contentCreationFormSchema,
    onSubmit: async (
      payload,

      { resetForm }: FormikHelpers<ContentCreationValues>,
    ) => {
      // HANDLE FORM SUBMISSION
      try {
        const config = formConfig.contentCreation;
        if (!config) {
          throw new Error("Form configuration not found");
        }

        // Construct payload using the config's logic
        const formPayload = config.constructPayload(payload);

        // Dispatch the thunk with endpoint and payload
        await dispatch(
          submitFormData({
            formName: "contentCreation", // Pass only formName
            payload: formPayload, // Pass only the payload
          }),
        );

        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Your content creation brief has been submitted",
            type: "success",
          }),
        );

        resetForm();
        dispatch(
          handleFormModal({ formName: "contentCreation", isModalOpen: false }),
        );
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText:
              "Error submitting  content creation brief, please try again later",
            type: "error",
          }),
        );
      }
    },
  });

  const { values, errors, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="noScrollbar w-full">
      <main className="w-full space-y-8">
        {contentCreationFormData.map((data, dataIdx) => {
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
                <div className="">
                  <Textarea
                    id={data.name}
                    name={data.name}
                    label={data.label}
                    sublabel={data.sublabel}
                    placeholder={data.placeholder}
                    value={
                      (values[
                        data.name as keyof ContentCreationValues
                      ] as string) || ""
                    }
                    error={errors[data.name as keyof ContentCreationValues]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    textAreaStyle="placeholder:!text-grey900"
                  />
                </div>
              )}
            </div>
          );
        })}
      </main>
      <FormFooter
        formik={formik}
        name="document"
        endpoint={briefEndpoints.contentCreation}
        isLoading={isLoading}
        fileId={"CCFooterFile"}
      />
    </form>
  );
}

export default ContentCreationForm;
