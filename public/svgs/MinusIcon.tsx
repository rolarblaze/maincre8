const MinusIcon: React.FC<IconProps> = ({
  className,
  fillColor = "#98A2B3",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      className={className}
      fill="none"
    >
      <path
        d="M3.83333 9.16675C3.3731 9.16675 3 9.53984 3 10.0001C3 10.4603 3.3731 10.8334 3.83333 10.8334H17.1667C17.6269 10.8334 18 10.4603 18 10.0001C18 9.53984 17.6269 9.16675 17.1667 9.16675H3.83333Z"
        fill={fillColor}
      />
    </svg>
  );
};
export default MinusIcon;
