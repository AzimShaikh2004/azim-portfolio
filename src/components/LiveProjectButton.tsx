import React from 'react';

export const LiveProjectButton = ({ className = '', href }: { className?: string; href?: string }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
    >
      {href && href.includes('github.com') ? 'View Source' : 'Live Project'}
    </Component>
  );
};
