import { useEffect } from 'react';

const useDarkMode = () => {
  useEffect(() => {
    const root = window.document.documentElement;
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && darkQuery.matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, []);
};

export default useDarkMode;
