'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  categories: ('IoT' | 'Web' | 'AR/VR' | 'Computer Vision & IA')[];
  github?: string;
  demo?: string;
  award?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HealthConnect",
    description: "Plateforme de télémédecine innovante intégrant capteurs biomédicaux connectés, intelligence artificielle et consultations vidéo en temps réel. Elle permet la surveillance à distance de paramètres vitaux. La plateforme offre messagerie, prise de rendez-vous, visualisation interactive et suivi personnalisé. Elle vise à améliorer l'accès aux soins.",
    technologies: ["Flask", "SQL", "Bootstrap", "jQuery", "React", "Socket", "MQTT", "WebRTC", "MVC", "API REST"],
    categories: ["Web", "IoT", "Computer Vision & IA"],
    github: "https://github.com/makrame5/healthconnect",
    award: "🏆 Lauréat du 1er prix de la meilleure communication orale – DeepMed Congress",
  },
  {
    id: 2,
    title: "Systèmes IoT Pour Détection de Chocs & Surveillance Environnementale",
    description: "Un projet IoT dédié à la surveillance des conditions environnementales et à la détection des chocs dans les domaines biomédical. Utile pour Transport Pharmaceutique.",
    technologies: ["Arduino Cloud", "ESP32", "MQTT", "MPU6050"],
    categories: ["IoT"],
    demo: "https://demo.example.com",
  },
  {
    id: 3,
    title: "MediAR : Réalité Augmentée pour Équipements Médicaux",
    description: "Permet aux étudiants et enseignants d'interagir avec des modèles 3D d'équipements médicaux en temps réel 📲. Imaginez pouvoir voir, manipuler et comprendre le fonctionnement d'un ventilateur d'anesthésie, d'un scanner CT ou d'un concentrateur d'oxygène sans être physiquement en laboratoire ! Immersion totale pour apprendre en visualisant l'équipement comme s'il était devant vous. Complément des formations traditionnelles : Renforce l'enseignement théorique avec des supports visuels interactifs, utiles pour les TP et formations pratiques.",
    technologies: ["Unity", "C#", "Blender"],
    categories: ["AR/VR"],
  },
  {
    id: 4,
    title: "DrowsyDetect : Détection de Somnolence et Fatigue",
    description: "Système Embarqué innovant qui sert à détecter si le conducteur est en état de Somnolence ou de Fatigue (en utilisant le traitement d'image) et agir en cas d'urgence.",
    technologies: ["Python", "OpenCV", "Raspberry Pi 4", "Dlib"],
    categories: ["Computer Vision & IA"],
  },
  {
    id: 5,
    title: "Incendium : Système Intelligent de Détection d'Incendie",
    description: "Développement d'un dispositif embarqué capable de détecter précocement les flammes dans les services hospitaliers sensibles (blocs opératoires, laboratoires, réanimation) et d'adapter automatiquement l'extinction via un correcteur PID en fonction du niveau de danger. Ce système vise à protéger les patients vulnérables, le personnel médical, et les équipements critiques.",
    technologies: ["ESP32", "Cloud", "C++", "Régulation PID"],
    categories: ["IoT"],
  },
  {
    id: 6,
    title: "MedicaTech : GMAO pour Équipements Biomédicaux",
    description: "Le projet MedicaTech comprend la conception et le développement d'une application web de GMAO, spécifiquement adaptée aux besoins de maintenance des équipements biomédicaux des établissements de santé. L'objectif principal est de fournir une plateforme numérique centralisée permettant une gestion efficace des actifs, la planification de la maintenance préventive et le suivi des interventions correctives, tout en garantissant une traçabilité complète et une efficacité opérationnelle optimale.",
    technologies: ["PHP", "CSS", "HTML", "SQL"],
    categories: ["Web"],
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const categories = ['all', 'IoT', 'Web', 'AR/VR', 'Computer Vision & IA'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter as any));

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Mes Projets</h2>
        
        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-health-blue text-white'
                  : 'bg-white text-health-gray hover:bg-health-blue/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in"
            >
              {project.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-health-gray mb-4">{project.description}</p>
                {project.award && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm font-medium text-orange-800">{project.award}</p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-health-blue/10 text-health-blue rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-health-gray hover:text-health-blue transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-health-gray hover:text-health-blue transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
