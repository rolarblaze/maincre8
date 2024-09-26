const PlayIcon: React.FC<IconProps> = ({ className, fillColor = "black" }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / play">
        <path
          id="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.67561 3.32726C5.48963 2.23479 2.9165 3.8233 2.9165 6.26766V14.6866C2.9165 17.1309 5.48964 18.7194 7.67561 17.627L16.0985 13.4175C18.5225 12.2061 18.5225 8.74813 16.0985 7.5367L7.67561 3.32726ZM4.58317 6.26766C4.58317 5.06343 5.85155 4.27888 6.93053 4.81811L15.3534 9.02756C16.5486 9.62489 16.5486 11.3293 15.3534 11.9267L6.93054 16.1361C5.85155 16.6753 4.58317 15.8908 4.58317 14.6866V6.26766Z"
          fill={fillColor}
        />
      </g>
    </svg>
  );
};
export default PlayIcon;
