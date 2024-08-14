"use client";
import { useState } from "react";
import { useFormik, FormikHelpers } from "formik";
import { DropdownSelect, InputField } from "@/components";

interface FormValues {
  // BUSINESS INFORMATION
  industry: string;
  companyName: string;
  companySize: string;
  websiteURL: string;
  contactPersonName: string;
  contactEmail: string;
  contactPhoneNumber: string;

  // BUSINESS CHALLENGES
  challenges: string;
  digitalSolution: string;
  solutionOutcomes: string;

  // TARGET AUDIENCE
  audience: string;
  ageGroup: string;
  gender: "male" | "female" | "others" | null;
  location: string;
  interestBehaviours: string;
  customerPersonas: string;
  personaDescribe: string;

  // DESIRED OUTCOMES
  desiredOutcomes: string;

  // BUDGET
  budgetProjection: string;

  // PREFERRED SOLUTIONS
  usefulDigitalServices: string[];

  // COMPETITOR ANALYSIS
  mainCompetitor: string;
  mainCompetitorWebsite: string;
  dislikeDigitalPrescence: string;

  // ADDITIONAL INFORMATION
  additionalInformation: string;

  // CONSENT
  receiveUpdates: "Yes" | "No" | null;
}

const BusinessBriedForm = () => {
  const optionHolder = [
    {
      label: "deafult",
      value: "default",
    },
  ];

  const initialValues: FormValues = {
    // BUSINESS INFORMATION
    industry: "",
    companyName: "",
    companySize: "",
    websiteURL: "",
    contactPersonName: "",
    contactEmail: "",
    contactPhoneNumber: "",

    // BUSINESS CHALLENGES
    challenges: "",
    digitalSolution: "",
    solutionOutcomes: "",

    // TARGET AUDIENCE
    audience: "",
    ageGroup: "",
    gender: null,
    location: "",
    interestBehaviours: "",
    customerPersonas: "",
    personaDescribe: "",

    // DESIRED OUTCOMES
    desiredOutcomes: "",

    // BUDGET
    budgetProjection: "",

    // PREFERRED SOLUTIONS
    usefulDigitalServices: [],

    // COMPETITOR ANALYSIS
    mainCompetitor: "",
    mainCompetitorWebsite: "",
    dislikeDigitalPrescence: "",

    // ADDITIONAL INFORMATION
    additionalInformation: "",

    // CONSENT
    receiveUpdates: null,
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: signupValidation,
    onSubmit: (values, { resetForm }: FormikHelpers<FormValues>) => {
      formSubmit(values, resetForm);
    },
  });
  const formSubmit = async (values: FormValues, resetForm: () => void) => {
    console.log(values);
    // resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-[50rem]">
      {/* BUSINESS INFORMATION */}
      <fieldset className="space-y-8">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Business Informaion
        </legend>

        <div className="space-y-6">
          {/* COMPANY NAME */}
          <InputField
            type="text"
            label="Company Name"
            placeholder="Enter Company Name"
            classNames="bg-white"
            value={values.companyName}
            onChange={handleChange}
          />

          {/* TYPE OF INDUSTRY */}
          <DropdownSelect
            id="industry"
            name="industry"
            label="Type of Industry"
            placeholder="Select type"
            options={optionHolder}
            value={values.industry}
            onChange={handleChange}
          />

          {/* COMPANY SIZE */}
          <DropdownSelect
            id="companySize"
            name="companySize"
            label="Company Size"
            placeholder="Number of employees"
            options={optionHolder}
            value={values.companySize}
            onChange={handleChange}
          />

          {/* WEBSITE URL */}
          <InputField
            type="text"
            label="Website URL"
            placeholder="Enter website link"
            classNames="bg-white"
            value={values.websiteURL}
            onChange={handleChange}
          />

          {/* CONTACT PERSON NAME */}
          <InputField
            type="text"
            label="Contact Person Name"
            placeholder="Contact Person's Name"
            classNames="bg-white"
            value={values.contactPersonName}
            onChange={handleChange}
          />

          {/* CONTACT EMAIL */}
          <InputField
            type="text"
            label="Contact Email"
            placeholder="Enter Contact Email"
            classNames="bg-white"
            value={values.contactEmail}
            onChange={handleChange}
          />

          {/* CONTACT PHONE NUMBER */}
          <InputField
            type="text"
            label="Contact Phone Number"
            placeholder="Contact Person's Name"
            classNames="bg-white"
            value={values.contactEmail}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      {/* BUSINESS CHALLENGES */}
      <fieldset className="space-y-8">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Business Challenges
        </legend>

        <div className="space-y-6">
          {/* BUSINESS CHALLENGES */}
          <InputField
            type="text"
            label="What specific business challenges are you currently facing?"
            placeholder="Enter business challenges"
            classNames="bg-white"
            tooltipText="e.g., low brand awareness, poor customer engagement, declining sales, ineffective online presence"
            value={values.challenges}
            onChange={handleChange}
          />

          {/* DIGITAL SOLUTION */}
          <DropdownSelect
            id="digitalSolution"
            name="digitalSolution"
            label="Have you previously implemented any digital solutions?"
            placeholder="Select Type"
            options={optionHolder}
            value={values.digitalSolution}
            onChange={handleChange}
          />

          {/* SOLUTION OUTCOMES */}
          <InputField
            type="text"
            label="If yes, please describe the solutions and their outcomes."
            placeholder="Enter brief objectives"
            classNames="bg-white"
            value={values.solutionOutcomes}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
};
export default BusinessBriedForm;
