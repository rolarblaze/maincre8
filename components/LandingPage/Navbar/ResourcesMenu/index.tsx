import React from 'react';
import DropdownWrapper from '@/components/Modals/DropdownWrapper';
import { leftResourcesData, rightResourcesData } from './resourcesData';

interface ResourcesMenuProps {
    isVisible: boolean;
    onClose: () => void;

}

const ResourcesMenu: React.FC<ResourcesMenuProps> = ({ isVisible, onClose }) => {
    return (
        <DropdownWrapper top="70%" left="45%" isVisible={isVisible} onClose={onClose}>
            <div className="max-w-[745px] w-full flex item-start gap-16">
                <div className="max-w-[276px] w-full flex flex-col gap-7">
                    {leftResourcesData.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                            <div key={index} className="flex items-start gap-3">
                                <div>

                                    <Icon />
                                </div>
                                <div>
                                    <p className="font-medium text-grey900">{resource.title}</p>
                                    <p className="text-sm ">{resource.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="max-w-[276px] w-full flex flex-col gap-7">
                    {rightResourcesData.map((resource, index) => {
                        const Icon = resource.icon;
                        return (
                            <div key={index} className="flex items-start gap-3">
                                <div>

                                    <Icon />
                                </div>
                                <div>
                                    <p className="font-medium text-grey900">{resource.title}</p>
                                    <p className="text-sm ">{resource.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </DropdownWrapper>
    );
};

export default ResourcesMenu;
