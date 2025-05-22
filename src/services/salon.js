import { get } from './api';

export const fetchSalonContents = async () => {
  // 仮のダミーデータ取得パス（実際のAPIパスに置き換えてください）
    return await get('/salon-contents');
};