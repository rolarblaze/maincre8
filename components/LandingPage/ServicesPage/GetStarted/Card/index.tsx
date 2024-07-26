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
      <div className="border border-grey200 rounded-lg p-8 text-white max-w-[385px] min-h-[280px]">
        <p className="grid place-items-center bg-primary50 text-3xl font-bold h-[56px] w-[56px] rounded-full text-black mb-4">
          {step}
        </p>
        <h4 className="text-white mb-2 ">{title} </h4>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Card;
