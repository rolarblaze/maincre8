import { AvatarIcon } from "@/public/icons";
import { Card, Reviews } from "./Components";

const CustomerReviews = () => {
  return (
    <section className="w-full py-20 text-center">
      <div className="max-w-[1216px] mx-auto">
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
    </section>
  );
};

export default CustomerReviews;
