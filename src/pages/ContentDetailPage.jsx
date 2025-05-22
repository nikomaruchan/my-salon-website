// src/pages/ContentDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ContentDetailPage = () => {
    const { id } = useParams();

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-pink-500 mb-4">コンテンツ詳細ページ</h1>
            <p className="text-gray-700">コンテンツID: {id}</p>
        </div>
    );
};

export default ContentDetailPage;
