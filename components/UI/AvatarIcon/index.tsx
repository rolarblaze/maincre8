import Image, { StaticImageData } from "next/image";

const AvatarIcon = ({ src }: { src: StaticImageData }) => {
  return (
    <div className="size-10">
      <Image src={src} alt="avatar image" className="rounded-md" />
    </div>
  );
};
export default AvatarIcon;
