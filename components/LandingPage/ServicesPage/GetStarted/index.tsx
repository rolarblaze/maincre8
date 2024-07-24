import Card from "./Card";
import { GetStartedSteps } from "./Card/data";

const GetStarted = () => {
  return (
    <div className="bg-primary800 min-h-screen py-20">
      <div className="grid grid-cols-3 gap-8 max-w-[1216px] mx-auto">
        {GetStartedSteps.map((step, index) => (
          <>
            {index === 1 && (
              <div className="col-span-2 bg-getStarted-bg bg-no-repeat bg-cover bg-center w-full h-[280px] grid place-items-center">
                <p className="h2 text-black">How to get started</p>
              </div>
            )}
            <div key={index}>
              <Card
                key={step.step}
                title={step.title}
                description={step.description}
                step={step.step}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
