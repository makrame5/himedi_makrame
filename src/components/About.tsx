'use client';

import React from 'react';

const TimelineItem = ({year, title, description }: { year: string; title: string; description: string }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-0 h-full w-0.5 bg-health-blue/20">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-health-blue"></div>
    </div>
    <div className="animate-fade-in">
      <span className="text-health-blue font-semibold">{year}</span>
      <h3 className="text-lg font-semibold mt-1">{title}</h3>
      <p className="text-health-gray mt-2">{description}</p>
    </div>
  </div>
);

const About = () => {
  const timeline = [
    {
      year: "2025",
      title: "Master en ingénierie digitale pour les métiers de la santé",
      description: "Spécialisation en solutions numériques pour la santé, IoT médical et télémédecine."
    },
    // Add more timeline items as needed
  ];

  const expertise = [
    { icon: "📡", title: "IoT Médical", description: "Développement de solutions connectées pour le suivi patient" },
    { icon: "💻", title: "Télémédecine", description: "Plateformes de consultation à distance et suivi médical" },
    { icon: "🥽", title: "Réalité Augmentée", description: "Applications AR/VR pour la formation médicale" },
    { icon: "👁️", title: "Computer Vision", description: "Analyse d'images médicales et diagnostic assisté par IA" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">À Propos de Moi</h2>
        
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <p className="text-lg text-health-gray leading-relaxed">
            Passionnée par l'innovation en santé, je combine mes compétences en ingénierie 
            et ma compréhension du secteur médical pour développer des solutions numériques 
            qui améliorent concrètement le parcours de soin.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-health-gray">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Mon Parcours</h3>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
