import React from "react";

interface NotificationIconProps {
  fillColor: string;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({ fillColor }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8336 2.50033C10.8336 2.04009 10.4605 1.66699 10.0003 1.66699C9.54001 1.66699 9.16692 2.04009 9.16692 2.50033V2.97605C6.34015 3.38026 4.16692 5.81052 4.16692 8.74941L4.16692 12.0831C4.16692 12.0831 4.16693 12.0829 4.16692 12.0831C4.16684 12.0847 4.16627 12.0958 4.16266 12.1177C4.15832 12.144 4.15062 12.1797 4.1379 12.2256C4.11213 12.3186 4.07111 12.4345 4.01381 12.5716C3.89892 12.8463 3.73696 13.1625 3.55783 13.4816C3.22104 14.0816 3.05128 14.7965 3.17872 15.4764C3.31313 16.1933 3.77462 16.8186 4.5628 17.1187C5.26689 17.3868 6.20411 17.6319 7.4418 17.7779C7.47125 17.8034 7.50608 17.8326 7.54608 17.8646C7.67132 17.9648 7.85025 18.0946 8.07639 18.2239C8.52519 18.4803 9.18877 18.7503 10.0003 18.7503C10.8117 18.7503 11.4753 18.4803 11.9241 18.2239C12.1503 18.0946 12.3292 17.9648 12.4544 17.8646C12.4944 17.8326 12.5293 17.8034 12.5587 17.7779C13.7964 17.6319 14.7336 17.3868 15.4377 17.1187C16.2259 16.8186 16.6874 16.1933 16.8218 15.4764C16.9492 14.7965 16.7795 14.0816 16.4427 13.4816C16.2635 13.1625 16.1016 12.8463 15.9867 12.5716C15.9294 12.4345 15.8884 12.3186 15.8626 12.2256C15.8499 12.1797 15.8422 12.144 15.8378 12.1177C15.8342 12.0958 15.8337 12.0849 15.8336 12.0833C15.8336 12.0832 15.8336 12.0833 15.8336 12.0833L15.8336 12.0762V8.74981C15.8336 5.81099 13.6604 3.38033 10.8336 2.97606V2.50033ZM5.83359 8.74941C5.83359 6.44842 7.69887 4.58366 10.0003 4.58366C12.3015 4.58366 14.1669 6.44874 14.1669 8.74981V12.0837C14.1669 12.4694 14.3115 12.8855 14.4491 13.2146C14.5986 13.5721 14.7945 13.9503 14.9893 14.2975C15.1788 14.635 15.224 14.954 15.1836 15.1693C15.1502 15.3475 15.0612 15.4786 14.8446 15.5611C13.9489 15.9022 12.4369 16.2503 10.0003 16.2503C7.56365 16.2503 6.05159 15.9022 5.15587 15.5611C4.93932 15.4786 4.85026 15.3475 4.81686 15.1693C4.7765 14.954 4.82168 14.635 5.01116 14.2975C5.20603 13.9503 5.40194 13.5721 5.55143 13.2146C5.68904 12.8855 5.83359 12.4694 5.83359 12.0837V8.74941Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default NotificationIcon;