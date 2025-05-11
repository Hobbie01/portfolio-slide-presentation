import React from 'react';
import ParticleBackground from "./ParticleBackground";
import StarBackground from "./StarBackground";

interface SlideSectionProps {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function SlideSection({ title, icon, children, className = '' }: SlideSectionProps) {
  return (
    <section className={`relative w-full max-w-3xl mx-auto px-4 py-8 ${className}`}>
      {/* Background layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ParticleBackground />
        <StarBackground />
      </div>
      <div className="relative z-10">
        {title && (
          <h2 className="font-bold text-lg text-violet-400 mb-2 flex items-center">
            {icon}{title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
