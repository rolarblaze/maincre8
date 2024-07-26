const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-[#F1F7FD] flex gap-8 py-4 px-6 rounded-2xl w-full  text-start">
    <div className="flex max-lg:items-center">{icon}</div>
    <div>
      <p className="text-black font-semibold">{title}</p>
      <p className="text-base">{description}</p>
    </div>
  </div>
);

export default Card;
