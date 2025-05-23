import { useState } from 'react';

function SignupFormPage() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        service: 'オンラインサロンに参加したい',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbxlwE7oBSb7H45tKoPbBl_yw7CncfWTJQzX9hkvpbyrUHD2Go_kDvQREp3iDMFuS4st6g/exec',
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
            }
        );

        const result = await response.json();
        if (result.result === 'success') {
            setSubmitted(true);
        } else {
            alert('送信に失敗しました。');
        }
        } catch (error) {
        console.error('送信エラー:', error);
        alert('送信中にエラーが発生しました。');
        }
    };

            if (submitted) {
                return (
                <div className="p-6 max-w-lg mx-auto bg-white shadow rounded text-center">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">送信完了</h2>
                    <p>お申し込みありがとうございます！追ってご連絡いたします。</p>
                </div>
                );
            }

        return (
            <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4 text-pink-600">お申し込みフォーム</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                <label className="block mb-1">お名前</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                </div>
                <div>
                <label className="block mb-1">メールアドレス</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                    required
                />
                </div>
                <div>
            <label className="block mb-1">希望サービス</label>
            <div className="space-y-1">
                <label className="block">
                <input
                    type="radio"
                    name="service"
                    value="オンラインサロンに参加したい"
                    checked={form.service === 'オンラインサロンに参加したい'}
                    onChange={handleChange}
                />{' '}
                オンラインサロンに参加したい
                </label>
                <label className="block">
                <input
                    type="radio"
                    name="service"
                    value="情報だけ受け取りたい"
                    checked={form.service === '情報だけ受け取りたい'}
                    onChange={handleChange}
                />{' '}
                情報だけ受け取りたい
                </label>
                <label className="block">
                <input
                    type="radio"
                    name="service"
                    value="将来参加を検討している"
                    checked={form.service === '将来参加を検討している'}
                    onChange={handleChange}
                />{' '}
                将来参加を検討している
                </label>
            </div>
            </div>
            <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
            送信する
            </button>
        </form>
        </div>
    );
}

export default SignupFormPage;
