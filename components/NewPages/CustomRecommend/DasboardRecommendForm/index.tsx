import React from "react";
import RecommendFormInputs from "../shared/RecommendFormInputs";
import { addAlert } from "@/redux/alerts";
import { useAppDispatch } from "@/redux/store";
import { RecommendFormValues } from "../shared/type";
import { RECOMMEND_INITIAL_VALUES } from "../shared/constants";
import { recommendFormSchema } from "../shared/schema";
import { FormikHelpers, useFormik } from "formik";
import Button from "@/components/Button";

function DashboardRecommendForm() {
  const dispatch = useAppDispatch();
  const formik = useFormik<RecommendFormValues>({
    initialValues: RECOMMEND_INITIAL_VALUES,
    validationSchema: recommendFormSchema,
    onSubmit: async (
      values,
      { resetForm }: FormikHelpers<RecommendFormValues>,
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
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="noScrollbar h-full w-full overflow-y-auto pb-28"
    >
      <RecommendFormInputs formik={formik} />
      <footer className="absolute inset-x-0 -bottom-2 bg-white px-8 py-6">
        <Button label="Checkout" classNames="active:scale-[0.98]" />
      </footer>
    </form>
  );
}

export default DashboardRecommendForm;
