// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import ContentCard from '../components/features/salon/ContentCard';

function HomePage() {
    const [featuredContent, setFeaturedContent] = useState([]);
    
    useEffect(() => {
        // データ取得のロジックを実装
        // 将来的にはAPI呼び出しを行う
        setFeaturedContent([
        { id: 1, title: '医療的ケア児を育てるママのための「もうひとつの居場所」\n'+
            '(オンラインサロン)', 
        description: 
        'NICU・救命救急・訪問看護の経験を持つ看護師が運営する、医療・福祉・行政の「わからない」「聞きづらい」を気軽に相談できるオンラインコミュニティです。\n' +
        '専門的な安心をお届けし、お母さんと赤ちゃんのそばに、そっと寄り添う「手」と「声」をご提供します。'
        },
        { id: 2, title: '赤ちゃんとママの絆を深めるオンラインベビーマッサージ', 
        description:
        'ご自宅で安心して参加できるオンライン教室です。\n'+
        '看護師の専門知識に基づいた安全で効果的なマッサージ方法を、全4～5回のコースでじっくり学べます。\n'+
        '赤ちゃんの成長を促し、親子の特別な時間を育みましょう。'
        },
        ]);
    }, []);

    return (
        <div className="home-page">
            <section className="hero relative w-full h-[360px]">
                {/* 背景画像（横幅いっぱい・縦横比維持） */}
                <div className="absolute inset-0 w-full h-full bg-h1-banner bg-cover bg-center z-0"></div>

                {/* テキスト（左上に固定） */}
                <div className="absolute top-2 left-3 z-6 text-black">
                    <h1 className="text-6xl font-bold">mamayell</h1>
                    <h2 className="text-s font-semibold mb-2">
                    「大丈夫」を、専門家から。<br />
                    〜ひとりじゃない育児に、医療と安心をそえて〜
                    </h2>
                </div>
            </section>


            {/* 👇 背景画像の外、つまり「下」に表示される紹介文 */}
            <div className="mt-6 px-4">
                <p className="text-base text-center leading-relaxed">
                    NICU・救命救急・訪問看護の経験をもとに、医療的ケア児を育てるママたちのための「もうひとつの居場所」をつくりました。<br />
                    医療・福祉・行政の「わからない」「聞きづらい」を気軽に相談でき、専門的な安心を届けるオンラインコミュニティです。<br />
                    あなたと赤ちゃんのそばに、そっと寄り添う「手」と「声」が、ここにあります。
                </p>
            </div>

            <div className="content-grid">
                {featuredContent.map(content => (
                    <ContentCard 
                    key={content.id} 
                    content={content} 
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;