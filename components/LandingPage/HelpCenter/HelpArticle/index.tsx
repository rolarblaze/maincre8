import React from 'react';
import Image from 'next/image';
import { Edit } from '@/public/icons';
import { helpArticles, HelpArticle as HelpArticleType } from '../helpArticleData';

interface HelpArticleProps {
    onArticleClick: (article: HelpArticleType) => void;
}

const HelpArticle: React.FC<HelpArticleProps> = ({ onArticleClick }) => {
    return (
        <div className="max-w-[996px] w-full mx-auto flex flex-col gap-4 px-4 py-10 md:py-20">
            {helpArticles.map((article) => (
                <div
                    key={article.id}
                    onClick={() => onArticleClick(article)}
                    className="flex flex-col items-start gap-4 p-4 border border-grey200 rounded-lg cursor-pointer md:flex-row md:items-center md:gap-8"
                >
                    <div className="w-8 h-8 md:w-14 md:h-14">
                        <Image src={article.icon} alt={article.title} width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div className='flex flex-col gap-1 md:gap-2'>
                        <h4 className="text-base font-semibold text-grey900 md:text-2xl md:text-grey800">{article.title}</h4>
                        <div className='flex items-start gap-2'>
                            <Edit />
                            <p className="text-sm text-grey500 font-semibold md:text-base">{article.steps}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HelpArticle;
