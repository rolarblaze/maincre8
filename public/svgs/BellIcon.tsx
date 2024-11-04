const BellIcon: React.FC<IconProps> = ({
  className,
  fillColor = "#667185",
}) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.834 2.50033C10.834 2.04009 10.4609 1.66699 10.0006 1.66699C9.54038 1.66699 9.16728 2.04009 9.16728 2.50033V2.97605C6.34052 3.38026 4.16729 5.81052 4.16729 8.74941L4.16728 12.0831C4.16728 12.0831 4.16729 12.0829 4.16728 12.0831C4.1672 12.0847 4.16664 12.0958 4.16302 12.1177C4.15869 12.144 4.15098 12.1797 4.13827 12.2256C4.1125 12.3186 4.07148 12.4345 4.01418 12.5716C3.89929 12.8463 3.73732 13.1625 3.55819 13.4816C3.2214 14.0816 3.05164 14.7965 3.17909 15.4764C3.31349 16.1933 3.77499 16.8186 4.56317 17.1187C5.26726 17.3868 6.20448 17.6319 7.44217 17.7779C7.47162 17.8034 7.50644 17.8326 7.54645 17.8646C7.67169 17.9648 7.85062 18.0946 8.07675 18.2239C8.52556 18.4803 9.18914 18.7503 10.0006 18.7503C10.8121 18.7503 11.4757 18.4803 11.9245 18.2239C12.1506 18.0946 12.3295 17.9648 12.4548 17.8646C12.4948 17.8326 12.5296 17.8034 12.5591 17.7779C13.7968 17.6319 14.734 17.3868 15.4381 17.1187C16.2263 16.8186 16.6877 16.1933 16.8221 15.4764C16.9496 14.7965 16.7798 14.0816 16.443 13.4816C16.2639 13.1625 16.1019 12.8463 15.9871 12.5716C15.9298 12.4345 15.8887 12.3186 15.863 12.2256C15.8503 12.1797 15.8426 12.144 15.8382 12.1177C15.8346 12.0958 15.834 12.0849 15.834 12.0833C15.834 12.0832 15.834 12.0833 15.834 12.0833L15.834 12.0762V8.74981C15.834 5.81099 13.6608 3.38033 10.834 2.97606V2.50033ZM5.83395 8.74941C5.83395 6.44842 7.69923 4.58366 10.0006 4.58366C12.3019 4.58366 14.1673 6.44874 14.1673 8.74981V12.0837C14.1673 12.4694 14.3118 12.8855 14.4494 13.2146C14.5989 13.5721 14.7948 13.9503 14.9897 14.2975C15.1792 14.635 15.2244 14.954 15.184 15.1693C15.1506 15.3475 15.0615 15.4786 14.845 15.5611C13.9493 15.9022 12.4372 16.2503 10.0006 16.2503C7.56401 16.2503 6.05196 15.9022 5.15624 15.5611C4.93969 15.4786 4.85063 15.3475 4.81722 15.1693C4.77686 14.954 4.82205 14.635 5.01153 14.2975C5.2064 13.9503 5.40231 13.5721 5.5518 13.2146C5.68941 12.8855 5.83395 12.4694 5.83395 12.0837V8.74941Z"
        fill={fillColor}
      />
    </svg>
  );
};
export default BellIcon;
