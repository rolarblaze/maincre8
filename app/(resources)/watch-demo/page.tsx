import { AppWrapper, CTASection, HomepageSubscribe } from "@/components";

const WatchDemo = () => {
  const list = [
    "A one-on-one discussion about your project requirements",
    "Personalized recommendations for the best service bundles",
    "Answers to any questions about using SellCrea8",
    "Guidance on getting started with the platform",
  ];

  return (
    <AppWrapper type="">
      <div className="relative w-full flex justify-center overflow-hidden items-center min-h-[25.5rem] bg-transparent -mt-24">
        {/* VIDEO PLAYGROUND */}

        {/* FALLBACK IF THE VIDEO DOES NOT LOAD */}
        <div className="absolute inset-0 bg-primary800 -z-[2]"></div>

        <h1 className="text-4.5xl mt-4 md:text-[3rem] text-white lg:text-5.5xl font-extrabold tracking-[-0.05rem] md:tracking-[-0.105rem] text-center md:font-bold leading-[4rem]">
          Watch a Demo
        </h1>
      </div>

      <div className="max-w-[62.25rem] space-y-8 max-xl:px-5 py-8 md:py-14 lg:py-20 mx-auto min-h-dvh">
        <article className="space-y-8 max-sm:font-medium max-sm:text-sm max-sm:leading-[1.3125rem] leading-6">
          <p>
            Curious about how SellCrea8 can revolutionize your creative and
            digital projects? Our demo gives you an in-depth look at our
            platform&apos;s features and capabilities. Watch as we walk you through
            the seamless process of booking services, managing projects, and
            accessing personalized recommendations.
          </p>
          <p>(Watch the Demo Here)</p>
        </article>

        {/* VIDEO */}
        <div className="w-full min-h-[13.25rem] md:min-h-[20.5rem] lg:min-h-[28.75rem] bg-white md:bg-primary900 rounded-lg">
          <video autoPlay muted loop className="h-full w-full">
            <source src="/video/demo-video.webm" type="video/webm" />
          </video>
        </div>

        {/* INSTRUCTIONS */}
        <article className="text-base text-grey700 space-y-4 lg:space-y-8">
          <h3 className="text-grey900 leading-7 font-semibold text-lg">
            Book a Consultation Call
          </h3>
          <p>Get Personalized Guidance</p>

          <div>
            <p className="leading-6">
              Ready to take your creative and digital projects to the next
              level? Book a consultation call with one of our experts. Whether
              you have specific questions or need help understanding how
              SellCrea8 fits your needs, our team is here to provide tailored
              advice and insights. <br /> What to Expect
            </p>
            <ol className="list-decimal list-outside pl-4">
              {list.map((item, index) => (
                <li key={`list-${index}`} className="leading-6">
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <p className="leading-6">
            Let’s explore how SellCrea8 can work for you. Schedule your
            consultation and start your journey towards streamlined creative
            solutions.
          </p>
        </article>
      </div>

      <CTASection />
      <HomepageSubscribe />
    </AppWrapper>
  );
};
export default WatchDemo;
