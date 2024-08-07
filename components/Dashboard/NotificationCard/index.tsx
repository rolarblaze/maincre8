import React from 'react';
import VideoIcon from '@/public/svgs/VideoIcon';

interface NotificationCardProps {
    date: string;
    title: string;
    description: string;
    isRead: boolean;
    showJoinButton?: boolean;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
    date,
    title,
    description,
    isRead,
    showJoinButton = false,
}) => {
    const iconColor = isRead ? '#98A2B3' : '#1574E5';
    const borderColor = isRead ? '#98A2B3' : '#1574E5';

    return (
        <section className='max-w-[568px] w-full space-y-4'>
            <h4 className="text-grey500 text-base font-medium">{date}</h4>

            <section className="flex items-start gap-0">
                <div className={`h-full w-1.5 rounded-l ${borderColor}`}></div>
                <div className='w-full flex items-start gap-4 p-5 cursor-pointer border border-grey200 rounded '>
                    <div>
                        <VideoIcon color={iconColor} />
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='space-y-1'>
                            <h4 className="text-base font-semibold text-grey900">{title}</h4>
                            <p className="text-grey600 text-sm font-normal">{description}</p>

                        </div>

                        {showJoinButton && (
                            <button className="max-w-32 w-full bg-white border border-grey300 text-grey700 text-sm font-semibold py-2 px-4 rounded">
                                Join meeting
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default NotificationCard;
