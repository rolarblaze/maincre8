"use client";
import Button from "@/components/Button";
import React from "react";
import { addAlert } from "@/redux/alerts";
import { useAppDispatch } from "@/redux/store";
import { FormikHelpers, useFormik } from "formik";
import { RecommendFormValues } from "../shared/type";
import { RECOMMEND_INITIAL_VALUES } from "../shared/constants";
import { recommendFormSchema } from "../shared/schema";
import RecommendFormInputs from "../shared/RecommendFormInputs";

function WebsiteRecommendForm() {
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
    <section className="full-width flex justify-center bg-grey50 px-5 pb-[6.3rem] pt-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-[43rem] space-y-8 rounded-[10px] bg-white px-4 py-8 md:px-[3.4rem]"
      >
        <h3 className="mb-2 text-center">Get a Personalised Recommendation</h3>
        <RecommendFormInputs formik={formik} />
        <Button
          type="submit"
          label="Submit"
          isLoading={formik.isSubmitting}
          classNames="active:scale-[0.98]"
        />
      </form>
    </section>
  );
}

export default WebsiteRecommendForm;
