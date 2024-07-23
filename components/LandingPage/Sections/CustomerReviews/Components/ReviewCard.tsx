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
      {icon}
      <div>
        <p className="font-semibold text-base">{name}</p>
        <p className="text-grey600 text-base">{role}</p>
      </div>
    </div>
  </div>
);

export default Card;
