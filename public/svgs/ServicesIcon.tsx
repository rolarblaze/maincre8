import React from "react";

interface ServiceIconProps {
  fillColor: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ fillColor }) => {
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
        d="M10.0003 1.66504L4.79459 1.9904C3.55482 2.06788 2.46098 2.82832 1.95648 3.96344L1.50155 4.98702C1.01086 6.09109 1.156 7.37426 1.88092 8.34082L2.09617 8.62781L2.39269 15.1514C2.47361 16.9316 3.94049 18.3333 5.72259 18.3333H14.278C16.0601 18.3333 17.527 16.9316 17.6079 15.1514L17.899 8.74712C18.6918 8.00601 18.984 6.8499 18.6034 5.80335L18.0096 4.17052C17.5566 2.92454 16.4081 2.06553 15.0849 1.98283L10.0003 1.66504ZM4.05764 15.0757L3.80529 9.52391C4.51911 9.60799 5.2559 9.44226 5.87923 9.02671L5.96578 8.96901C6.4364 8.65526 7.03906 8.61774 7.54497 8.87069L8.5096 9.353C9.44802 9.82222 10.5526 9.82222 11.491 9.353L12.4557 8.87069C12.9616 8.61774 13.5642 8.65526 14.0348 8.96901L14.1214 9.02671C14.7447 9.44226 15.4815 9.60799 16.1953 9.52391L15.943 15.0757C15.9025 15.9658 15.1691 16.6667 14.278 16.6667H12.5726L12.7411 14.6453C12.8747 13.0419 11.6093 11.6667 10.0003 11.6667C8.39129 11.6667 7.12591 13.0419 7.25953 14.6453L7.42798 16.6667H5.72259C4.83154 16.6667 4.0981 15.9658 4.05764 15.0757ZM15.0459 7.63996C15.5229 7.95797 16.1444 7.95797 16.6214 7.63996C17.0354 7.36392 17.2071 6.84059 17.0371 6.37292L16.4433 4.7401C16.2168 4.11711 15.6426 3.6876 14.981 3.64625L10.0003 3.33496L4.89855 3.65382C4.27867 3.69256 3.73175 4.07278 3.4795 4.64034L3.02457 5.66392C2.77922 6.21596 2.8518 6.85754 3.21426 7.34082L3.48782 7.70557C3.9478 7.95622 4.51314 7.93434 4.95473 7.63996L5.04128 7.58225C6.00955 6.93674 7.24946 6.85955 8.29032 7.37998L9.25495 7.86229C9.72417 8.0969 10.2765 8.0969 10.7457 7.86229L11.7103 7.37998C12.7512 6.85955 13.9911 6.93674 14.9593 7.58225L15.0459 7.63996ZM11.0802 14.5069L10.9002 16.6667H9.10042L8.92044 14.5069C8.86779 13.8752 9.36635 13.3333 10.0003 13.3333C10.6343 13.3333 11.1328 13.8752 11.0802 14.5069Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ServiceIcon;