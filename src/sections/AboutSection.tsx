import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      
      {/* Decorative 3D Images */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="Moon" className="w-[120px] sm:w-[160px] md:w-[210px] object-cover pointer-events-none" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="3D Object" className="w-[100px] sm:w-[140px] md:w-[180px] object-cover pointer-events-none" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="Lego" className="w-[120px] sm:w-[160px] md:w-[210px] object-cover pointer-events-none" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="3D Group" className="w-[130px] sm:w-[170px] md:w-[220px] object-cover pointer-events-none" />
      </FadeIn>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 w-full max-w-5xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        <AnimatedText 
          text="Aspiring Cloud & DevSecOps Engineer with a strong foundation in full-stack development, experienced in building scalable web applications using the MERN stack. Currently focused on cloud computing, CI/CD pipelines, and deployment practices."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[800px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full mt-8">
          <FadeIn delay={0.2} y={30} className="flex-1 flex flex-col gap-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-4">Education</h3>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-[#D7E2EA]">M.C.A. - Computer Applications</h4>
              <p className="text-[#D7E2EA]/70 text-sm">DPGU - School of Management & Research | 2025 - 2027</p>
              <p className="text-[#D7E2EA]/50 text-sm">CGPA: 8.68 / 10</p>
            </div>
            
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-[#D7E2EA]">B.Sc. - Computer Science</h4>
              <p className="text-[#D7E2EA]/70 text-sm">ATSS College of Business Studies and Computer Applications | 2022 - 2025</p>
              <p className="text-[#D7E2EA]/50 text-sm">CGPA: 8.27 / 10</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-[#D7E2EA]">12th - MSBSHSE</h4>
              <p className="text-[#D7E2EA]/70 text-sm">Shri Fattechand Jain Vidyalaya & Junior College | 2022</p>
              <p className="text-[#D7E2EA]/50 text-sm">Percentage: 79.50 / 100</p>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-lg text-[#D7E2EA]">10th - MSBSHSE</h4>
              <p className="text-[#D7E2EA]/70 text-sm">Infant Jesus High School | 2020</p>
              <p className="text-[#D7E2EA]/50 text-sm">Percentage: 90.20 / 100</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} y={30} className="flex-1 flex flex-col gap-6">
            <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/80 border-b border-white/20 pb-4">Activities & Hobbies</h3>
            <ul className="flex flex-col gap-4 text-[#D7E2EA]/80 font-light leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">▹</span> 
                Actively learning Cloud & DevOps technologies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">▹</span> 
                Exploring AI tools and prompt engineering
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">▹</span> 
                Practicing real-world application development and problem-solving
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white mt-1">▹</span> 
                Self-learning through projects and online resources
              </li>
            </ul>
          </FadeIn>
        </div>

        <div className="mt-6 sm:mt-6 md:mt-8">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
