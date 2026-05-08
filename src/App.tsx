import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { CertificationsSection } from './sections/CertificationsSection';

function App() {
  return (
    <main className="main-wrapper bg-[#0C0C0C] min-h-screen text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />

      {/* Footer / Contact Section */}
      <section id="contact" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-40 relative py-20 px-5 sm:px-8 md:px-10 border-t border-white/10 flex flex-col items-center">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] mb-12 sm:mb-16 leading-none tracking-tight">
          Get in touch
        </h2>
        
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 md:gap-16 justify-between mb-16">
          
          <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-2">Contact</h3>
            <a href="mailto:shamimashaikh2004@gmail.com" className="text-[#D7E2EA]/80 hover:text-white transition-colors text-sm sm:text-base">shamimashaikh2004@gmail.com</a>
            <a href="mailto:azim03013@gmail.com" className="text-[#D7E2EA]/80 hover:text-white transition-colors text-sm sm:text-base">azim03013@gmail.com</a>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base">+91-8208391572</p>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-2">Location & Info</h3>
            <p className="text-[#D7E2EA]/80 text-sm sm:text-base leading-relaxed">
              Pune, Maharashtra, India
            </p>
            <p className="text-[#D7E2EA]/80 text-sm mt-2">
              <span className="font-semibold text-white/90">Languages:</span> English, Hindi, Marathi
            </p>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h3 className="text-xl font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-2">Links</h3>
            <a href="https://github.com/AzimShaikh2004" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/80 hover:text-white transition-colors text-sm sm:text-base">GitHub</a>
            <a href="https://linkedin.com/in/mohammed-azim-shaikh" target="_blank" rel="noopener noreferrer" className="text-[#D7E2EA]/80 hover:text-white transition-colors text-sm sm:text-base">LinkedIn</a>
          </div>

        </div>
        
        <p className="opacity-40 text-xs sm:text-sm tracking-widest uppercase mt-8 text-center">
          ©2026 Mohammed Azim Ajaz Shaikh
        </p>
      </section>
    </main>
  );
}

export default App;
