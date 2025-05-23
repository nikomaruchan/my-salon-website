// src/components/features/salon/ContentCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ContentCard = ({ content }) => {
    const { id, title, description } = content;

    return (
        <div className="bg-white border p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-pink-500 mb-2">{title}</h3>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{description}</p>
            <Link
                to={`/content/${id}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
            >
                詳しく見る→
            </Link>
        </div>
    );
};

export default ContentCard;
