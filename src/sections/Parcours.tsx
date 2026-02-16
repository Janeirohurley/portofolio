import React from 'react';
import { motion } from 'framer-motion';

// 1. Définition des types pour la dynamicité
interface RoadmapItem {
  title: string;
  desc: string;
}

interface RoadmapSection {
  category: string;
  color: string;
  items: RoadmapItem[];
}

interface RoadmapRichProps {
  title?: string;
  subtitle?: string;
  sections: RoadmapSection[];
  footerQuote?: string;
  footerTech?: string[];
}

const RoadmapRich: React.FC<RoadmapRichProps> = ({
  title = "INGÉNIERIE FULL STACK",
  subtitle = "Mon parcours technique détaillé : de l'interface utilisateur aux infrastructures backend complexes.",
  sections,
  footerQuote = "Transformer des concepts complexes en solutions scalables.",
  footerTech = ["DOCKER", "AWS", "CI/CD", "VERCEL"]
}) => {
  return (
    <section className="min-h-screen bg-[#020c1b] py-20 px-4 md:px-10 text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">

        {/* En-tête de section dynamique */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
            {title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Ligne de raccordement centrale horizontale (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800/50 -translate-y-1/2 hidden lg:block" />

          <div className="space-y-32">
            {sections.map((section, sIdx) => (
              <div key={sIdx} className="relative">

                {/* Badge de catégorie central - rounded-md pour le look technique */}
                <div className="flex justify-center mb-16">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="z-20 px-8 py-3 rounded-md border-2 font-bold text-xl uppercase tracking-widest bg-[#020c1b]"
                    style={{
                      borderColor: section.color,
                      color: section.color,
                      boxShadow: `0 0 20px ${section.color}33`
                    }}
                  >
                    {section.category}
                  </motion.div>
                </div>

                {/* Grille d'information Wide-Full */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                  {section.items.map((item, iIdx) => (
                    <motion.div
                      key={iIdx}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: iIdx * 0.1 }}
                      className="relative p-6 bg-[#0a192f] rounded-md border border-slate-800 hover:border-opacity-100 transition-all group"
                      style={{ borderLeftColor: iIdx === 0 ? section.color : undefined }}
                    >
                      {/* Raccordements verticaux */}
                      <div
                        className="absolute -top-6 left-1/2 w-[2px] h-6 hidden lg:block"
                        style={{ backgroundColor: section.color + '44' }}
                      />

                      <h3 className="text-lg font-bold mb-3 uppercase tracking-tight" style={{ color: section.color }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* Décoration style "Circuit" - Angles droits rounded-md */}
                      <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 border-r-2 border-b-2" style={{ borderColor: section.color }} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pied de Roadmap dynamique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-10 rounded-md bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-white/5 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 italic text-slate-200">
            "{footerQuote}"
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-cyan-500">
            {footerTech.map((tech, idx) => (
              <span key={idx} className="tracking-[0.2em]">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapRich;