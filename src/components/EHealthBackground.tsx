'use client';

import { useEffect, useState } from 'react';

const EHealthBackground = () => {
  const [animatedElements, setAnimatedElements] = useState<Array<{
    id: number;
    type: string;
    x: number;
    y: number;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const elements = [];
    
    // Créer des éléments médicaux/tech animés
    const types = ['pulse', 'dna', 'circuit', 'heartbeat', 'molecule', 'signal'];
    
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      });
    }
    
    setAnimatedElements(elements);
  }, []);

  const renderElement = (element: any) => {
    const baseClasses = "absolute opacity-10 animate-float";
    
    switch (element.type) {
      case 'pulse':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-8 h-8`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-health-blue">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        );
      
      case 'dna':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-6 h-12`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-health-blue">
              <path d="M4 2v20h2V2H4zm14 0v20h2V2h-2zM8 6h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
            </svg>
          </div>
        );
      
      case 'circuit':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-10 h-10`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-health-blue">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        );
      
      case 'heartbeat':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-12 h-6`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <svg viewBox="0 0 100 20" fill="currentColor" className="w-full h-full text-health-blue">
              <polyline
                points="0,10 20,10 25,5 30,15 35,5 40,15 45,10 100,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="animate-pulse"
              />
            </svg>
          </div>
        );
      
      case 'molecule':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-8 h-8`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-health-blue">
              <circle cx="12" cy="12" r="2"/>
              <circle cx="6" cy="6" r="1.5"/>
              <circle cx="18" cy="6" r="1.5"/>
              <circle cx="6" cy="18" r="1.5"/>
              <circle cx="18" cy="18" r="1.5"/>
              <line x1="12" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1"/>
              <line x1="12" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1"/>
              <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1"/>
              <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
        );
      
      case 'signal':
        return (
          <div
            key={element.id}
            className={`${baseClasses} w-8 h-8`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-health-blue">
              <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48L3 14.42l-1.85-1.47zm2.83-2.83L6.83 9.3l1.41 1.41L7.41 12l-.71-.71-1.41-1.41zm5.66-5.66L12 4.59l.36-.13.36.13L12 5.41l-.36-.95zm5.66 5.66L16.59 12l-.71.71-1.41-1.41L15.17 9.3l.83.82zm2.83 2.83L21 14.42l-1.85 1.47L18.3 14.42l.85-1.48L20 11.47l.85 1.48z"/>
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grille technologique e-santé */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* Flux de données médicales */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={`data-flow-${i}`}
            className="absolute h-0.5 w-full data-connection"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Cercles de connexion IoT */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`iot-circle-${i}`}
            className="absolute border border-health-blue/20 rounded-full animate-medical-pulse"
            style={{
              width: `${40 + i * 20}px`,
              height: `${40 + i * 20}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Lignes de connexion animées */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Lignes de connexion diagonales */}
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Lignes horizontales */}
        <line x1="0" y1="25%" x2="100%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
        <line x1="0" y1="75%" x2="100%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '3s' }} />
      </svg>
      
      {/* Éléments médicaux/tech animés */}
      {animatedElements.map(renderElement)}
      
      {/* Particules de données */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-health-blue/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Lignes de scan médical */}
      <div className="absolute inset-0">
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-scan-line"
          style={{
            animationDuration: '8s',
          }}
        />
        <div
          className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-scan-line"
          style={{
            animationDuration: '12s',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Signaux vitaux simulés */}
      <div className="absolute top-4 right-4 opacity-20">
        <div className="text-xs text-health-blue font-mono">
          <div className="animate-pulse">BPM: 72</div>
          <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>SpO2: 98%</div>
          <div className="animate-pulse" style={{ animationDelay: '1s' }}>TEMP: 36.5°C</div>
        </div>
      </div>

      {/* Indicateurs de connectivité IoT */}
      <div className="absolute bottom-4 left-4 opacity-15">
        <div className="flex space-x-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={`signal-${i}`}
              className="w-1 bg-health-blue animate-pulse"
              style={{
                height: `${(i + 1) * 8}px`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EHealthBackground;
