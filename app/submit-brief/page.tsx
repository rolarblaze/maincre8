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
      <div className="mt-20 space-y-10 max-w-[76rem] mx-auto">
        <header>
          {/* PILL DIV */}
          <PillDiv>Want to work with Us?</PillDiv>

          {/* TODO: IMPORT MANROPE FONT */}
          <h2 className="font-bold text-5.5xl leading-[4rem]">
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
