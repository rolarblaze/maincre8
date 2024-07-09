import React from 'react';
import DropdownWrapper from '@/components/Modals/DropdownWrapper';
import { solutionsData } from './solutionsData';

interface SolutionsMenuProps {
    isVisible: boolean;
    onClose: () => void;
  }

  const SolutionsMenu: React.FC<SolutionsMenuProps> = ({ isVisible, onClose }) => {
    return (
        <DropdownWrapper top="70%" left="43%" isVisible={isVisible} onClose={onClose}>
            <div className="max-w-[340px] w-full flex flex-col gap-7">
                {solutionsData.map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                        <div key={index} className="max-w-[276px] w-full flex items-start gap-3">
                            <div>
                                <Icon />
                            </div>
                            <div>
                                <p className="font-medium text-grey900">{solution.title}</p>
                                <p className="text-sm">
                                    {solution.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </DropdownWrapper>
    );
};

export default SolutionsMenu;


