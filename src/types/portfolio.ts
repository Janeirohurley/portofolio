// Types partagés pour le portfolio

export interface Skill {
  name: string;
  icon: string; // chemin ou nom d'icône
  level?: string; // optionnel
}

export interface Project {
  name: string;
  description: string;
  problem: string;
  technologies: string[];
  image: string;
  github: string;
  liveDemo: string;
}

export interface Experience {
  title: string;
  organization: string;
  date: string;
  description: string;
  technologies: string[];
}
