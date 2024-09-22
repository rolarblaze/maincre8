import { AvatarIcon } from "@/components";
import { Card, Reviews } from "./Components";

const CustomerReviews = () => {
  return (
    <section className="w-full py-5 md:py-14 lg:py-20 max-xl:px-5 text-center bg-white z-20">
      <div className="max-w-[1216px] text-2xl md:text-4xl lg:text-5.5xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5.5xl">
          What Our <span className="text-2xl md:text-4xl lg:text-5.5xl text-primary500"> Customers</span> Say  
        </h2>

        <p className="mb-8 mt-2 font-medium max-sm:text-xs max-md:text-sm md:mt-4 leading-6">Customer Reviews</p>

        <div className="flex gap-8 text-left max-lg:overflow-x-scroll no-scrollbar">
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
