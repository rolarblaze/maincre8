import { ArrowBackIcon } from "@/public/icons";
import { BusinessBriefForm } from "@/components";

const BusinessForm = () => {
  return (
    <div>
      {/* NAVIGATE BACK */}
      <div className="mb-10 flex justify-start items-center gap-2">
        <ArrowBackIcon />
        <p className="font-medium leading-6 text-grey600">
          Back to Custom recommendation
        </p>
      </div>

      {/* HEADING */}
      <header className="py-6 border-b">
        <h2 className="text-2xl font-semibold leading-8 text-grey900">
          Business Brief Submission Form
        </h2>

        <h4 className="font-medium text-base leading-6 text-grey500">
          Need personalized recommendations from the team? Please fill out this
          form
        </h4>
      </header>

      {/* FORM */}
      <div className="py-8">
        <BusinessBriefForm />
      </div>
    </div>
  );
};
export default BusinessForm;
