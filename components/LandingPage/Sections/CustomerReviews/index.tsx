import { AvatarIcon } from "@/public/icons";

const Reviews = [
  {
    review:
      "SellCrea8 transformed our brand identity with their creative services. Highly recommended!",
    name: "Elizabeth P",
    role: "Product Manager",
  },
  {
    review:
      "Their digital marketing strategy helped us reach a wider audience and increase sales.",
    name: "Eze J",
    role: "Product Manager",
  },
  {
    review:
      "Fantastic support and easy project management. SellCrea8 is our go-to platform for creative needs.",
    name: "Nicolas T",
    role: "Product Manager",
  },
];

const Card = ({
  icon,
  review,
  name,
  role,
}: {
  icon: React.ReactElement;
  review: string;
  name: string;
  role: string;
}) => (
  <div className="border rounded-lg p-6 flex flex-col gap-6">
    <p className="font-semibold max-w-[300px]">{review}</p>
    <div className="flex gap-3">
      <AvatarIcon />
      <div>
        <p className="font-semibold text-base">{name}</p>
        <p className="text-grey600 text-base">{role}</p>
      </div>
    </div>
  </div>
);

const CustomerReviews = () => {
  return (
    <div className="py-20 text-center">
      <h2>
        What Our <span className="h2 text-primary500"> Customers</span> Say  
      </h2>

      <p className="mb-8 mt-2">Customer Reviews</p>

      <div className="grid grid-cols-3 gap-8 text-left">
        {Reviews.map((review) => (
          <Card
            key={review.name}
            icon={<AvatarIcon />}
            review={review.review}
            name={review.name}
            role={review.role}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
