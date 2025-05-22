import { useEffect, useState } from 'react';
import { fetchSalonContents } from '../services/salon';

const useSalon = () => {
    const [contents, setContents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSalonContents().then((data) => {
        setContents(data);
        setLoading(false);
        });
    }, []);

    return { contents, loading };
};

export default useSalon;
