'use client';

import React, { useState } from 'react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: 'certificate' | 'award' | 'competition';
  description?: string;
  credentialId?: string;
  link?: string;
}

interface AccordionSectionProps {
  title: string;
  icon: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  bgColor: string;
}

const AccordionSection = ({ title, icon, count, isOpen, onToggle, children, bgColor }: AccordionSectionProps) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
    <button
      onClick={onToggle}
      className={`w-full px-6 py-4 text-left ${bgColor} hover:opacity-90 transition-all duration-300 flex items-center justify-between`}
    >
      <div className="flex items-center">
        <span className="text-xl mr-3">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-health-black">{title}</h3>
          <p className="text-sm text-health-gray">{count} élément{count > 1 ? 's' : ''}</p>
        </div>
      </div>
      <svg
        className={`w-6 h-6 text-health-gray transform transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
      <div className="p-6 bg-white max-h-96 overflow-y-auto scrollbar-thin accordion-content">
        {children}
        {/* Indicateur de scroll si nécessaire */}
        <div className="text-center text-xs text-health-gray/50 mt-2 opacity-0 hover:opacity-100 transition-opacity">
          ↕ Faites défiler pour voir plus
        </div>
      </div>
    </div>
  </div>
);

const CertificateItem = ({ certificate }: { certificate: Certificate }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'award':
        return '🏆';
      case 'competition':
        return '🥇';
      case 'certificate':
        return '📜';
      default:
        return '📜';
    }
  };

  return (
    <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-sm border-l-4 border-transparent hover:border-health-blue/30">
      <div className="flex-shrink-0 mr-3">
        <span className="text-xl">{getTypeIcon(certificate.type)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold text-health-black text-lg leading-tight">{certificate.title}</h4>
          <span className="text-sm text-health-gray font-medium ml-4 flex-shrink-0">{certificate.date}</span>
        </div>
        <p className="text-health-blue font-medium mb-2">{certificate.issuer}</p>
        {certificate.description && (
          <p className="text-health-gray text-sm leading-relaxed mb-3">{certificate.description}</p>
        )}
        <div className="flex items-center justify-between">
          {certificate.credentialId && (
            <span className="text-xs text-health-gray bg-white px-2 py-1 rounded border">
              ID: {certificate.credentialId}
            </span>
          )}
          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-health-blue hover:text-health-blue/80 transition-colors text-sm font-medium flex items-center hover:underline"
            >
              Voir le certificat
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    awards: true, // Ouvrir les récompenses par défaut
    certificates: false,
    competitions: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "1er prix de la meilleure communication orale",
      issuer: "DeepMed Congress - 1ère édition ENSAMC",
      date: "2025",
      type: "award",
      description: "Récompense obtenue pour la présentation du projet HealthConnect lors du congrès DeepMed, reconnaissant l'innovation en télémédecine et santé digitale."
    },
    {
      id: 2,
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2024",
      type: "certificate",
      description: "Certification couvrant les bases fondamentales du langage Python, incluant la syntaxe, les structures de données et les concepts de programmation."
    },
    {
      id: 3,
      title: "Python Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "2024",
      type: "certificate",
      description: "Certification avancée en Python couvrant la programmation orientée objet, les modules, les packages et les techniques de programmation avancées."
    },
    {
      id: 4,
      title: "Les Bases du Langage Python",
      issuer: "OpenClassrooms",
      date: "2022",
      type: "certificate",
      description: "Formation complète sur les fondamentaux de Python, de la syntaxe de base aux concepts avancés de programmation."
    },
    {
      id: 5,
      title: "Git & GitHub",
      issuer: "Institut Montaigne",
      date: "2024",
      type: "certificate",
      description: "Maîtrise des outils de gestion de versions Git et de la plateforme GitHub pour le développement collaboratif."
    },
    {
      id: 6,
      title: "Introduction à l'Intelligence Artificielle",
      issuer: "Institut Montaigne",
      date: "2024",
      type: "certificate",
      description: "Formation introductive aux concepts fondamentaux de l'intelligence artificielle et ses applications."
    },
    {
      id: 7,
      title: "Introduction to Computer Vision and Image Processing",
      issuer: "IBM",
      date: "2025",
      type: "certificate",
      description: "Certification IBM couvrant les techniques de vision par ordinateur et de traitement d'images, incluant les algorithmes et applications pratiques."
    },
    {
      id: 8,
      title: "Workshop: Use of Artificial Intelligence in Orthodontics",
      issuer: "DeepMed Congress - 1ère édition",
      date: "2025",
      type: "certificate",
      description: "Participation au workshop sur l'utilisation de l'intelligence artificielle en orthodontie lors de la première édition du DeepMed Congress."
    },
    {
      id: 9,
      title: "Workshop: Design on Exocad Software - Step by Step",
      issuer: "DeepMed Congress - 1ère édition",
      date: "2025",
      type: "certificate",
      description: "Formation pratique sur le logiciel Exocad pour la conception assistée par ordinateur en dentisterie, approche étape par étape."
    },
    {
      id: 10,
      title: "Présentation de Poster Scientifique",
      issuer: "DeepMed Congress - 1ère édition",
      date: "2025",
      type: "award",
      description: "Présentation d'un poster scientifique lors de la première édition du DeepMed Congress, démontrant les recherches et innovations en santé digitale."
    },
    {
      id: 11,
      title: "Membre du Comité d'Organisation",
      issuer: "DeepMed Congress - 1ère édition",
      date: "2025",
      type: "award",
      description: "Participation active au comité d'organisation de la première édition du DeepMed Congress, contribuant à l'organisation et au succès de l'événement."
    }
  ];

  const groupedCertificates = {
    awards: certificates.filter(cert => cert.type === 'award'),
    competitions: certificates.filter(cert => cert.type === 'competition'),
    certificates: certificates.filter(cert => cert.type === 'certificate')
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Certificats & Récompenses</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Awards Section */}
          {groupedCertificates.awards.length > 0 && (
            <AccordionSection
              title="Récompenses & Prix"
              icon="🏆"
              count={groupedCertificates.awards.length}
              isOpen={openSections.awards}
              onToggle={() => toggleSection('awards')}
              bgColor="bg-gradient-to-r from-yellow-50 to-orange-50"
            >
              <div className="space-y-4">
                {groupedCertificates.awards.map((certificate) => (
                  <CertificateItem key={certificate.id} certificate={certificate} />
                ))}
              </div>
            </AccordionSection>
          )}

          {/* Certificates Section */}
          {groupedCertificates.certificates.length > 0 && (
            <AccordionSection
              title="Certificats & Formations"
              icon="📜"
              count={groupedCertificates.certificates.length}
              isOpen={openSections.certificates}
              onToggle={() => toggleSection('certificates')}
              bgColor="bg-gradient-to-r from-green-50 to-emerald-50"
            >
              <div className="space-y-4">
                {groupedCertificates.certificates.map((certificate) => (
                  <CertificateItem key={certificate.id} certificate={certificate} />
                ))}
              </div>
            </AccordionSection>
          )}

          {/* Competitions Section */}
          {groupedCertificates.competitions.length > 0 && (
            <AccordionSection
              title="Compétitions"
              icon="🥇"
              count={groupedCertificates.competitions.length}
              isOpen={openSections.competitions}
              onToggle={() => toggleSection('competitions')}
              bgColor="bg-gradient-to-r from-blue-50 to-indigo-50"
            >
              <div className="space-y-4">
                {groupedCertificates.competitions.map((certificate) => (
                  <CertificateItem key={certificate.id} certificate={certificate} />
                ))}
              </div>
            </AccordionSection>
          )}
        </div>

        {/* Empty State */}
        {certificates.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold text-health-gray mb-2">Aucun certificat pour le moment</h3>
            <p className="text-health-gray">Les certificats et récompenses seront ajoutés prochainement.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
