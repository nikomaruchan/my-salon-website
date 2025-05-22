import React from 'react';

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-xl font-semibold mb-4 text-pink-500">ログイン</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">メールアドレス</label>
                        <input type="email" className="w-full border rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">パスワード</label>
                        <input type="password" className="w-full border rounded px-3 py-2" />
                    </div>
                    <button type="submit" className="w-full bg-pink-400 text-white py-2 rounded hover:bg-pink-500">ログイン</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
