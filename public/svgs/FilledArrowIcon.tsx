const FilledArrowIcon: React.FC<IconProps> = ({
  className,
  fillColor = "#B6D4F7",
}) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.83301 1.83398C2.72844 1.83398 1.83301 2.72941 1.83301 3.83398V13.1673C1.83301 14.2719 2.72844 15.1673 3.83301 15.1673H13.1663C14.2709 15.1673 15.1663 14.2719 15.1663 13.1673V3.83398C15.1663 2.72941 14.2709 1.83398 13.1663 1.83398H3.83301ZM13.4091 4.25801C13.4091 3.88982 13.1106 3.59135 12.7424 3.59135H8.97115C8.60296 3.59135 8.30449 3.88982 8.30449 4.25801C8.30449 4.6262 8.60296 4.92468 8.97115 4.92468H11.1329L3.7857 12.2719C3.52535 12.5322 3.52535 12.9543 3.7857 13.2147C4.04605 13.475 4.46816 13.475 4.72851 13.2147L12.0757 5.86749V8.02925C12.0757 8.39744 12.3742 8.69592 12.7424 8.69592C13.1106 8.69592 13.4091 8.39744 13.4091 8.02925V4.25801Z"
        fill={fillColor}
      />
    </svg>
  );
};
export default FilledArrowIcon;