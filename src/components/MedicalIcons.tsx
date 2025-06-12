'use client';

const MedicalIcons = () => {
  const medicalElements = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-w-8 max-h-8">
          {/* Stéthoscope */}
          <path d="M19.5 3.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 5.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm-6.5-2c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5h1v-3c0-2.2 1.8-4 4-4s4 1.8 4 4v3h1c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5v-8z"/>
        </svg>
      ),
      position: { top: '15%', left: '10%' },
      animation: 'animate-float',
      delay: '0s',
      size: 'w-8 h-8'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full max-w-6 max-h-6">
          {/* Croix médicale */}
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      position: { top: '25%', right: '15%' },
      animation: 'animate-pulse',
      delay: '1s',
      size: 'w-6 h-6'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {/* Pilule/Médicament */}
          <ellipse cx="12" cy="12" rx="8" ry="4" transform="rotate(45 12 12)"/>
          <ellipse cx="12" cy="12" rx="8" ry="4" transform="rotate(45 12 12)" fill="white" fillOpacity="0.3"/>
        </svg>
      ),
      position: { bottom: '20%', left: '20%' },
      animation: 'animate-bounce',
      delay: '2s',
      size: 'w-5 h-5'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {/* Thermomètre */}
          <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-2zm2 14c-1.1 0-2-.9-2-2 0-.55.45-1 1-1s1 .45 1 1c0 1.1-.9 2-2 2z"/>
        </svg>
      ),
      position: { top: '40%', right: '25%' },
      animation: 'animate-float',
      delay: '3s',
      size: 'w-7 h-7'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {/* Moniteur cardiaque */}
          <rect x="2" y="4" width="20" height="14" rx="2"/>
          <polyline points="6,12 8,8 10,16 12,8 14,16 16,12 18,12" fill="none" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      position: { bottom: '30%', right: '10%' },
      animation: 'animate-pulse',
      delay: '4s',
      size: 'w-10 h-6'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {/* Seringue */}
          <path d="M6 16h12v2H6v-2zm0-4h12v2H6v-2zm0-4h12v2H6V8zm0-4h12v2H6V4z"/>
          <circle cx="20" cy="12" r="2"/>
          <path d="M18 12h-2"/>
        </svg>
      ),
      position: { top: '60%', left: '5%' },
      animation: 'animate-bounce',
      delay: '5s',
      size: 'w-6 h-6'
    },
    {
      id: 7,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {/* Molécule ADN */}
          <path d="M4 4h2v2H4V4zm0 4h2v2H4V8zm0 4h2v2H4v-2zm0 4h2v2H4v-2zm0 4h2v2H4v-2z"/>
          <path d="M18 4h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/>
          <path d="M6 5h12M6 9h12M6 13h12M6 17h12M6 21h12" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
        </svg>
      ),
      position: { top: '70%', right: '30%' },
      animation: 'animate-float',
      delay: '6s',
      size: 'w-8 h-8'
    },
    {
      id: 8,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          {/* Capteur IoT */}
          <circle cx="12" cy="12" r="3"/>
          <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
          <circle cx="6" cy="6" r="1"/>
          <circle cx="18" cy="6" r="1"/>
          <circle cx="6" cy="18" r="1"/>
          <circle cx="18" cy="18" r="1"/>
        </svg>
      ),
      position: { bottom: '15%', left: '35%' },
      animation: 'animate-pulse',
      delay: '7s',
      size: 'w-9 h-9'
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {medicalElements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${element.size} text-health-blue/15 ${element.animation}`}
          style={{
            ...element.position,
            animationDelay: element.delay,
            animationDuration: '4s',
          }}
        >
          {element.icon}
        </div>
      ))}
      
      {/* Lignes de connexion entre éléments médicaux */}
      <svg className="absolute inset-0 w-full h-full opacity-5">
        <defs>
          <linearGradient id="medicalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Connexions entre dispositifs médicaux */}
        <path
          d="M 10% 15% Q 50% 5% 85% 25%"
          stroke="url(#medicalGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <path
          d="M 20% 80% Q 60% 60% 90% 70%"
          stroke="url(#medicalGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        <path
          d="M 5% 60% Q 30% 40% 35% 85%"
          stroke="url(#medicalGradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
};

export default MedicalIcons;
