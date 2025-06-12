'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import profileImage from 'public/images/profile.jpg';
import EHealthBackground from './EHealthBackground';
import MedicalIcons from './MedicalIcons';
import HealthDataStream from './HealthDataStream';

const Hero = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showStats, setShowStats] = useState(false);
  const [showDiagnostic, setShowDiagnostic] = useState(false);

  const texts = [
    'Himedi Makrame',
    'Ingénieur digital',
    'Spécialiste IoT',
    'Expert télémédecine',
    'Himedi Makrame'
  ];

  // Animation de rotation de l'image
  const handleImageClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  // Animation de typing effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTextIndex, texts]);

  // Effet de diagnostic périodique
  useEffect(() => {
    const diagnosticInterval = setInterval(() => {
      setShowDiagnostic(true);
      setTimeout(() => setShowDiagnostic(false), 3000);
    }, 10000);

    return () => clearInterval(diagnosticInterval);
  }, []);
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient de fond e-santé */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

      {/* Arrière-plan e-santé spécialisé */}
      <EHealthBackground />

      {/* Icônes médicales flottantes */}
      <MedicalIcons />

      {/* Flux de données de santé en temps réel */}
      <HealthDataStream />

      {/* Overlay subtil pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-white/20" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image/Animation Side */}
          <div className="order-2 md:order-1 flex justify-center animate-slide-in-right">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] animate-float">
              <div className="absolute inset-0 bg-health-blue/5 rounded-full animate-pulse" />
              <div
                className={`absolute inset-0 overflow-hidden rounded-full border-4 border-health-blue/10 cursor-pointer transition-all duration-1000 hover:border-health-blue/30 ${
                  isSpinning ? 'animate-spin' : ''
                }`}
                onClick={handleImageClick}
                onMouseEnter={() => setShowStats(true)}
                onMouseLeave={() => setShowStats(false)}
                title="Cliquez pour faire tourner l'image !"
              >
                <Image
                  src={profileImage}
                  alt="Himedi Makrame - Ingénieure digitale en santé"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-300 -rotate-90"
                  sizes="(max-width: 768px) 300px, 400px"
                />
              </div>
              {/* Cercles holographiques médicaux */}
              <div className="absolute -inset-4 border-2 border-health-blue/20 rounded-full animate-spin-slow"
                   style={{ animationDuration: '15s' }} />
              <div className="absolute -inset-8 border border-cyan-400/15 rounded-full animate-spin-slow"
                   style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
              <div className="absolute -inset-12 border border-blue-400/10 rounded-full animate-spin-slow"
                   style={{ animationDuration: '25s' }} />

              {/* Indicateurs de scan médical */}
              <div className="absolute -inset-6">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-cyan-400/60 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-gradient-to-r from-cyan-400/60 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-gradient-to-l from-cyan-400/60 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>

              {/* Particules flottantes */}
              <div className="absolute -inset-8">
                <div className="absolute top-4 left-4 w-2 h-2 bg-health-blue/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="absolute top-8 right-8 w-1 h-1 bg-health-blue/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-health-blue/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-health-blue/25 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Statistiques au survol */}
              {showStats && (
                <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg animate-fade-in-up border border-health-blue/20">
                  <div className="flex space-x-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-health-blue animate-pulse-glow">5+</div>
                      <div className="text-xs text-health-gray">Projets IoT</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-health-blue animate-pulse-glow">3+</div>
                      <div className="text-xs text-health-gray">Ans d'expérience</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-health-blue animate-pulse-glow">10+</div>
                      <div className="text-xs text-health-gray">Technologies</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Diagnostic e-santé périodique */}
              {showDiagnostic && (
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-cyan-50/95 backdrop-blur-sm rounded-lg p-3 shadow-lg animate-fade-in-up border border-cyan-400/30">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-cyan-700 mb-1">🔍 Analyse e-santé</div>
                    <div className="text-xs text-cyan-600">
                      <div className="animate-pulse">Expertise IoT: ✓ Validée</div>
                      <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>Télémédecine: ✓ Certifiée</div>
                      <div className="animate-pulse" style={{ animationDelay: '1s' }}>Innovation: ✓ Active</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 md:order-2 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
              <span className="text-health-black">Bonjour, je suis</span>
              <br />
              <span className="relative">
                <span className="animate-gradient bg-gradient-to-r from-health-blue via-blue-600 to-health-blue bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="typing-cursor text-health-blue">|</span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-health-gray mb-6 font-medium">
              Etudiant en ingénirie digitale pour les métiers de la santé
            </h2>
            <p className="text-lg text-health-gray mb-8 leading-relaxed">
              Télémédecine | IA médicale | Computer vision pour la santé
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link href="/#projects" className="btn-primary hover-lift animate-glow">
                Découvrir mes projets
              </Link>
              <a
                href="/images/CV.pdf"
                download="CV_Himedi_Makrame.pdf"
                className="btn-outline hover-lift"
              >
                Télécharger mon CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <a
                href="https://www.linkedin.com/in/makrame-h-aaa2b0229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-health-gray hover:text-health-blue transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://github.com/makrame5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-health-gray hover:text-health-blue transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="mailto:contact@example.com"
                className="text-health-gray hover:text-health-blue transition-colors"
              >
                <span className="sr-only">Email</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
