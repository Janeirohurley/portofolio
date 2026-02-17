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


export interface CniData {
  nom: string;
  prenom: string;
  pere: string;
  mere: string;
  province: string;
  commune: string;
  colline: string;
  naissance: string;
  etatCivil: string;
  etatCivil2: string;
  profession: string;
  numberID: string;
  donationPlace: string;
  date: string;
  datationName: string;
}