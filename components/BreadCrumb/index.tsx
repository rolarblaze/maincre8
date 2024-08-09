import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    items: { label: string; href: string; onClick?: () => void }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className="mb-4">
            <ol className="flex space-x-2 text-grey700">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {item.onClick ? (
                            <button onClick={item.onClick} className="hover:underline">
                                {item.label}
                            </button>
                        ) : (
                            <Link href={item.href} passHref>
                                <p className="hover:underline">{item.label}</p>
                            </Link>
                        )}
                        {index < items.length - 1 && (
                            <span className="mx-2">/</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
