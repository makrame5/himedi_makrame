'use client';

import React from 'react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-health-gray border border-gray-200 hover:border-health-blue hover:text-health-blue hover:shadow-md transition-all duration-300 cursor-default text-sm font-medium">
    {skill}
  </span>
);

const SkillSection = ({ category }: { category: SkillCategory }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <span className="text-xl mr-3">{category.icon}</span>
      <h3 className="text-xl font-semibold text-health-blue">{category.title}</h3>
    </div>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Langages de Programmation",
      icon: "💻",
      skills: ["C", "C#", "Python", "VHDL", "Verilog", "Assembleur"]
    },
    {
      title: "Développement Web",
      icon: "🌐",
      skills: ["Flask", "CSS", "HTML", "SQL"]
    },
    {
      title: "Systèmes Embarqués",
      icon: "🔧",
      skills: ["Raspberry Pi 4", "Arduino", "ESP32", "FPGA Nexys 3 Spartan", "Microcontrôleur PIC16F"]
    },
    {
      title: "IoT & Cloud Computing",
      icon: "☁️",
      skills: ["Protocoles de Routage IoT", "Cloud Computing"]
    },
    {
      title: "Simulation & Modélisation",
      icon: "📊",
      skills: ["Matlab Simulink", "ISIS Proteus"]
    },
    {
      title: "Compétences Spécialisées",
      icon: "🎯",
      skills: ["Traitement d'images", "Maintenance des Équipements Biomédicaux", "Virtual Reality & Augmented Reality", "Unity (C#)", "Blender"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Compétences</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillSection key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
