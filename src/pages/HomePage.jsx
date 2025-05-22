// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import ContentCard from '../components/features/salon/ContentCard';

function HomePage() {
    const [featuredContent, setFeaturedContent] = useState([]);
    
    useEffect(() => {
        // データ取得のロジックを実装
        // 将来的にはAPI呼び出しを行う
        setFeaturedContent([
        { id: 1, title: '最新コンテンツ1', description: '説明...' },
        { id: 2, title: '最新コンテンツ2', description: '説明...' },
        ]);
    }, []);

    return (
        <div className="home-page">
        <section className="hero">
            <h1 className="bg-h1-banner bg-cover bg-center text-black text-4xl p-6">mamayell</h1>
            <p>（ママエール）</p>
            <h2 className="text-2xl font-semibold mb-2">「大丈夫」を、専門家から。<br />
            〜ひとりじゃない育児に、医療と安心をそえて〜</h2>
        </section>
        
        <section className="featured-content">
            <p className="text-base">NICU・救命救急・訪問看護の経験をもとに、医療的ケア児を育てるママたちのための「もうひとつの居場所」をつくりました<br />
            医療・福祉・行政の「わからない」「聞きづらい」を気軽に相談でき、専門的な安心を届けるオンラインコミュニティです。<br />
            あなたと赤ちゃんのそばに、そっと寄り添う「手」と「声」が、ここにあります。
            </p>
            <div className="content-grid">
            {featuredContent.map(content => (
                <ContentCard 
                key={content.id} 
                content={content} 
                />
            ))}
            </div>
        </section>
        </div>
  );
}

export default HomePage;