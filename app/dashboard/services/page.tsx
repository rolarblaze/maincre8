import Link from "next/link";
import Image from "next/image";
import { packages } from "./_constants";
import { getBackgroundClass, getImage } from "./_helperFunc";

const Services = () => {
  return (
    <div className="flex flex-wrap gap-6 px-6 py-10">
      {packages.map(({ id, name, text }) => {
        const packageRoute = name.toLowerCase().replace(/\s+/g, "-");
        return (
          <Link
            key={id}
            href={`/dashboard/services/${packageRoute}`}
            className="min-w-80 overflow-hidden rounded-lg border border-ash"
          >
            <figure
              className={`relative min-h-60 w-full ${getBackgroundClass(name)}`}
            >
              <Image
                src={getImage(name)}
                alt={name}
                fill
                priority
                className={`${name === "Graphic Design Packages" && "px-4 pt-2"} ${name === "Content Writing Packages" && "pl-5"} ${name === "Digital Marketing Packages" && "pl-4"} ${name === "All In One Bundle" && "px-6"}`}
              />
            </figure>

            <div className="p-4 font-manrope *:leading-[150%]">
              <h4 className="text-lg font-semibold text-grey900">{name}</h4>
              <p className="text-sm font-medium text-grey500">{text}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Services;
