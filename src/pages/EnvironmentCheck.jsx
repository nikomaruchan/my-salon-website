import React from 'react';
import useAuthStore from '../stores/useAuthStore';
import Button from '../components/common/Button';

const EnvironmentCheck = () => {
    const { user, setUser, logout } = useAuthStore();

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-pink-500 mb-4">環境チェックページ</h1>
        <p className="mb-2">✅ React is working</p>
        <p className="mb-2">✅ Tailwind CSS is applied</p>
        <p className="mb-2">✅ Zustand state: {user ? `ログイン中（${user.name}）` : '未ログイン'}</p>
        <div className="space-x-2 mt-4">
            <Button onClick={() => setUser({ name: 'TestUser' })}>ログイン</Button>
            <Button onClick={logout} className="bg-gray-400 hover:bg-gray-500">ログアウト</Button>
        </div>
        </div>
  );
};

export default EnvironmentCheck;
