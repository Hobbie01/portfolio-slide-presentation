import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface SlideNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (idx: number) => void;
}

export default function SlideNavigation({ current, total, onPrev, onNext, onSelect }: SlideNavigationProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
      {/* ปุ่มเลื่อนซ้ายขวา overlay */}
      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 xl:-left-12 p-3 rounded-full bg-zinc-800/40 hover:bg-violet-600/70 shadow-lg text-white z-10 scale-110 focus:outline-none focus:ring focus:ring-violet-400 transition-all"
      >
        <FaChevronLeft className="text-3xl icon-bounce-hover" />
      </button>
      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 xl:-right-12 p-3 rounded-full bg-zinc-800/40 hover:bg-violet-600/70 shadow-lg text-white z-10 scale-110 focus:outline-none focus:ring focus:ring-violet-400 transition-all"
      >
        <FaChevronRight className="text-3xl icon-bounce-hover" />
      </button>
      <div className="flex justify-center mt-8 space-x-4 z-20">
        {Array.from({ length: total }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-5 h-5 rounded-full border-2 border-white ${
              current === idx ? "bg-white/50" : "bg-zinc-700/30"
            } transition-all duration-200`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
