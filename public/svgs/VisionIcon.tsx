const VisionIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="57"
      height="57"
      viewBox="0 0 57 57"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="56" height="56" rx="28" fill="white" />
      <path
        d="M21.5 19H35.5C37.1569 19 38.5 20.3431 38.5 22V32C38.5 33.6569 37.1569 35 35.5 35H21.5C19.8431 35 18.5 33.6569 18.5 32V22C18.5 20.3431 19.8431 19 21.5 19Z"
        fill="#093160"
      />
      <path
        d="M18.5 37C17.9477 37 17.5 37.4477 17.5 38C17.5 38.5523 17.9477 39 18.5 39H38.5C39.0523 39 39.5 38.5523 39.5 38C39.5 37.4477 39.0523 37 38.5 37H18.5Z"
        fill="#093160"
      />
    </svg>
  );
};
export default VisionIcon;
