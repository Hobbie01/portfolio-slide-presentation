import React from 'react';

export interface SkillBadgeProps {
  icon: React.ReactNode;
  label: string;
  labelColor?: string;
  colorClass?: string; // tailwind class สำหรับ bg/text สี
  effect?: string;
}

export default function SkillBadge({ icon, label, labelColor = '', colorClass = '', effect = '' }: SkillBadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-2xl text-sm font-medium inline-flex items-center gap-1 transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-2xl ${colorClass} ${effect}`}
      style={{ willChange: 'transform' }}>
      {icon}
      <span className={labelColor}>{label}</span>
    </span>
  );
}
