import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
        <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
        <a href="#skills" className="hover:opacity-70 transition-opacity duration-200">Skills</a>
        <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
        <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden flex-1 flex flex-col justify-center">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 text-center">
            Hi, i&apos;m  Azim
          </h1>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            Aspiring Cloud & DevSecOps Engineer driven by building scalable web applications
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-[65%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <Magnet padding={150} strength={3}>
          <img
            src="/personal_avatar.png"
            alt="Mohammed Azim Ajaz Shaikh Portrait"
            className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] object-cover pointer-events-none rounded-full animate-float drop-shadow-2xl"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
