import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

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
      className="p-2 rounded-xl bg-white/5 dark:bg-gray-100 border border-white/10 dark:border-gray-200 shadow hover:bg-white/10 dark:hover:bg-gray-200 transition-colors"
      aria-label="Basculer le mode sombre"
    >
      {dark ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-blue-600" />
      )}
    </motion.button>
  );
};

export default ToggleDarkMode;
