// --- src/hooks/useAuth.jsx ---
import { useEffect } from 'react';
import useAuthStore from '../stores/useAuthStore';

const useAuth = () => {
    const { user, setUser, logout } = useAuthStore();

    useEffect(() => {
        // 例：ローカルストレージから復元（本番ではトークン検証など）
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
        setUser(JSON.parse(storedUser));
        }
    }, [setUser]);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logoutAndClear = () => {
        localStorage.removeItem('user');
        logout();
    };

    return { user, login, logout: logoutAndClear };
    };

export default useAuth;


// --- src/hooks/useSalon.jsx ---
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
