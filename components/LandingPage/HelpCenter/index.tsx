"use client";
import React, { useState } from 'react';
import HelpArticle from './HelpArticle';
import ArticleDetails from './ArticleDetails';
import { helpArticles, HelpArticle as HelpArticleType } from './helpArticleData';

export default function HelpCenter() {
    const [selectedArticle, setSelectedArticle] = useState<HelpArticleType | null>(null);

    const handleArticleClick = (article: HelpArticleType) => {
        setSelectedArticle(article);
    };

    const handleBackToArticles = () => {
        setSelectedArticle(null);
    };

    return (
        <div className='max-w-[1240px] w-full mx-auto py-10'>
            {selectedArticle ? (
                <ArticleDetails
                    icon={selectedArticle.icon}
                    title={selectedArticle.title}
                    description={selectedArticle.description}
                    details={selectedArticle.details}
                    onBack={handleBackToArticles}
                />
            ) : (
                <HelpArticle onArticleClick={handleArticleClick} />
            )}
        </div>
    );
}
