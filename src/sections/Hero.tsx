import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../assets/profile2.jpg';
import reactlogo from '../assets/language/react.svg';
import typescriptlogo from '../assets/language/ts.jpg';
import djangocriptlogo from '../assets/language/django.png';

interface HeroProps {
  name: string;
  title: string;
  description: string;
  onDownloadCV?: () => void;
}

const Hero: React.FC<HeroProps> = ({ name, title, description, onDownloadCV }) => {
  // Configuration du Parallaxe au Scroll
  const { scrollY } = useScroll();

  // Le texte monte légèrement plus vite, l'image descend un peu
  const yText = useTransform(scrollY, [0, 500], [0, -800]);
  const yImage = useTransform(scrollY, [0, 500], [0, 0]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen bg-[#051923] dark:bg-white text-white dark:text-[#051923] overflow-hidden flex items-center transition-colors duration-500">

      {/* Cercle lumineux dynamique en fond avec Parallaxe */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none animate-pulse"
      />

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center z-10 w-full px-6">

        {/* Colonne Gauche : Texte avec Animation d'entrée et Parallaxe */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col space-y-6 items-center md:items-start text-center md:text-left w-full"
        >
          <span className="text-cyan-400 dark:text-cyan-600 font-mono tracking-widest uppercase text-xs sm:text-sm">2026 • Portfolio</span>

          <div className="space-y-2 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#4CC9F0] dark:text-[#4361ee] tracking-tight wrap-break-word w-full">
              {name}
            </h1>
            <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-200 dark:text-slate-700 w-full">
              {title}
            </h2>
          </div>

          <p className="text-gray-400 dark:text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-md sm:max-w-lg md:max-w-xl w-full">
            {description}
          </p>

          <div className="flex gap-4 items-center justify-center md:justify-start w-full">
            <button
              onClick={onDownloadCV}
              className="group flex items-center justify-center gap-2 w-fit px-6 py-3 sm:px-8 sm:py-4 bg-[#4CC9F0] dark:bg-[#22223B] text-[#051923] dark:text-[#4CC9F0] rounded-xl font-bold text-base sm:text-lg hover:bg-white dark:hover:bg-[#4CC9F0] hover:text-[#051923] dark:hover:text-[#051923] hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Telecharger mon CV
              <span className="text-xl group-hover:translate-y-1 transition-transform">↓</span>
            </button>
          </div>

          {/* Tech Stack Horizontal */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-8 sm:pt-10 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 justify-center md:justify-start w-full">
            <span className="font-bold text-base sm:text-xl uppercase tracking-wider text-[#4CC9F0] dark:text-[#4CC9F0]">React</span>
            <span className="font-bold text-base sm:text-xl uppercase tracking-wider text-[#00473C] dark:text-[#B7F4C8]">Django</span>
            <span className="font-bold text-base sm:text-xl uppercase tracking-wider text-[#33658A] dark:text-[#A9BCD0]">PostgreSQL</span>
          </div>
        </motion.div>

        {/* Colonne Droite : Image et Badges avec Parallaxe Indépendante */}
        <div className="relative flex justify-center items-center h-full w-full mt-10 md:mt-0">

          {/* Conteneur Image avec Parallaxe Scroll */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 w-full max-w-full sm:max-w-xs md:max-w-md group"
          >
            <div className="absolute -inset-1 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={profileImage}
              alt={name}
              className="relative object-cover rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] w-full h-auto max-h-[320px] sm:max-h-[380px] md:max-h-[420px]"
            />
          </motion.div>

          {/* --- Badges Flottants Animés --- */}

          {/* Badges flottants, adaptés pour mobile/tablette */}
          {/* Badge React */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex absolute top-4 left-0 sm:top-10 sm:-left-6 z-20 bg-[#005f73]/90 dark:bg-[#22223B]/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg items-center gap-2 border border-white/10 shadow-xl"
          >
            <img src={reactlogo} alt="React" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-medium text-white dark:text-[#4CC9F0]">React</span>
            <span className="ml-2 text-[9px] sm:text-[10px] opacity-50">✕</span>
          </motion.div>

          {/* Badge TypeScript */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="hidden sm:flex absolute top-1/3 right-0 sm:-right-8 z-20 bg-[#005f73]/90 dark:bg-[#22223B]/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg items-center gap-2 border border-white/10 shadow-xl"
          >
            <img src={typescriptlogo} alt="TypeScript" className="w-5 h-5 sm:w-6 sm:h-6 rounded-md" />
            <span className="text-xs sm:text-sm font-medium text-white dark:text-[#4CC9F0]">TypeScript</span>
            <span className="ml-2 text-[9px] sm:text-[10px] opacity-50">✕</span>
          </motion.div>

          {/* Badge Django */}
          <motion.div
            animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="hidden sm:flex absolute bottom-8 right-0 sm:bottom-12 sm:-right-4 z-20 bg-white dark:bg-[#B7F4C8] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg items-center gap-2 border border-white/10 shadow-xl"
          >
            <img src={djangocriptlogo} alt="Django" className="w-5 h-5 sm:w-6 sm:h-6 object-contain" />
            <span className="text-xs sm:text-sm font-medium text-[#00473C] dark:text-[#00473C]">Django</span>
            <span className="ml-2 text-[9px] sm:text-[10px] opacity-50 text-black">✕</span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;