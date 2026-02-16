import React from 'react';
import type { Skill } from '../types/portfolio';

interface SkillsProps {
  skills: {
    category: string;
    items: Skill[];
  }[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section className="py-20 px-4 bg-blue-50 dark:bg-gray-800 transition-colors duration-500" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-8">Compétences</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-200 mb-4">{cat.category}</h3>
              <ul className="flex flex-wrap gap-4">
                {cat.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow hover:scale-105 hover:bg-blue-100 dark:hover:bg-gray-700 transition-transform duration-200 group"
                  >
                    <span className="text-4xl mb-2 group-hover:animate-bounce">{skill.icon}</span>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                    {skill.level && (
                      <span className="text-xs text-blue-600 dark:text-blue-300 mt-1">{skill.level}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
