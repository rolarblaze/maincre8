import React from "react";

const ModalCheckIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M27.3508 17.4749C28.1654 16.7289 28.2209 15.4638 27.4749 14.6492C26.7289 13.8346 25.4638 13.7791 24.6492 14.5251L17.265 21.288L15.3508 19.5348C14.5362 18.7887 13.2711 18.8443 12.5251 19.6589C11.7791 20.4734 11.8346 21.7385 12.6492 22.4846L15.9142 25.4749C16.6787 26.175 17.8514 26.175 18.6158 25.4749L27.3508 17.4749Z"
          fill="#099137"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0ZM4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20Z"
          fill="#099137"
        />
      </svg>
    </div>
  );
};

export default ModalCheckIcon;
