import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // 必要に応じて

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-800">
                    <Link to="/">mamayell（ママエール）</Link>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-gray-600 hover:text-pink-500 transition">ホーム</Link></li>
                        <li><Link to="/services" className="text-gray-600 hover:text-pink-500 transition">サービス</Link></li>
                        <li><Link to="/gallery" className="text-gray-600 hover:text-pink-500 transition">ギャラリー</Link></li>
                        <li><Link to="/contact" className="text-gray-600 hover:text-pink-500 transition">お問い合わせ</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;