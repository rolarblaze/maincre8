const InfoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4C10.5523 4 11 4.44772 11 5V12C11 12.5523 10.5523 13 10 13C9.44771 13 9 12.5523 9 12V5C9 4.44772 9.44771 4 10 4Z"
        fill="#98A2B3"
      />
      <path
        d="M8.75 14.75C8.75 15.4404 9.30964 16 10 16C10.6904 16 11.25 15.4404 11.25 14.75C11.25 14.0596 10.6904 13.5 10 13.5C9.30964 13.5 8.75 14.0596 8.75 14.75Z"
        fill="#98A2B3"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z"
        fill="#98A2B3"
      />
    </svg>
  );
};
export default InfoIcon;
