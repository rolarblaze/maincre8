import React from 'react';

interface BuildingIconProps {
  fillColor: string;
}

const BuildingIcon: React.FC<BuildingIconProps> = ({ fillColor }) => {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.91683 6.33333C7.91683 6.79357 7.54373 7.16667 7.0835 7.16667H6.25016C5.78993 7.16667 5.41683 6.79357 5.41683 6.33333C5.41683 5.8731 5.78993 5.5 6.25016 5.5H7.0835C7.54373 5.5 7.91683 5.8731 7.91683 6.33333Z" fill={fillColor} />
      <path d="M10.4168 9.66667C10.8771 9.66667 11.2502 9.29357 11.2502 8.83333C11.2502 8.3731 10.8771 8 10.4168 8H9.5835C9.12326 8 8.75016 8.3731 8.75016 8.83333C8.75016 9.29357 9.12326 9.66667 9.5835 9.66667H10.4168Z" fill={fillColor} />
      <path d="M7.91683 11.3333C7.91683 11.7936 7.54373 12.1667 7.0835 12.1667H6.25016C5.78993 12.1667 5.41683 11.7936 5.41683 11.3333C5.41683 10.8731 5.78993 10.5 6.25016 10.5H7.0835C7.54373 10.5 7.91683 10.8731 7.91683 11.3333Z" fill={fillColor} />
      <path d="M10.4168 7.16667C10.8771 7.16667 11.2502 6.79357 11.2502 6.33333C11.2502 5.8731 10.8771 5.5 10.4168 5.5H9.5835C9.12326 5.5 8.75016 5.8731 8.75016 6.33333C8.75016 6.79357 9.12326 7.16667 9.5835 7.16667H10.4168Z" fill={fillColor} />
      <path d="M7.91683 8.83333C7.91683 9.29357 7.54373 9.66667 7.0835 9.66667H6.25016C5.78993 9.66667 5.41683 9.29357 5.41683 8.83333C5.41683 8.3731 5.78993 8 6.25016 8H7.0835C7.54373 8 7.91683 8.3731 7.91683 8.83333Z" fill={fillColor} />
      <path d="M10.4168 12.1667C10.8771 12.1667 11.2502 11.7936 11.2502 11.3333C11.2502 10.8731 10.8771 10.5 10.4168 10.5H9.5835C9.12326 10.5 8.75016 10.8731 8.75016 11.3333C8.75016 11.7936 9.12326 12.1667 9.5835 12.1667H10.4168Z" fill={fillColor} />
      <path d="M7.91683 13.8333C7.91683 14.2936 7.54373 14.6667 7.0835 14.6667H6.25016C5.78993 14.6667 5.41683 14.2936 5.41683 13.8333C5.41683 13.3731 5.78993 13 6.25016 13H7.0835C7.54373 13 7.91683 13.3731 7.91683 13.8333Z" fill={fillColor} />
      <path d="M10.4168 14.6667C10.8771 14.6667 11.2502 14.2936 11.2502 13.8333C11.2502 13.3731 10.8771 13 10.4168 13H9.5835C9.12326 13 8.75016 13.3731 8.75016 13.8333C8.75016 14.2936 9.12326 14.6667 9.5835 14.6667H10.4168Z" fill={fillColor} />
      <path fillRule="evenodd" clipRule="evenodd" d="M3.3335 4.66667C3.3335 3.74619 4.07969 3 5.00016 3H11.6668C12.5873 3 13.3335 3.74619 13.3335 4.66667V8H15.8335C16.754 8 17.5002 8.74619 17.5002 9.66667V16.3333H18.3335C18.7937 16.3333 19.1668 16.7064 19.1668 17.1667C19.1668 17.6269 18.7937 18 18.3335 18H1.66683C1.20659 18 0.833496 17.6269 0.833496 17.1667C0.833496 16.7064 1.20659 16.3333 1.66683 16.3333H3.3335V4.66667ZM5.00016 16.3333H11.6668V4.66667H5.00016V16.3333ZM15.8335 13V12.1667H15.4168C14.9566 12.1667 14.5835 11.7936 14.5835 11.3333C14.5835 10.8731 14.9566 10.5 15.4168 10.5H15.8335V9.66667H13.3335V16.3333H15.8335V14.6667H15.4168C14.9566 14.6667 14.5835 14.2936 14.5835 13.8333C14.5835 13.3731 14.9566 13 15.4168 13H15.8335Z" fill={fillColor} />
    </svg>
  );
};

export default BuildingIcon;
