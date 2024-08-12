const NoCheckFill = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" rx="10" fill="#D0D5DD" />
      <path
        d="M8.09766 12.903L10.5007 10.5L12.9037 12.903M12.9037 8.09692L10.5002 10.5L8.09766 8.09692"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default NoCheckFill;
