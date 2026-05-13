import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, LayoutGrid, Code, Briefcase, Mail, User } from 'lucide-react';
import ToggleDarkMode from './ToggleDarkMode';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#', icon: <User size={16} /> },
        { name: 'Expertise', href: '#expertise', icon: <Code size={16} /> },
        { name: 'Projets', href: '#projects', icon: <LayoutGrid size={16} /> },
        { name: 'Expérience', href: '#experience', icon: <Briefcase size={16} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? 'bg-[#051923]/80 dark:bg-white/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5 dark:border-gray-200' 
                : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-xl font-bold text-[#4CC9F0] dark:text-[#4361ee]"
                >
                    JH.
                </motion.div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2 text-sm font-medium text-gray-300 dark:text-gray-600 hover:text-[#4CC9F0] dark:hover:text-[#4361ee] transition-colors"
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4 border-l border-white/10 dark:border-gray-200 pl-8">
                        <ToggleDarkMode />
                        <button 
                            className="flex items-center gap-2 px-5 py-2 bg-[#4CC9F0] text-[#051923] rounded-xl font-bold text-xs hover:bg-white transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
                        >
                            <Download size={14} />
                            CV
                        </button>
                    </div>
                </div>

                {/* Mobile placeholder - can be expanded if needed */}
                <div className="md:hidden text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
