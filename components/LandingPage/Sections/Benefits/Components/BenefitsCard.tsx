const Card = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="bg-[#F1F7FD] flex gap-4 md:gap-8 py-4 px-4 md:px-6 rounded-2xl w-full  text-start">
    <div className="flex max-lg:items-center">{icon}</div>
    <div className="space-y-1">
      <p className="text-black font-semibold">{title}</p>
      <p className="max-sm:text-sm text-base">{description}</p>
    </div>
  </div>
);

export default Card;
