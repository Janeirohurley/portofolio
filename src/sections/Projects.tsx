import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Définition de la structure d'un projet
export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github: string;
  link: string;
  image: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  // Extraction dynamique des technologies pour les boutons de filtrage
  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section className="py-24 bg-[#020c1b] px-6 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* Header Dynamique */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black  tracking-tighter">
              Réalisations <span className="text-[#4CC9F0]">Récentes</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 mt-2 rounded-md"></div>
            <p className="text-slate-400 mt-4 max-w-md">
              Une sélection de mes travaux les plus récents, du développement système aux architectures Web complexes.
            </p>
          </div>

          {/* Filtres Technologiques Dynamiques */}
          <div className="flex flex-wrap gap-2 bg-[#0a192f] p-2 rounded-md border border-slate-800">
            {allTechs.slice(0, 8).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest transition-all rounded-md border ${filter === t
                    ? 'bg-[#4CC9F0] text-[#020c1b] border-[#4CC9F0]'
                    : 'border-transparent text-slate-500 hover:text-white hover:border-slate-700'
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de Projets avec Animation de Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="group relative bg-[#0a192f] border border-slate-800 rounded-md overflow-hidden hover:border-cyan-500/50 transition-all shadow-2xl flex flex-col"
              >
                {/* Overlay Image avec Zoom */}
                <div className="h-52 bg-slate-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#020c1b]/40 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Contenu Technique */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] font-mono text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded-sm uppercase tracking-tighter">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#4CC9F0] transition-colors uppercase">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-8 italic flex-1">
                    "{project.description}"
                  </p>

                  {/* Boutons d'Action (Style Industriel Carré) */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.github}
                      className="flex-1 text-center py-3 text-[10px] font-black tracking-widest border border-slate-700 rounded-md hover:bg-white hover:text-[#020c1b] transition-all"
                    >
                      SOURCE CODE
                    </a>
                    <a
                      href={project.link}
                      className="flex-1 text-center py-3 text-[10px] font-black tracking-widest bg-[#4CC9F0] text-[#020c1b] rounded-md hover:bg-white transition-all shadow-[0_0_15px_rgba(76,201,240,0.2)]"
                    >
                      LIVE PREVIEW
                    </a>
                  </div>
                </div>

                {/* Décoration technique dans l'angle */}
                <div className="absolute top-3 right-3 p-1 pointer-events-none">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-cyan-500/30 group-hover:border-cyan-500 transition-colors" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;