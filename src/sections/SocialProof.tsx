import React from 'react';
import { motion } from 'framer-motion';

export interface Review {
    name: string;
    role: string;
    comment: string;
    initials: string;
}

export interface Language {
    name: string;
    level: string;
    code: string;
}

interface SocialSectionProps {
    reviews: Review[];
    languages: Language[];
}

const TrustSection: React.FC<SocialSectionProps> = ({ reviews, languages }) => {
    return (
        <section className="py-24 bg-[#020c1b] px-6 text-white border-t border-white/5">
            <div className="max-w-[1200px] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* SECTION TÉMOIGNAGES (7/12) */}
                    <div className="lg:col-span-7">
                        <h3 className="text-3xl font-medium tracking-tight mb-12">
                            ce qu'ils disent de mon <span className="text-[#4CC9F0] italic">travail</span>
                        </h3>

                        <div className="grid gap-6">
                            {reviews.map((review, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#0a192f]/30 border border-white/5 p-8 rounded-md group hover:border-white/10 transition-colors"
                                >
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 italic">
                                        "{review.comment}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-[10px] font-bold text-cyan-400">
                                            {review.initials}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium">{review.name}</h4>
                                            <p className="text-[11px] text-slate-500">{review.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* SECTION LANGUES (5/12) */}
                    <div className="lg:col-span-5">
                        <h3 className="text-3xl font-medium tracking-tight mb-12">
                            langues parlées
                        </h3>

                        <div className="bg-[#0a192f]/50 border border-white/5 rounded-md overflow-hidden">
                            {languages.map((lang, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 flex items-center justify-between border-b border-white/5 last:border-b-0 group hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className="text-[10px] font-mono text-slate-600">0{idx + 1}</span>
                                        <div>
                                            <h4 className="text-sm font-medium text-slate-200">{lang.name}</h4>
                                            <p className="text-[11px] text-slate-500">{lang.level}</p>
                                        </div>
                                    </div>

                                    {/* Indicateur visuel discret */}
                                    <div className="px-3 py-1 bg-white/5 rounded-md text-[9px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                                        {lang.code}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Note de bas de section */}
                        <div className="mt-8 p-6 bg-cyan-500/5 rounded-md border border-cyan-500/10">
                            <p className="text-[11px] text-slate-400 leading-relaxed">
                                ma polyvalence linguistique me permet d'évoluer dans des environnements internationaux et de comprendre les besoins de clients diversifiés.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustSection;