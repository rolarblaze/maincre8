import { useState } from 'react';
import UserIcon from '@/public/svgs/UserIcon';
import BuildingIcon from '@/public/svgs/BuildingIcon';

interface Tab {
  id: string;
  icon: React.FC<{ fillColor: string }>;
  label: string;
}

const tabs: Tab[] = [
  {
    id: 'individual',
    icon: UserIcon,
    label: 'I am an individual',
  },
  {
    id: 'business',
    icon: BuildingIcon,
    label: 'I am a business',
  },
];

interface TabsProps {
  activeTab: string;
  setActiveTab: (tabId: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <main className="w-full flex items-center">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const textColor = isActive ? 'text-primary400' : 'text-grey400';
        const borderColor = isActive ? 'border-primary400' : 'border-grey400';

        return (
          <div
            key={tab.id}
            className={`w-full flex items-center gap-2 py-2 md:py-4 cursor-pointer border-b ${borderColor} transition-all duration-500`}
            onClick={() => setActiveTab(tab.id)}
          >
            <Icon fillColor={isActive ? '#1374E4' : '#98A2B3'} />
            <p className={`${textColor} text-xs md:text-sm transition-all duration-500`}>{tab.label}</p>
          </div>
        );
      })}
    </main>
  );
}
