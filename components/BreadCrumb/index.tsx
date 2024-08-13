import React from 'react';
import Link from 'next/link';
import Arrow from "@/public/icons/arrow-right.svg";

interface BreadcrumbProps {
    items: { label: string; href: string; onClick?: () => void }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className="mb-5">
            <ol className="flex space-x-2 text-grey700 text-left text-xs">
                {items.map((item, index) => {
                    const isLastItem = index === items.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            {item.onClick ? (
                                <button
                                    onClick={item.onClick}
                                    className={`text-grey500 font-medium whitespace-nowrap md:text-sm ${isLastItem ? 'truncate max-w-xs lg:max-w-full lg:whitespace-normal' : ''}`}
                                >
                                    {item.label}
                                </button>
                            ) : (
                                <Link href={item.href} passHref>
                                    <p
                                        className={`text-grey500 font-medium whitespace-nowrap md:text-sm ${isLastItem ? 'truncate max-w-xs lg:max-w-full lg:whitespace-normal' : ''}`}
                                    >
                                        {item.label}
                                    </p>
                                </Link>
                            )}
                            {index < items.length - 1 && (
                                <span className="mx-1"><Arrow /></span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
