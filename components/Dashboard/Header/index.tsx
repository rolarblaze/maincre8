import React from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="w-full pt-10 px-6 flex flex-col items-start bg-grey10">
      <h3 className="text-2xl font-semibold text-grey900">{title}</h3>
      {subtitle && (
        <p className="text-base font-medium text-grey500">{subtitle}</p>
      )}
    </header>
  );
};

export default Header;
