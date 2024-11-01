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
        const finalValues = {
          // SELECT FIELDS
          service_kinds: values.serviceKinds,
          service_goal: values.serviceGoal,
          monthly_budget: values.monthlyBudget,
          anticipation_duration: values.anticipationDuration,
          business_type: values.businessType,

          // ADDITIONAL INFO
          additional_info: values.additionalInfo,
          contact_email: values.contactEmail,
          contact_phone_number: values.contactPhoneNumber,
        };

        console.log(finalValues, "Final values");

        // await dispatch(submitRecommendationBrief(finalValues));

        // dispatch(
        //   addAlert({
        //     id: "",
        //     headText: "Success",
        //     subText: "Brief submitted successfully",
        //     type: "success",
        //   }),
        // );
        // resetForm();
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
      className="noScrollbar h-full w-full overflow-y-auto"
    >
      <RecommendFormInputs formik={formik} />
      <footer className="absolute inset-x-0 bottom-0 bg-white px-8 py-6">
        <Button label="Checkout" classNames="active:scale-[0.98]" />
      </footer>
    </form>
  );
}

export default DashboardRecommendForm;
