import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        year: '2024 - Présent',
        role: 'Développeur Full Stack Backend Focus',
        company: 'Projets Indépendants & Open Source',
        desc: 'Conception et déploiement d\'architectures scalables utilisant Django et React. Optimisation de bases de données PostgreSQL.',
        tags: ['Django', 'React', 'PostgreSQL', 'Docker']
    },
    {
        year: '2023 - 2024',
        role: 'Formation Intensive Web & Mobile',
        company: 'Expertise Technique',
        desc: 'Maîtrise avancée de JavaScript (ES6+), TypeScript et des frameworks modernes. Développement de multiples applications MVP.',
        tags: ['TypeScript', 'Node.js', 'React Native']
    },
    {
        year: '2022',
        role: 'Projet Académique Majeur',
        company: 'Université / Institut',
        desc: 'Développement d\'un système de gestion de données bas niveau en C++. Mention Très Bien.',
        tags: ['C++', 'Algorithmie', 'Structures de données'],
        icon: <GraduationCap size={20} />
    }
];

// Add icon to other experiences
experiences[0].icon = <Briefcase size={20} />;
experiences[1].icon = <GraduationCap size={20} />;

const Experience: React.FC = () => {
    return (
        <section className="py-24 bg-[#051923] text-white px-6">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Parcours <span className="text-[#4CC9F0]">Professionnel</span></h2>
                    <p className="text-gray-400">Mon voyage dans le monde du développement, marqué par l'apprentissage continu et la réalisation de projets concrets.</p>
                </div>

                <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 group"
                        >
                            {/* Icon Container */}
                            <div className="absolute left-0 top-1 w-[36px] h-[36px] bg-[#051923] border-2 border-[#4CC9F0] rounded-xl z-10 flex items-center justify-center text-[#4CC9F0] group-hover:bg-[#4CC9F0] group-hover:text-[#051923] transition-colors duration-300 shadow-lg shadow-cyan-500/20">
                                {(exp as any).icon}
                            </div>

                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 group-hover:border-white/10 transition-all duration-300">
                                <div className="flex items-center gap-2 text-xs font-mono text-[#4CC9F0] font-bold">
                                    <Calendar size={12} />
                                    {exp.year}
                                </div>
                                <h3 className="text-xl font-bold mt-1 text-white">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-400 font-medium mb-4">
                                    <MapPin size={12} />
                                    {exp.company}
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    {exp.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="text-[10px] bg-white/5 px-3 py-1 rounded-full border border-white/10 text-gray-400 uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
