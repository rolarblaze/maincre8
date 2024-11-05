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

  // HANLDE FILE UPLOAD
  async function handleFileUpload(file: File | null) {
    console.log("File gotten:", file);
  }

  return (
    <form onSubmit={handleSubmit} className="noScrollbar h-full w-full pt-4">
      <main className="h-full w-full space-y-8">
        {graphicsDesignFormData.map((data, dataIdx) => {
          return (
            <div key={dataIdx}>
              {data.type === "select" && (
                <CustomDropdown
                  name={data.name}
                  label={data.label}
                  placeholder={data.placeholder}
                  options={data.options || []}
                  isCheckbox={data.isCheckbox}
                  isRadio={data.isRadio}
                  optionStyles="w-full md:w-1/2"
                  formik={formik}
                />
              )}
              {data.type === "textArea" && (
                <Textarea
                  id={data.name}
                  name={data.name}
                  label={data.label}
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
              )}
            </div>
          );
        })}
      </main>
      {/* <FormFooter /> */}
    </form>
  );
}

export default GraphicsDesignForm;
