import React from "react";
import {
  graphicsDesignFormSchema,
  graphicsDesignInitialValues,
  GraphicsDesignValues,
} from "../shared/formTypes/graphicsDesign";
import { useAppDispatch } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import { addAlert } from "@/redux/alerts";
import { graphicsDesignFormData } from "../shared/formData/graphicsDesign";
import CustomDropdown from "@/components/Forms/CustomDropdown";
import Textarea from "@/components/Forms/Textarea";
import FormFooter from "../shared/FormFooter";
import InputFile from "@/components/Forms/InputFile";
import CustomFileLabel from "@/components/Forms/CustomFileLabel";
import { FileUploadIcon } from "@/public/svgs";
import { briefEndpoints } from "../shared/briefEndpoint";

function GraphicsDesignForm() {
  const dispatch = useAppDispatch();

  // Define formik
  const formik = useFormik<GraphicsDesignValues>({
    initialValues: graphicsDesignInitialValues,
    validationSchema: graphicsDesignFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<GraphicsDesignValues>,
    ) => {
      try {
        console.log("Form submitted");

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

  // HANDLE FILE UPLOAD ONCHANGE
  function onFileChange(file: File | null, name: string) {
    console.log(file);

    // Write your logic for api upload here. The name parameter above is used to distinguish the api name for different form upload name since they share the same footer.
    //----------------

    // Then after getting the upload link, you set it to formik via the name here
    // -----------
    // if(formik){
    //   formik.setFieldValue(name, uploadLink)
    // }
  }
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
                        onFileChange(file, `${data.name}Document`)
                      }
                      showUploadButton={false}
                      parentClassNames="md:!flex-col"
                      buttonStyles="px-4"
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
        endpoint={briefEndpoints.graphicsDesign}
      />
    </form>
  );
}

export default GraphicsDesignForm;
