import React from 'react';
import './Footer.css'; // 必要に応じて

const Footer = () => {
    return (
        <footer className="bg-cyan-400 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">mamayell（ママエール）</h3>
                        <p>〒123-4567</p>
                        <p>東京都〇〇区〇〇1-2-3</p>
                        <p>TEL: 03-1234-5678</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">営業時間</h3>
                        <p>平日: 10:00 - 20:00</p>
                        <p>土日祝: 10:00 - 18:00</p>
                        <p>定休日: 毎週月曜日</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">メニュー</h3>
                        <ul>
                            <li>ヘアカット</li>
                            <li>カラー</li>
                            <li>パーマ</li>
                            <li>トリートメント</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-700 text-center">
                    <p>&copy; {new Date().getFullYear()} サロン名 All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;