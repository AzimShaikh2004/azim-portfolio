import React from 'react';
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    number: "01",
    title: "Cloud & DevOps",
    description: "Linux, Docker, CI/CD Pipelines, Git & GitHub. Passionate about automating deployments and scaling applications securely."
  },
  {
    number: "02",
    title: "Full Stack Development",
    description: "React.js, Node.js, Express.js, REST APIs. Building responsive web applications with efficient frontend-backend integration."
  },
  {
    number: "03",
    title: "Backend & Databases",
    description: "Python, Java, MongoDB, MySQL, PostgreSQL. Designing robust backend architectures and managing relational/NoSQL databases."
  },
  {
    number: "04",
    title: "AI & Optimization",
    description: "AI-Assisted Development, Prompt Engineering. Leveraging modern AI tools to enhance productivity and problem-solving speed."
  },
  {
    number: "05",
    title: "Experience",
    description: "Full Stack Developer Intern at UniConverge Technologies Pvt. Ltd. (Jun 2025 - Jul 2025). Developed responsive apps, built backend APIs, and implemented RESTful services."
  }
];

export const ServicesSection = () => {
  return (
    <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
        Skills & Experience
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn 
            key={service.number} 
            delay={i * 0.1} 
            className="flex flex-col md:flex-row md:items-start border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-0"
          >
            <div className="md:w-1/3 mb-4 md:mb-0">
              <span className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none">
                {service.number}
              </span>
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-2 md:mb-4">
                {service.title}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
