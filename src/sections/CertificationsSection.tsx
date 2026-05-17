import React from 'react';
import { FadeIn } from '../components/FadeIn';

const certificates = [
  {
    title: "React (Basic) Certificate",
    issuer: "HackerRank",
    file: "/certificates/react-basic.pdf"
  },
  {
    title: "SQL (Intermediate) Certificate",
    issuer: "HackerRank",
    file: "/certificates/sql-intermediate.pdf"
  },
  {
    title: "Angular (Intermediate) Certificate",
    issuer: "HackerRank",
    file: "/certificates/angular-intermediate.pdf"
  },
  {
    title: "Participant Certificate",
    issuer: "Event/Hackathon",
    file: "/certificates/participant-certificate-1.pdf"
  },
  {
    title: "Participant Certificate 2",
    issuer: "Event/Hackathon",
    file: "/certificates/participant-certificate-2.pdf"
  },
  {
    title: "Achievement Certificate",
    issuer: "Mohammed Azim Ajaz Shaikh",
    file: "/certificates/azim-shaikh.pdf"
  },
  {
    title: "MAS Blockchain Certificate",
    issuer: "Mohammed Azim Ajaz Shaikh",
    file: "/certificates/MAS_Blockchain.pdf"
  },
  {
    title: "Ethical Hacking Certificate",
    issuer: "Mohammed Azim Ajaz Shaikh",
    file: "/certificates/MAS_Ethical_Hacking.pdf"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] mb-16 sm:mb-20 md:mb-24 leading-none tracking-tight">
        Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert, i) => (
          <FadeIn 
            key={i} 
            delay={i * 0.1} 
            className="group block w-full rounded-[30px] border border-[rgba(12,12,12,0.1)] bg-[#f5f5f5] p-6 sm:p-8 hover:bg-[#0C0C0C] transition-colors duration-500 ease-out cursor-pointer"
          >
            <a href={cert.file} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full justify-between gap-8">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-[#0C0C0C] group-hover:bg-white flex items-center justify-center transition-colors duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#0C0C0C] transition-colors duration-500">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <span className="text-[#0C0C0C]/60 group-hover:text-white/60 uppercase tracking-widest text-xs font-semibold transition-colors duration-500">
                  {cert.issuer}
                </span>
                <h3 className="text-[#0C0C0C] group-hover:text-white font-bold text-xl sm:text-2xl leading-tight transition-colors duration-500">
                  {cert.title}
                </h3>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
