const TabButton = ({
  tab,
  activeTab,
  onClick,
  Icon,
  label,
}: {
  tab: "digital" | "creative";
  activeTab: "digital" | "creative";
  onClick: (tab: "digital" | "creative") => void;
  Icon: React.ComponentType<{ fillColor: string }>;
  label: string;
}) => (
  <button
    onClick={() => onClick(tab)}
    className={`px-4 py-2 flex max-sm:px-2 items-center gap-2 text-sm border border-gray-600 rounded-lg ${
      activeTab === tab
        ? "bg-white text-[#093160]"
        : "bg-transparent text-white"
    }`}
  >
    <Icon fillColor={activeTab === tab ? "#093160" : "#ffffff"} /> {label}
  </button>
);

export default TabButton;
