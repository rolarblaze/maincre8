"use client";
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
      label: "default",
      value: "default",
    },
  ];

  // const validationSchema = Yup.object({
  //   gender: Yup.string().nullable().oneOf(['male', 'female', 'others']),
  // });

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
      <fieldset className="space-y-6">
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
      <fieldset className="space-y-6">
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

      {/* TARGET AUDIENCE */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Target Audience
        </legend>

        <div className="space-y-6">
          {/* BUSINESS CHALLENGES */}
          <InputField
            type="text"
            label="Who is your target audience?"
            placeholder="Describe your target audience?"
            classNames="bg-white"
            value={values.audience}
            onChange={handleChange}
          />

          {/* AGE GROUP */}
          <InputField
            type="text"
            label="Age group"
            placeholder="Enter target audience age group"
            classNames="bg-white"
            value={values.ageGroup}
            onChange={handleChange}
          />

          {/* GENDER */}
          <DropdownSelect
            id="gender"
            name="gender"
            label="Gender"
            placeholder="Select Gender"
            options={optionHolder}
            value={values.gender || undefined}
            onChange={handleChange}
          />

          {/* LOCATION */}
          <InputField
            type="text"
            label="Location"
            placeholder="Location of target audience?"
            classNames="bg-white"
            value={values.location}
            onChange={handleChange}
          />

          {/* INTEREST & BEHAVIOUR */}
          <InputField
            type="text"
            label="Interests and behaviours"
            placeholder="Interests and behaviours of target audience?"
            classNames="bg-white"
            value={values.interestBehaviours}
            onChange={handleChange}
          />
          {/* CUSTOMER PERSONA */}
          <DropdownSelect
            id="customerPersonas"
            name="customerPersonas"
            label="Do you have existing customer personas?"
            placeholder="Yes/No"
            options={optionHolder}
            value={values.customerPersonas || undefined}
            onChange={handleChange}
          />

          {/* YES/NO | CUSTOMER PERSONA */}
          <InputField
            type="text"
            label=" If yes, please describe them."
            placeholder="Enter customer personas description"
            classNames="bg-white"
            value={values.customerPersonas}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      {/* DESIRED OUTCOMES */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Target Audience
        </legend>

        <div className="space-y-6">
          <InputField
            type="text"
            label="What are the desired outcomes of this project?"
            placeholder="State desired outcomes"
            classNames="bg-white"
            tooltipText="e.g., increase in website traffic, higher conversion rates, improved customer satisfaction, better brand recognition"
            value={values.desiredOutcomes}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      {/* BUDGET */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Budget
        </legend>

        <div className="space-y-6">
          <InputField
            type="text"
            label="What is your budget projection for this solution?"
            placeholder="Budget"
            classNames="bg-white"
            tooltipText="Please provide a range"
            value={values.budgetProjection}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      {/* COMPETITOR ANALYSIS */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Competitor Analysis
        </legend>

        <div className="space-y-6">
          {/* MAIN COMPETITORS */}
          <InputField
            type="text"
            label="Who are your main competitors?"
            placeholder="List competitors"
            classNames="bg-white"
            value={values.mainCompetitor}
            onChange={handleChange}
          />

          {/* MAIN COMPETITORS WEBSITE LINK */}
          <InputField
            type="text"
            label="Please list and provide website links if available"
            placeholder="List competitor website links"
            classNames="bg-white"
            value={values.mainCompetitorWebsite}
            onChange={handleChange}
          />

          {/* MAIN COMPETITORS WEBSITE LINK */}
          <InputField
            type="text"
            label="What do you like or dislike about their digital presence?"
            placeholder="Competitor info"
            classNames="bg-white"
            value={values.mainCompetitorWebsite}
            onChange={handleChange}
          />
        </div>
      </fieldset>

      {/* ADDITIONAL INFROMATION */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Additional Information
        </legend>

        <div className="space-y-6">
          {/* ADDITIONAL INFORMATION */}
          <InputField
            type="text"
            label="Please provide any additional information or context that will help us understand your needs better."
            placeholder="Enter brief objectives"
            classNames="bg-white"
            value={values.additionalInformation}
            onChange={handleChange}
          />

          {/* ATTACH FILE */}
          <div>ATTACH FILE</div>
        </div>
      </fieldset>

      {/* CONSENT */}
      <fieldset className="space-y-6">
        <legend className="text-lg font-semibold text-grey900 leading-6">
          Consent
        </legend>

        <div className="space-y-6">
          {/* CONSENT */}
          <DropdownSelect
            id="industry"
            name="industry"
            label="Would you like to receive updates and newsletters from us?"
            placeholder="Yes/No"
            options={optionHolder}
            value={values.receiveUpdates || undefined}
            onChange={handleChange}
          />
        </div>
      </fieldset>
    </form>
  );
};
export default BusinessBriedForm;
