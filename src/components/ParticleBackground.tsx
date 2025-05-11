import React, { useRef, useEffect } from 'react';

const PARTICLE_COUNT = 55;
const LINK_DIST = 120;
const COLORS = [
  'rgba(138, 115, 255, 0.8)',
  'rgba(0, 204, 255, 0.8)',
  'rgba(255, 115, 179, 0.7)',
  'rgba(113, 249, 187, 0.7)',
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;
    let anim = true;

    function random(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    // init particle
    particles.current = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: random(0, w),
      y: random(0, h),
      vx: random(-0.4, 0.4),
      vy: random(-0.3, 0.4),
      r: random(2.1, 3.8),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    // resize handler
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      if (particles.current.length < PARTICLE_COUNT) {
        for (let i = particles.current.length; i < PARTICLE_COUNT; ++i) {
          particles.current.push({
            x: random(0, w),
            y: random(0, h),
            vx: random(-0.4, 0.4),
            vy: random(-0.3, 0.4),
            r: random(2.1, 3.8),
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          });
        }
      }
    };
    window.addEventListener('resize', onResize);

    function draw() {
      ctx.clearRect(0, 0, w, h);
      // draw links
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (d < LINK_DIST) {
            ctx.save();
            ctx.globalAlpha = (1 - d / LINK_DIST) * 0.30;
            ctx.strokeStyle = '#a78bfa';
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineWidth = 1.2;
            ctx.shadowBlur = 7;
            ctx.shadowColor = '#c4b5fd';
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      // draw particles
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = 0.92;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function step() {
      for (const p of particles.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w+10;
        if (p.x > w+10) p.x = -10;
        if (p.y < -10) p.y = h+10;
        if (p.y > h+10) p.y = -10;
      }
      draw();
      if (anim) requestAnimationFrame(step);
    }
    step();
    return () => {
      anim = false;
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen z-[1] select-none pointer-events-none animate-fadein"
      aria-hidden="true"
      style={{ opacity: 1, background: 'transparent' }}
    />
  );
}
