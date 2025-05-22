// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ページのインポート
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ContentPage from './pages/ContentPage';
import ContentDetailPage from './pages/ContentDetailPage';

// レイアウトコンポーネントのインポート
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/content/:id" element={<ContentDetailPage />} />
            {/* 他のルートもここに追加 */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;