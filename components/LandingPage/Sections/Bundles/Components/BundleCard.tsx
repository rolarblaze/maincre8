import Button from "@/components/Button";
import { ListCheck } from "@/public/icons";

const Card = ({
  title,
  description,
  icon,
  price,
  features,
}: {
  title: string;
  description: string;
  icon: React.ReactElement;
  price: string;
  features: string[];
}) => (
  <div className="bg-white py-4 px-8 rounded-lg">
    <div className="flex items-center justify-center gap-2 bg-grey50 rounded-lg py-1.5 mb-4">
      <p>{icon}</p>
      <p className="font-semibold text-grey500">{title}</p>
    </div>
    <p className="text-black">
      <span className="font-bold leading-10 text-3xl">{price}</span> /month
    </p>
    <p>{description}</p>

    <Button label="Get Started" classNames="!py-2 !text-xs mt-4 mb-6" />
    {features.map((feature, index) => (
      <div className="flex gap-2 mb-4" key={index}>
        <ListCheck /> <span>{feature}</span>
      </div>
    ))}
  </div>
);

export default Card;
