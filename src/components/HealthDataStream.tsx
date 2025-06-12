'use client';

import { useEffect, useState } from 'react';

const HealthDataStream = () => {
  const [dataPoints, setDataPoints] = useState<Array<{
    id: number;
    type: string;
    value: string;
    timestamp: string;
    x: number;
    y: number;
  }>>([]);

  const healthDataTypes = [
    { type: 'BPM', values: ['72', '75', '68', '71', '74'], unit: '' },
    { type: 'SpO2', values: ['98%', '97%', '99%', '98%'], unit: '' },
    { type: 'TEMP', values: ['36.5°C', '36.7°C', '36.4°C', '36.6°C'], unit: '' },
    { type: 'BP', values: ['120/80', '118/78', '122/82', '119/79'], unit: 'mmHg' },
    { type: 'IoT', values: ['Connected', 'Syncing', 'Online', 'Active'], unit: '' },
    { type: 'DATA', values: ['2.4MB', '1.8MB', '3.1MB', '2.7MB'], unit: '' },
  ];

  useEffect(() => {
    const generateDataPoint = () => {
      const dataType = healthDataTypes[Math.floor(Math.random() * healthDataTypes.length)];
      const value = dataType.values[Math.floor(Math.random() * dataType.values.length)];
      
      return {
        id: Date.now() + Math.random(),
        type: dataType.type,
        value: value,
        timestamp: new Date().toLocaleTimeString(),
        x: Math.random() * 80 + 10, // 10% à 90% de la largeur
        y: Math.random() * 80 + 10, // 10% à 90% de la hauteur
      };
    };

    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoint = generateDataPoint();
        const updated = [...prev, newPoint];
        // Garder seulement les 8 derniers points
        return updated.slice(-8);
      });
    }, 3000);

    // Générer quelques points initiaux
    const initialPoints = Array.from({ length: 4 }, generateDataPoint);
    setDataPoints(initialPoints);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dataPoints.map((point, index) => (
        <div
          key={point.id}
          className="absolute animate-fade-in-up opacity-20 hover:opacity-40 transition-opacity duration-500"
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            animationDelay: `${index * 0.2}s`,
            animationDuration: '3s',
          }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-md px-2 py-1 border border-health-blue/20 shadow-sm">
            <div className="text-xs font-mono text-health-blue">
              <span className="font-semibold">{point.type}:</span>
              <span className="ml-1">{point.value}</span>
            </div>
            <div className="text-xs text-health-gray/60 mt-0.5">
              {point.timestamp}
            </div>
          </div>
          
          {/* Ligne de connexion animée */}
          <div className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-health-blue/30 to-transparent animate-data-flow" />
        </div>
      ))}
      
      {/* Indicateurs de transmission de données */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-health-blue to-transparent animate-data-flow" />
      </div>
      
      {/* Grille de monitoring */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Signaux de transmission */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`signal-${i}`}
            className="absolute w-2 h-2 bg-health-blue/20 rounded-full animate-ping"
            style={{
              top: `${20 + i * 30}%`,
              right: `${10 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthDataStream;
