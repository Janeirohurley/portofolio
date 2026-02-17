import React from 'react';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import ToggleDarkMode from '../components/ToggleDarkMode';
import useDarkMode from '../components/useDarkMode';
import RoadmapRich from '../sections/Parcours';
import TrustSection from '../sections/SocialProof';
import InfoBurundi from '../sections/InfoBurundi';

// Données fictives à remplacer par vos vraies infos
const heroData = {
  name: 'Janeiro Hurley',
  title: 'Développeur Web Full Stack',
  description: "Développeur passionné spécialisé dans la création d'applications web modernes, performantes et centrées sur l'utilisateur. Expérience avec React, TypeScript, Django.",
};


const mySections = [
  {
    category: "Fondamentaux & Programmation",
    color: "#4CC9F0",
    items: [
      { title: "Algorithmique", desc: "Logique de programmation, structures de données et résolution de problèmes complexes." },
      { title: "C & C++", desc: "Gestion de la mémoire, pointeurs et programmation système bas niveau." },
      { title: "C# & .NET", desc: "Programmation orientée objet (POO) et développement d'applications robustes." },
      { title: "GitHub & Versioning", desc: "Maîtrise de Git, workflow collaboratif (Pull Requests) et gestion de versions." }
    ]
  },
  {
    category: "Maîtrise du Web (Core)",
    color: "#f72585",
    items: [
      { title: "HTML5 & CSS3", desc: "Sémantique Web, SEO technique, Flexbox, Grid et responsive design moderne." },
      { title: "JavaScript (ES6+)", desc: "Manipulation du DOM, asynchronisme (Promises/Async-Await) et programmation fonctionnelle." },
      { title: "PHP & Web Dynamique", desc: "Développement côté serveur, gestion des formulaires et rendu dynamique." },
      { title: "TypeScript", desc: "Typage statique avancé pour sécuriser et scaler les applications JavaScript." }
    ]
  },
  {
    category: "Écosystème Backend & Data",
    color: "#4361ee",
    items: [
      { title: "Node.js & Express", desc: "Création de serveurs scalables, middlewares et architecture micro-services." },
      { title: "SQL & SQLite", desc: "Conception de schémas relationnels, normalisation et requêtes complexes optimisées." },
      { title: "MongoDB", desc: "Gestion des bases de données NoSQL orientées documents et flexibilité des schémas." },
      { title: "Django & Python", desc: "Développement rapide d'API RESTful sécurisées avec Django Rest Framework (DRF)." }
    ]
  },
  {
    category: "Modern Stack & DevOps",
    color: "#7209b7",
    items: [
      { title: "React Expert", desc: "Hooks personnalisés, Context API, optimisation du rendu et Single Page Applications." },
      { title: "CI / CD", desc: "Automatisation des tests et déploiements continus (GitHub Actions, Jenkins)." },
      { title: "Docker & Cloud", desc: "Conteneurisation des services et déploiement sur infrastructures modernes (AWS/Vercel)." },
      { title: "Monitoring", desc: "Gestion des logs, performance des applications en production et debugging avancé." }
    ]
  }
];




 const myProjectsData = [
  {
    title: "E-Commerce Architecture",
    description: "Plateforme scalable avec tunnel de vente optimisé.",
    longDescription: "Ce projet utilise Django pour la gestion complexe des commandes et React pour une interface fluide. L'architecture supporte des milliers de requêtes grâce à Redis et PostgreSQL.",
    tech: ["Django", "React", "PostgreSQL", "Stripe"],
    features: ["Paiement sécurisé via Stripe", "Gestion de stock en temps réel", "Auth JWT multi-rôles"],
    link: "https://demo.com",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Système de Monitoring",
    description: "Dashboard analytique pour serveurs cloud.",
    longDescription: "Un outil de monitoring bas niveau écrit en C++ pour la capture de données, avec un frontend en TypeScript pour la visualisation graphique des métriques CPU/RAM.",
    tech: ["C++", "TypeScript", "Node.js", "InfluxDB"],
    features: ["Graphiques temps réel (Socket.io)", "Alertes emails automatiques", "Logs système bas-niveau"],
    link: "https://demo.com",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000"
  }
];
const reviewsData = [
  {
    name: "Alexandre Vasseur",
    role: "Directeur Technique @ Inov",
    comment: "Une rigueur rare dans le développement backend. La transition vers PostgreSQL s'est faite sans aucune interruption de service.",
    initials: "AV"
  },
  {
    name: "Léa Marchand",
    role: "Fondatrice de Bloom",
    comment: "L'interface React est non seulement belle mais extrêmement performante. Howard comprend les enjeux UX dès le premier briefing.",
    initials: "LM"
  }
];

const languagesData = [
  { name: "Français", level: "Langue maternelle", code: "FR" },
  { name: "Anglais", level: "Niveau C1 - Professionnel", code: "EN" },
  { name: "Kirundi / Swahili", level: "Langue maternelle & courant", code: "BI/SW" }
];



const HomePage: React.FC = () => {
  useDarkMode();
  return (
    <>
      <ToggleDarkMode />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-500">
        <Hero {...heroData} />
        <InfoBurundi />
        <RoadmapRich sections={mySections} title="Mon Expertise" />
        <Projects projects={myProjectsData} />

        <TrustSection reviews={reviewsData} languages={languagesData} />
        <Contact  />
        <footer className="py-12 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-800">
          <p>© {new Date().getFullYear()} Janeiro Hurley — Développeur Full Stack</p>
          <p className="mt-2">Construit avec React, TypeScript & Tailwind CSS</p>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
