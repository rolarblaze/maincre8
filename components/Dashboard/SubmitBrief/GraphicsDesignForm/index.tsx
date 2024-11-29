import React from "react";
import {
  graphicsDesignFormSchema,
  graphicsDesignInitialValues,
  GraphicsDesignValues,
} from "../shared/formTypes/graphicsDesign";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import { addAlert } from "@/redux/alerts";
import { graphicsDesignFormData } from "../shared/formData/graphicsDesign";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import FormFooter from "../shared/FormFooter";
import InputFile from "@/components/Forms/InputFile";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import { FileUploadIcon } from "@/public/svgs";
import useFileUpload from "@/hooks/UseFileUpload";
import { formConfig } from "@/redux/myServices/formConfig";
import { submitFormData } from "@/redux/myServices/features";
import { handleFormModal } from "@/redux/myServices";
import { selectFileUploadState } from "@/redux/file";
import { useSelector } from "react-redux";
import { briefFileUploadEndpoints } from "../shared/briefEndpoint";

function GraphicsDesignForm() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state: any) => state.forms?.graphicsDesign?.isLoading,
  );
  const fileOneState = useSelector((state: RootState) =>
    selectFileUploadState(state, "graphicsColorPaletteFile"),
  );
  const fileTwoState = useSelector((state: RootState) =>
    selectFileUploadState(state, "graphicsReferencesFile"),
  );
  const { handleFileUpload } = useFileUpload();

  // Define formik
  const formik = useFormik<GraphicsDesignValues>({
    initialValues: graphicsDesignInitialValues,
    validationSchema: graphicsDesignFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<GraphicsDesignValues>,
    ) => {
      try {
        const config = formConfig.graphicsDesign;
        if (!config) {
          throw new Error("Form configuration not found");
        }
        const formPayload = config.constructPayload(values);

        // Dispatch the thunk with endpoint and payload
        await dispatch(
          submitFormData({
            formName: "graphicsDesign", // Pass only formName
            payload: formPayload, // Pass only the payload
          }),
        );
        dispatch(
          addAlert({
            id: "",
            headText: "Success",
            subText: "Your graphics design brief has been submitted",
            type: "success",
          }),
        );
        resetForm();
        dispatch(
          handleFormModal({ formName: "graphicsDesign", isModalOpen: false }),
        );
      } catch (error) {
        console.error("Error submitting form:", error);
        dispatch(
          addAlert({
            id: "",
            headText: "Error",
            subText:
              "Error submitting graphics design brief, please try again later",
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
        {graphicsDesignFormData.map((data, dataIdx) => {
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
                      (values[
                        data.name as keyof GraphicsDesignValues
                      ] as string) || ""
                    }
                    error={errors[data.name as keyof GraphicsDesignValues]}
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
                      key={dataIdx}
                      showUploadButton={false}
                      parentClassNames="md:!flex-col"
                      buttonStyles="px-4"
                      isLoading={
                        `${data.name}File` === "graphicsColorPaletteFile"
                          ? fileOneState.isLoading
                          : fileTwoState.isLoading
                      }
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
        endpoint={briefFileUploadEndpoints.graphicsDesign}
        isLoading={isLoading}
        fileId={"GDFooterFile"}
      />
    </form>
  );
}

export default GraphicsDesignForm;
