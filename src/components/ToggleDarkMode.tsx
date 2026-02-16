import React from 'react';
import { motion } from 'framer-motion';

const ToggleDarkMode: React.FC = () => {
  const [dark, setDark] = React.useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggle = () => {
    setDark((d) => {
      const next = !d;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-blue-100 dark:bg-gray-700 shadow hover:bg-blue-200 dark:hover:bg-gray-600 transition-colors"
      aria-label="Basculer le mode sombre"
    >
      {dark ? (
        <span role="img" aria-label="Lune" className="text-xl">🌙</span>
      ) : (
        <span role="img" aria-label="Soleil" className="text-xl">☀️</span>
      )}
    </motion.button>
  );
};

export default ToggleDarkMode;
