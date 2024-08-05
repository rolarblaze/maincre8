import Card from "./Card";
import { GetStartedSteps } from "./Card/data";

const GetStarted = () => {
  return (
    <div className="bg-primary800 min-h-screen py-20 max-xl:px-6">
      <div className="max-w-[1216px] mx-auto">
        {/* Get Started div at the top on screens below md */}
        <div className="grid place-items-center max-w-[385px] mx-auto md:hidden w-full h-full mb-8 relative">
          <img
            src="/images/getStarted-frame-mob.svg"
            alt="get srated"
            className="w-full h-full"
          />
          <h2 className="absolute text-black">How to get started</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
          {GetStartedSteps.map((step, index) => (
            <>
              {index === 1 && (
                <div className="hidden md:grid max-lg:row-start-1 col-span-2 bg-getStarted-bg bg-no-repeat bg-cover bg-center w-full h-[280px] place-items-center mx-auto">
                  <p className="h2 text-black">How to get started</p>
                </div>
              )}
              <>
                <Card
                  key={step.step}
                  title={step.title}
                  description={step.description}
                  step={step.step}
                />
              </>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
