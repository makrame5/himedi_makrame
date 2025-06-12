import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
     <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <footer className="relative overflow-hidden bg-slate-900">
        {/* Arrière-plan subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>

        {/* Motif géométrique discret */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Header du footer minimaliste */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-2">
              Himedi Makrame
            </h3>
            <p className="text-slate-400 font-medium">Ingénieure Digitale • E-Santé • Innovation</p>
            <div className="w-24 h-0.5 bg-health-blue mx-auto mt-4"></div>
          </div>

          {/* Contenu principal du footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Colonne 1: À propos minimaliste */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-l-2 border-health-blue pl-4">À Propos</h4>
              <p className="text-slate-400 leading-relaxed">
                Passionnée par l'innovation en santé digitale, je développe des solutions IoT,
                télémédecine et computer vision pour améliorer les soins de santé.
              </p>

              {/* Liens sociaux épurés */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/makrame-h-aaa2b0229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-health-blue transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href="https://github.com/makrame5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-health-blue transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                <a
                  href="mailto:contact@example.com"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-health-blue transition-all duration-300 group"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Colonne 2: Navigation épurée */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-l-2 border-health-blue pl-4">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { href: "/#about", label: "À propos" },
                  { href: "/#skills", label: "Compétences" },
                  { href: "/#projects", label: "Projets" },
                  { href: "/#certificates", label: "Certificats" },
                  { href: "/#contact", label: "Contact" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3: Expertise minimaliste */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white border-l-2 border-health-blue pl-4">Expertise</h4>
              <div className="space-y-3">
                {[
                  { icon: "📡", label: "IoT Médical" },
                  { icon: "💻", label: "Télémédecine" },
                  { icon: "👁️", label: "Computer Vision" },
                  { icon: "🥽", label: "Réalité Augmentée" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors duration-300">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer bottom épuré */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Himedi Makrame. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Expertise Section */}
      

      {/* Projects Section */}

    </div>
  )
}
