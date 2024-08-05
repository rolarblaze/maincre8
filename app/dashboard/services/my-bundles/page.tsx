import { Button } from "@/components";
import { CheckboxIcon } from "@/public/svgs";

interface bundleSteps {
  id: number;
  content: string[];
  status: string;
  action?: (string | boolean)[]
}

const bundleSteps: bundleSteps[] = [
  {
    id: 1,
    content: ["Bundle bought", "Purchase your first bundle"],
    status: "completed",
    action: [true, "Buy a Bundle"]
  },
  {
    id: 2,
    content: [
      "Submit a Brief",
      "Kickstart your project by submitting a detailed brief immediately",
    ],
    status: "in progress",
  },
  {
    id: 3,
    content: [
      "Book a Discovery Call",
      "Schedule your Discovery Call to discuss project details, starting from 48 hours after purchase",
    ],
    status: "not completed",

  },
  {
    id: 4,
    content: [
      "Book a Discovery Call",
      "Schedule your Discovery Call to discuss project details, starting from 48 hours after purchase",
    ],
    status: "not completed",
  },
  {
    id: 5,
    content: [
      "Onboarding Call",
      "Finalize project specifics and meet your team during the onboarding call",
    ],
    status: "not completed",
  },
  {
    id: 6,
    content: [
      "Zoho Project Onboarding",
      "Your project will be set up in Zoho within 24 hours after the onboarding call",
    ],
    status: "not completed",
  },
];

const ServicesId = () => {
  const completed = (step: bundleSteps) => step.status === "completed";
  const inProgress = (step: bundleSteps) => step.status === "in progress";
  const notCompleted = (step: bundleSteps) => step.status === "not completed";
  // const buttonAction = (step: bundleSteps) => step.action[0] === true;

  return (
    <div className="space-y-10">
      {bundleSteps.map((step) => (
        <div key={step.id} className="flex items-center justify-between gap-6">
          <div className="size-[4.5rem] rounded-lg flex justify-center items-center">
            <CheckboxIcon fillColor="#1574e5" className="size-8" />
          </div>

          <div
            className={`w-full border rounded-lg p-6 flex justify-between items-center
              ${
                inProgress(step)
                  ? "border-primary500 bg-primary50 border-dashed"
                  : "border-grey200 bg-grey100"
              }
            `}
          >
            <div className="space-y-1">
              <h4
                className={`text-lg font-semibold ${
                  notCompleted(step) && "text-grey400"
                }`}
              >
                {step.content[0]}
              </h4>

              {!completed(step) && (
                <p
                  className={`text-base ${
                    inProgress(step) ? "text-grey600" : "text-grey400"
                  }`}
                >
                  {step.content[1]}
                </p>
              )}
            </div>

            {completed(step) ? (
              <p className="font-medium text-sm text-grey500">Date Completed</p>
            ) : (
              <Button label="Start" classNames={`w-fit text-sm px-4 py-2 ${notCompleted(step) && "bg-grey300"}`} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ServicesId;
