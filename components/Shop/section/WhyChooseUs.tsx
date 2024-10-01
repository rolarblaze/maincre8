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
    <section className="p-5">
      <ul className="flex flex-wrap justify-between gap-y-16">
        {reasons.map((reason) => {
          return (
            <li key={reason.title} className="space-y-4 w-[30%]">
              <figure className="relative size-20 rounded-full center">
                <Image
                  fill={true}
                  src={reason.iconSrc}
                  alt={reason.iconAlt}
                  className="object-cover"
                />
              </figure>
              <h4 className="font-extrabold text-lg leading-7 text-[#101928]">
                {reason.title}
              </h4>
              <p className="font-normal text-base leading-6 text-[#667185]">
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
