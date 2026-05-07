import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';

const projects = [
  {
    number: "01",
    client: "MERN Stack",
    name: "civicpulse",
    href: "https://github.com/AzimShaikh2004/civicpulse",
    images: {
      col1_1: "/civicpulse.png",
      col1_2: "/civicpulse.png",
      col2: "/civicpulse.png"
    }
  },
  {
    number: "02",
    client: "Full-Stack",
    name: "trello-clone-lite",
    href: "https://trello-clone-lite.vercel.app",
    images: {
      col1_1: "/trello.png",
      col1_2: "/trello.png",
      col2: "/trello.png"
    }
  },
  {
    number: "03",
    client: "Python, Django",
    name: "ResQMate",
    href: "https://github.com/AzimShaikh2004/ResQMate",
    images: {
      col1_1: "/resqmate.png",
      col1_2: "/resqmate.png",
      col2: "/resqmate.png"
    }
  },
  {
    number: "04",
    client: "TypeScript",
    name: "freshcery",
    href: "https://github.com/AzimShaikh2004/freshcery",
    images: {
      col1_1: "/freshcery.png",
      col1_2: "/freshcery.png",
      col2: "/freshcery.png"
    }
  },
  {
    number: "05",
    client: "Python, Django",
    name: "FraudShield",
    href: "https://github.com/AzimShaikh2004/FraudShield",
    images: {
      col1_1: "/fraudshield.png",
      col1_2: "/fraudshield.png",
      col2: "/fraudshield.png"
    }
  }
];

const ProjectCard = ({ project, index, totalCards }: { project: typeof projects[0], index: number, totalCards: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] flex items-start justify-center sticky" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 md:gap-8 origin-top"
      >
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0">
          <div className="flex items-end gap-6 sm:gap-8 md:gap-12">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,8vw,100px)] leading-none">{project.number}</span>
            <div className="flex flex-col pb-2 md:pb-4">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mb-1 sm:mb-2">{project.client}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl">{project.name}</h3>
            </div>
          </div>
          <div className="pb-2 md:pb-4">
            <LiveProjectButton href={'href' in project ? project.href as string : undefined} />
          </div>
        </div>

        {/* Bottom row - Image Grid */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-full flex-1">
          {/* Left Column (40%) */}
          <div className="w-full sm:w-[40%] flex flex-col gap-4 sm:gap-6">
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images.col1_1} alt="Project Detail 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden" style={{ height: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images.col1_2} alt="Project Detail 2" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Right Column (60%) */}
          <div className="w-full sm:w-[60%] flex-1">
            <div className="w-full h-full min-h-[200px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
              <img src={project.images.col2} alt="Project Main" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pt-20 sm:pt-24 md:pt-32 pb-32 px-5 sm:px-8 md:px-10">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-12 sm:mb-16 md:mb-20 leading-none tracking-tight">
        Project
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
};
