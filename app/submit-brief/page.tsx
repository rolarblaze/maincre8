import {
  AppWrapper,
  HomepageCTA,
  HomepageSubscribe,
  PillDiv,
  ProjectForm,
} from "@/components";

const SubmitBrief = () => {
  return (
    <AppWrapper type="">
      <div className="mt-10 md:mt-16 lg:mt-20 space-y-4 md:space-y-10  max-xl:px-6 max-w-[76rem] mx-auto">
        <header>
          {/* PILL DIV */}
          <PillDiv className="max-sm:px-2 max-sm:py-1 max-sm:text-xs max-md:text-base">Want to work with Us?</PillDiv>

          {/* TODO: IMPORT MANROPE FONT */}
          <h2 className=" font-medium lg:font-semibold text-2xl md:text-4xl lg:text-5.5xl md:leading-[4rem]">
            Submit a brief
          </h2>
        </header>

        {/* FORM HERE */}
        <ProjectForm />
      </div>

      <HomepageCTA />
      <HomepageSubscribe />
    </AppWrapper>
  );
};
export default SubmitBrief;
