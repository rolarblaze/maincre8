import Image from "next/image";
import assetLibrary from "@/library";
import dashboardImage from "@/public/imgs/dashboard.webp";
import Button from "@/components/Button";

const DashboardSection = () => {
  return (
    <section className="w-full  max-w-[76rem] sticky top-0 max-xl:px-6">
      <div className="space-y-8 max-sm:py-6 py-20">
        {/* CONTENT */}
        <div className="space-y-4.5">
          <div className="relative w-fit">
            <h2 className="text-grey900 max-w-[62.75rem] text-2xl md:text-4xl lg:text-5.5xl leading-8 md:leading-[3rem] lg:leading-[4rem]">
              Experience{" "}
              <span className="text-primary500 text-2xl md:text-4xl lg:text-5.5xl">
                Seamless
              </span>{" "}
              Project Management with Our User Dashboard
            </h2>
            {/* CURVED ARROW ICON */}
            <Image
              alt={"man"}
              src={assetLibrary.curvedArrow}
              width={76}
              height={76}
              quality={100}
              className="max-md:hidden absolute -bottom-2 -right-20"
            />
            {/* <CurvedArrow className="absolute -bottom-2 -right-24" /> */}
          </div>

          <p>
            At SellCrea8, we prioritize user experience by providing a
            comprehensive and <br className="max-lg:hidden" /> intuitive
            dashboard that simplifies your creative and digital service
            management.
          </p>
        </div>

        <Button
          label="Explore the Dashboard"
          classNames="max-w-[11.875rem] leading-5 px-0 max-md:py-2 max-md:text-sm lg:max-w-[14.25rem]"
        />
        {/* max-w-[11.875rem] md:max-w-[12.5rem] */}
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
