import Image from "next/image";

type ReasonsType = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  body: string;
};

type WhyChooseUsPropsType = {
  reasons: ReasonsType[];
};

const WhyChooseUs = ({ reasons }: WhyChooseUsPropsType) => {
  return (
    <section className="p-5 xs:max-md:p-0">
      <ul className="no-scrollbar flex flex-wrap justify-between gap-y-16 xs:max-md:flex-nowrap xs:max-md:gap-5 xs:max-md:overflow-scroll">
        {reasons.map((reason) => {
          return (
            <li
              key={reason.title}
              className="w-[30%] space-y-4 xs:max-md:min-w-[90%]"
            >
              <figure className="center relative size-20 rounded-full">
                <Image
                  fill={true}
                  src={reason.iconSrc}
                  alt={reason.iconAlt}
                  className="object-cover"
                />
              </figure>
              <h4 className="text-lg font-extrabold leading-7 text-[#101928]">
                {reason.title}
              </h4>
              <p className="text-base font-normal leading-6 text-[#667185]">
                {reason.body}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WhyChooseUs;
