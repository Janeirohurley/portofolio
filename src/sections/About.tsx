/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface AboutProps {
  name: string;
  description: string;
  background: string;
  passion: string;
  goals: string;
  vision: string;
}

const About: React.FC<AboutProps> = ({ description, background, passion, goals, vision }) => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-500" id="about">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-4">À propos de moi</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300"><span className="font-semibold">Parcours :</span> {background}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300"><span className="font-semibold">Passion :</span> {passion}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300"><span className="font-semibold">Objectifs :</span> {goals}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300"><span className="font-semibold">Vision :</span> {vision}</p>
      </div>
    </section>
  );
};

export default About;
