import React, { useState } from 'react';
import Breadcrumb from '@/components/BreadCrumb';

interface ArticleDetailsProps {
    title: string;
    description: string;
    details: { question: string; answer: string }[];
    onBack: () => void;  // Function to go back to the articles list
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ title, description, details, onBack }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="article-details-container px-5 py-10">
            {/* Breadcrumb */}
            <Breadcrumb
                items={[
                    { label: 'All articles', href: '#', onClick: onBack },  // Use onClick to trigger the back function
                    { label: title, href: '#' },
                ]}
            />

            <h1 className="text-3xl font-extrabold mb-4">{title}</h1>
            <p className="text-base text-grey700 mb-8">{description}</p>

            {details.map((detail, index) => (
                <div
                    key={index}
                    className={`border border-grey300 rounded-lg transition-all duration-300 ${activeIndex === index ? 'bg-primary900 text-white' : ''
                        }`}
                >
                    <div
                        className="flex items-center justify-between py-3 px-4 cursor-pointer"
                        onClick={() => toggleAnswer(index)}
                    >
                        <p
                            className={`font-medium ${activeIndex === index ? 'text-white' : 'text-grey700'
                                }`}
                        >
                            {detail.question}
                        </p>
                        <span
                            className={`text-2xl ${activeIndex === index ? 'text-white' : 'text-grey700'
                                }`}
                        >
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </div>
                    {activeIndex === index && (
                        <div className="px-4 pb-8 py-5 border-t border-white">
                            <p className="text-sm">{detail.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ArticleDetails;
