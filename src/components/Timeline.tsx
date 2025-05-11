import React from 'react';

export interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  org: string;
  desc: string;
  period: string;
  effect?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-10">
      {/* เส้นแกน timeline */}
      <div className="absolute left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400/50 to-green-800/50 rounded-full timeline-bar"></div>
      {items.map((item, idx) => (
        <div className="flex items-start mb-10 relative group" key={idx}>
          <span className={`shadow-lg bg-white/80 dark:bg-zinc-700/70 text-green-600 rounded-full p-2 ring-4 ring-green-200 dark:ring-green-900 ${item.effect || ''} relative z-10`}>
            {item.icon}
          </span>
          <div className="ml-6">
            <div className="font-bold text-lg">{item.org} <span className="text-xs text-gray-400 ml-2">{item.period}</span></div>
            <div className="text-gray-200 text-base">{item.title}<br />{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
