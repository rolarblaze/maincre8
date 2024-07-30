const Card = ({
  step,
  title,
  description,
}: {
  step: number;
  title: string;
  description: string;
}) => {
  return (
    <div key={step} className="w-fit">
      <div className="border border-grey200 rounded-lg p-8 text-white max-w-[385px] min-h-[175px] size-full lg:min-h-[280px]">
        <p className="grid place-items-center bg-primary50 text-lg md:text-3xl font-bold md:size-[56px] size-[36px] rounded-full text-black mb-4">
          {step}
        </p>
        <h4 className="text-white mb-2 text-lg md:text-2xl leading-6">{title} </h4>
        <span className="text-base">{description}</span>
      </div>
    </div>
  );
};

export default Card;
