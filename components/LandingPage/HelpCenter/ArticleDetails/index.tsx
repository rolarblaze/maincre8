import React, { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/BreadCrumb';

interface ArticleDetailsProps {
    icon: string;
    title: string;
    description: string;
    details: { question: string; answer: string }[];
    onBack: () => void;  // Function to go back to the articles list
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ icon, title, description, details, onBack }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className=" px-4 py-5">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: 'All articles', href: '#', onClick: onBack },  // Use onClick to trigger the back function
                    { label: title, href: '#' },
                ]}
            />

            <div className='flex flex-col gap-6 mb-6'>
                <div className='flex flex-col gap-3'>
                    <div className="w-10 h-10 md:w-14 md:h-14">
                        <Image src={icon} alt={title} width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-2xl font-bold text-grey900 md:text-3xl">{title}</h2>
                </div>
                <p className="text-sm text-grey700 font-normal md:text-base">{description}</p>
            </div>

            <div className='w-full space-y-4 md:space-y-8'>
                {details.map((detail, index) => (
                    <div
                        key={index}
                        className={`border border-grey300 rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-primary900 text-white' : ''
                            }`}
                    >
                        <div
                            className="flex items-center justify-between py-3 px-4 md:p-4 cursor-pointer"
                            onClick={() => toggleAnswer(index)}
                        >
                            <p
                                className={`text-sm font-medium md:text-xl ${activeIndex === index ? 'text-white' : 'text-grey800'
                                    }`}
                            >
                                {detail.question}
                            </p>
                            <span
                                className={`text-sm font-medium md:text-xl ${activeIndex === index ? 'text-white' : 'text-grey800'
                                    }`}
                            >
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="px-4 pb-8 py-5 border-t border-white">
                                <p className="text-sm md:text-base">{detail.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArticleDetails;
