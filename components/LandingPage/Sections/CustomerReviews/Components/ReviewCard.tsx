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
  <div className="border h-fit rounded-lg p-6 flex flex-col gap-6 w-full min-w-[18.75rem] max-lg:min-w-80">
    <p className="font-semibold max-md:text-sm max-w-[18rem]">{review}</p>
    <div className="flex justify-start items-center gap-3">
      <div>{icon}</div>
      <div>
        <p className="font-semibold text-base">{name}</p>
        <p className="text-grey600 text-sm md:text-base">{role}</p>
      </div>
    </div>
  </div>
);

export default Card;
