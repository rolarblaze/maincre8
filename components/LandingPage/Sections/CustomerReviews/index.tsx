import { AvatarIcon } from "@/components";
import { Card, Reviews } from "./Components";

const CustomerReviews = () => {
  return (
    <section className="w-full py-20 max-xl:px-5 text-center bg-white z-20 no-scrollbar">
      <div className="max-w-[1216px] mx-auto">
        <h2>
          What Our <span className="h2 text-primary500"> Customers</span> Say  
        </h2>

        <p className="mb-8 mt-2">Customer Reviews</p>

        <div className="flex gap-8 text-left max-lg:overflow-x-scroll">
          {Reviews.map((review) => (
            <Card
              key={review.name}
              icon={<AvatarIcon src={review.src} />}
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
