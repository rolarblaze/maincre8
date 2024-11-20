import React from "react";

interface ModalHeaderProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

function ModalHeader({ icon, title, subtitle }: ModalHeaderProps) {
  return (
    <header className="space-y-5 border-b border-grey200 pb-6">
      {icon}
      <div className="space-y-2">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default ModalHeader;
