interface ContentProps {
  heading: string;
  description: string;
  imgSrc: string;
}

interface SectionProps {
  title: string;
  subTitle: string;
  content: ContentProps[];
}

const Section = ({ title, subTitle, content }: SectionProps) => {
  return (
    <>
      <h2 className="mb-6 max-sm:text-2xl">{title}</h2>
      <p className="mb-10">{subTitle}</p>

      {content?.map((content, index) => (
        <div
          className={`flex max-md:flex-col ${(Number(index) % 2 === 0) && "md:flex-row-reverse"} items-center gap-8 mb-20`}
          key={content.heading}
        >
          <>
            <img
              src={content.imgSrc}
              alt={content.heading}
              width={"50%"}
              height={"100%"}
              className="md:w-1/2 w-full"
            />
            <div className="text-left">
              <h4 className="mb-4 text-lg">{content.heading}</h4>
              <p>{content.description}</p>
            </div>
          </>
          {/* {index === 1 ? (
            <>
              <img
                src={"/images/servicesImages/placeholder.svg"}
                alt={content.heading}
                width={"100%"}
                height={"100%"}
              />
              <div className="text-left">
                <h4 className="mb-4">{content.heading}</h4>
                <p>{content.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-left">
                <h4 className="mb-4">{content.heading}</h4>
                <p>{content.description}</p>
              </div>
              <img
                src={"/images/servicesImages/placeholder.svg"}
                alt={content.heading}
                width={"100%"}
                height={"100%"}
              />
            </>
          )} */}
        </div>
      ))}
    </>
  );
};

export default Section;
