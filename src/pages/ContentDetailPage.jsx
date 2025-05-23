import { useParams } from 'react-router-dom';
import contentDetails from '../data/contentDetails';

function ContentDetailPage() {
    const { id } = useParams();
    const content = contentDetails[id];

    if (!content) {
        return <p>コンテンツが見つかりません。</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">{content.title}</h2>

        {/* ✨ HTML文字列を展開して表示 */}
        <div
            className="text-gray-800 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: content.body }}
        />
        </div>
    );
}

export default ContentDetailPage;
