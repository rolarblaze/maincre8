import Image from "next/image";
import { CurvedArrow } from "@/public/icons";
import dashboardImage from "@/public/imgs/dashboard.webp";
import Button from "@/components/Button";

const DashboardSection = () => {
  return (
    <section className="w-full  max-w-[76rem] sticky top-0 max-xl:px-6">
      <div className="space-y-8 py-20">
        {/* CONTENT */}
        <div className="space-y-4.5">
          <div className="relative w-fit">
            <h2 className="text-grey900 text-[clamp(1.5rem,_5vw,_3.5rem)] leading-[clamp(2rem,_6vw,_4rem)]">
              {/* correction for AJ */}
              Experience <span className="text-primary500 text-[clamp(1.5rem,_5vw,_3.5rem)]">
                Seamless
              </span>{" "} Project <br /> Management with Our User Dashboard
            </h2>
            {/* CURVED ARROW ICON */}
            <CurvedArrow className="absolute -bottom-2 -right-24" />
          </div>

          <p>
            At SellCrea8, we prioritize user experience by providing a
            comprehensive and <br /> intuitive dashboard that simplifies your
            creative and digital service management.
          </p>
        </div>

        <Button
          label="Explore the Dashboard"
          classNames="max-w-[11.875rem] px-4 lg:max-w-[14.25rem]"
        />

        {/* <button className="bg-primary500 text-white rounded-lg text-sm font-semibold px-4 py-2">
         
        </button> */}

        {/* BIG BLUE DIV */}
        <div className="w-full bg-primary800 rounded-xl lg:rounded-5xl pt-4 px-2.5 lg:pt-10 lg:px-6 ">
          <Image src={dashboardImage} alt="Dashboard display" />
        </div>
      </div>
    </section>
  );
};
export default DashboardSection;
