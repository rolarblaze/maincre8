const CartIcon: React.FC<IconProps> = ({
  className,
  fillColor = "#667185",
}) => {
  return (
    <svg
     
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.08333 0.833008C1.6231 0.833008 1.25 1.2061 1.25 1.66634C1.25 2.12658 1.6231 2.49967 2.08333 2.49967C2.69035 2.49967 3.22066 2.94074 3.32984 3.56135L3.90141 6.81025L3.90192 6.81312L4.26813 8.85974C4.49716 10.1398 4.68006 11.162 4.9113 11.974C5.14977 12.8114 5.45884 13.5004 5.98376 14.0827C6.3443 14.4827 6.76614 14.825 7.23364 15.0982C7.91088 15.494 8.65747 15.6683 9.54511 15.7517C10.4099 15.833 11.4817 15.833 12.8319 15.833H13.2424C13.8429 15.833 14.338 15.833 14.7459 15.8033C15.1708 15.7724 15.5575 15.7065 15.9327 15.5466C16.4799 15.3133 16.9591 14.9466 17.3221 14.4787C17.5727 14.1556 17.7291 13.7994 17.8574 13.4015C17.9798 13.0218 18.0915 12.5538 18.2256 11.9915L18.2425 11.9206C18.4465 11.0659 18.6131 10.3676 18.6937 9.79739C18.7767 9.21068 18.7858 8.65884 18.5969 8.12693C18.3313 7.37918 17.8086 6.74966 17.1246 6.33955C16.6428 6.05065 16.098 5.93761 15.4935 5.88468C14.9033 5.83299 14.1638 5.833 13.2512 5.83301H5.42175L4.9713 3.27257C4.72412 1.86754 3.51195 0.833008 2.08333 0.833008ZM13.2122 7.49967C14.173 7.49967 14.8393 7.50043 15.3481 7.54499C15.851 7.58903 16.1024 7.66994 16.2676 7.76897C16.628 7.98507 16.8934 8.31044 17.0264 8.68476C17.0843 8.84795 17.1108 9.08806 17.0435 9.56392C16.9751 10.0474 16.8276 10.6693 16.6118 11.574C16.4684 12.1749 16.3713 12.5795 16.2711 12.8901C16.1746 13.1895 16.0921 13.3451 16.0052 13.4571C15.8193 13.6968 15.57 13.8894 15.2791 14.0134C15.139 14.0731 14.955 14.1171 14.6249 14.1411C14.2847 14.1658 13.8504 14.1663 13.2122 14.1663H12.874C11.4724 14.1663 10.4788 14.1655 9.70108 14.0924C8.93732 14.0206 8.45978 13.8844 8.0746 13.6593C7.75362 13.4717 7.46605 13.2378 7.22168 12.9668C6.93152 12.6449 6.71522 12.2233 6.51424 11.5175C6.30866 10.7956 6.13956 9.85618 5.90092 8.52249L5.7179 7.49967H13.2122Z"
        fill={fillColor}
      />
      <path
        d="M8.75 17.2913C8.75 17.8666 8.28363 18.333 7.70833 18.333C7.13304 18.333 6.66667 17.8666 6.66667 17.2913C6.66667 16.716 7.13304 16.2497 7.70833 16.2497C8.28363 16.2497 8.75 16.716 8.75 17.2913Z"
        fill={fillColor}
      />
      <path
        d="M15.2083 18.333C15.7836 18.333 16.25 17.8666 16.25 17.2913C16.25 16.716 15.7836 16.2497 15.2083 16.2497C14.633 16.2497 14.1667 16.716 14.1667 17.2913C14.1667 17.8666 14.633 18.333 15.2083 18.333Z"
        fill={fillColor}
      />
    </svg>
  );
};
export default CartIcon;
