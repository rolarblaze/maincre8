import { AvatarIcon, FadeUpDiv } from "@/components";
import { Card, Reviews } from "./Components";

const CustomerReviews = () => {
  return (
    <FadeUpDiv className="z-20 w-full bg-white py-5 md:py-14 lg:py-20">
      <div className="w-full md:max-w-[1216px] text-2xl md:text-4xl lg:text-5.5xl space-y-4">
        <h2 className="md:text-center">Our Clients Speak for Us</h2>

        <div className="no-scrollbar flex gap-8 text-left max-lg:overflow-x-scroll">
          {Reviews.map((review) => (
            <Card
              key={review.name}
              // icon={<AvatarIcon src={review.src} />}
              review={review.review}
              name={review.name}
              role={review.role}
            />
          ))}
        </div>
      </div>
    </FadeUpDiv>
  );
};

export default CustomerReviews;
