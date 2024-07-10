import Button from "@/components/Button";
import {
  BlueCheckIcon,
  BlueProfileIcon,
  BlueProjectIcon,
  BlueSupportIcon,
  BlueTargetIcon,
  BlueUserIcon,
  HighlightDown,
  HighlightUp,
} from "@/public/icons";
import { Benefit } from "@/public/imgs";

const Benefits1 = [
  {
    icons: <BlueCheckIcon />,
    title: "Cost-Effective Solutions",
    description:
      "Access high-quality creative and digital services at competitive rates, helping you manage your budget efficiently.",
  },
  {
    icons: <BlueProjectIcon />,

    title: "Enhanced Project Management",
    description:
      "Streamline your project workflows with our integrated tools, ensuring timely delivery and superior quality.",
  },
  {
    icons: <BlueTargetIcon />,

    title: "Scalable Services Through Subscription",
    description:
      "Easily scale your service needs as your business grows, with customizable bundles tailored to your specific requirements.",
  },
];
const Benefits2 = [
  {
    icons: <BlueUserIcon />,
    title: "Personalized Services",
    description:
      "Enjoy creative and digital services tailored to your individual needs, ensuring a unique and satisfying experience.",
  },
  {
    icons: <BlueProfileIcon />,

    title: "User-Friendly Platform",
    description:
      "Navigate our intuitive platform with ease, making service access and project management a breeze.",
  },
  {
    icons: <BlueSupportIcon />,
    title: "Dedicated Support",
    description:
      "Receive prompt and effective support through our live chat and ticketing system, ensuring all your queries and issues are addressed swiftly.",
  },
];

const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactElement;
}) => (
  <div className="bg-[#F1F7FD] flex gap-8 py-4 px-6 rounded-2xl w-full  text-start">
    <div>{icon}</div>
    <div>
      <p className="text-black font-semibold">{title}</p>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

const Benefits = () => {
  return (
    <>
      <div className="w-full text-center py-20">
        <div className="flex justify-center">
          <HighlightDown />
          <h2>
            {" "}
            Benefits for <span className="h2 text-primary500"> Businesses</span>
             
          </h2>
          <HighlightUp />
        </div>
        <p>Maximize Your Business Potential with SellCrea8</p>

        <div className="w-full flex items-center justify-between my-8">
          <div className="flex flex-col gap-8 max-w-[591px]">
            {Benefits1.map((benefits) => (
              <Card
                key={benefits.title}
                title={benefits.title}
                description={benefits.description}
                icon={benefits.icons}
              />
            ))}
          </div>

          <img
            src={Benefit.src}
            alt="benefits"
            width={"430px"}
            height={"100%"}
          />
        </div>

        <Button
          label="Discover More Benefits"
          classNames="!py-2 !text-xs mt-4 mb-6 w-max mx-auto"
        />
      </div>

      {/* -------------- */}

      <div className="w-full text-center py-20">
        <div className="flex justify-center">
          <HighlightDown />
          <h2>
            {" "}
            Benefits for <span className="h2 text-primary500"> Businesses</span>
             
          </h2>
          <HighlightUp />
        </div>
        <p>Unlock Your Creative Potential with SellCrea8</p>

        <div className="w-full flex items-center justify-between my-8">
          <img
            src={Benefit.src}
            alt="benefits"
            width={"430px"}
            height={"100%"}
          />
          <div className="flex flex-col gap-8 max-w-[591px]">
            {Benefits2.map((benefits) => (
              <Card
                key={benefits.title}
                title={benefits.title}
                description={benefits.description}
                icon={benefits.icons}
              />
            ))}
          </div>
        </div>

        <Button
          label="Discover More Benefits"
          classNames="!py-2 !text-xs mt-4 mb-6 w-max mx-auto"
        />
      </div>
    </>
  );
};

export default Benefits;
