const CheckCircleIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" rx="28" fill="#F9FAFB" />
      <rect x="12" y="12" width="32" height="32" rx="16" fill="#E8F1FC" />
      <path
        d="M35.7157 22.3017L26.9608 35.4311C26.752 35.7372 26.4407 35.9378 26.0968 35.9878C25.7528 36.0378 25.4051 35.9329 25.1318 35.6968L18.88 30.1731C18.3283 29.6853 18.2389 28.7955 18.6804 28.1859C19.1219 27.5762 19.9271 27.4775 20.4787 27.9654L25.692 32.5746L33.6565 20.6296C33.9177 20.1965 34.3731 19.9571 34.8419 20.0064C35.3108 20.0556 35.7172 20.3856 35.8998 20.8654C36.0824 21.3451 36.0117 21.8969 35.7157 22.3017Z"
        fill="#093160"
      />
    </svg>
  );
};
export default CheckCircleIcon;
