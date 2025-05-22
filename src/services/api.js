const BASE_URL = 'https://api.example.com';

export const get = async (path) => {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) throw new Error('通信エラー');
    return response.json();
    };

    export const post = async (path, data) => {
    const response = await fetch(`${BASE_URL}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('通信エラー');
    return response.json();
};