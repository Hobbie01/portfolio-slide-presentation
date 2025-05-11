import React, { useRef, useEffect } from "react";

const STAR_COUNT = 120;
const SHOOTING_FREQUENCY = 0.02; // chance per frame

const BIG_STAR_COUNT = 5;
const BIG_STAR_COLORS = [
  'rgba(255,255,210,0.92)',   // ขาว-เหลือง
  'rgba(150,212,255,0.82)',   // ฟ้าอ่อน
  'rgba(245,182,255,0.88)',   // ชมพูม่วง
  'rgba(240,240,255,0.85)',   // สว่าง
];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Star = {
  x: number;
  y: number;
  r: number;
  tw: number;
  a: number;
  blink: number; // phase
};

type Shooting = {
  x: number;
  y: number;
  len: number;
  speed: number;
  life: number;
  maxLife: number;
  dx: number;
  dy: number;
};

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
  const shoot = useRef<Shooting[]>([]);
  const bigStars = useRef<any[]>([]);

  // Initialize stars
  const createStars = (w: number, h: number) => {
    const arr: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      arr.push({
        x: random(0, w),
        y: random(0, h),
        r: random(0.7, 1.6),
        tw: random(1, 2), // speed
        a: random(0.5, 1), // alpha
        blink: random(0, Math.PI * 2),
      });
    }
    return arr;
  };

  const genBigStars = (w: number, h: number) => {
    return Array.from({length: BIG_STAR_COUNT}).map(() => ({
      x: random(w*0.18, w*0.82),
      y: random(h*0.1, h*0.8),
      r: random(24, 57),
      color: BIG_STAR_COLORS[Math.floor(Math.random()*BIG_STAR_COLORS.length)],
      blur: random(44, 100)
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let w = window.innerWidth;
    let h = window.innerHeight;
    const ctx = canvas.getContext("2d")!;
    let running = true;

    const setSize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      stars.current = createStars(w, h);
      shoot.current = [];
      bigStars.current = genBigStars(w, h);
    };
    setSize();
    window.addEventListener("resize", setSize);

    function animate() {
      ctx.clearRect(0, 0, w, h);

      // วาด big stars ก่อน stars ปกติ
      for (const s of bigStars.current) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.blur;
        ctx.globalAlpha = 0.84;
        ctx.fillStyle = s.color;
        ctx.fill();
        ctx.restore();
      }

      // Draw twinkling stars
      for (const s of stars.current) {
        const tw = Math.sin(Date.now() * 0.001 * s.tw + s.blink) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * (0.7 + 0.5 * tw), 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255,255,255,${s.a * (0.7 + 0.5 * tw)})`;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = s.r * 6 * (0.7 + 0.5 * tw);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Random shooting star (เพิ่มความถี่และสุ่มมากขึ้น)
      if (Math.random() < SHOOTING_FREQUENCY * 1.1) {
        const angle = random(Math.PI * 0.15, Math.PI * 0.45); // shoot ทแยงเฉียง
        const x = random(0, w * 0.9);
        const y = random(h * 0.13, h * 0.4);
        shoot.current.push({
          x,
          y,
          len: random(150, 260),
          speed: random(23, 36),
          maxLife: random(16, 35),
          life: 0,
          dx: Math.cos(angle),
          dy: Math.sin(angle),
        });
      }

      // Draw and update shooting stars (แบบสี ๆ)
      shoot.current = shoot.current.filter(s => s.life < s.maxLife);
      for (const s of shoot.current) {
        const t = s.life / s.maxLife;
        ctx.save();
        ctx.globalAlpha = 1 - t*0.89;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len * s.dx, s.y + s.len * s.dy);
        const grad = ctx.createLinearGradient(s.x, s.y, s.x + s.len*s.dx, s.y + s.len*s.dy);
        grad.addColorStop(0, 'rgba(255,255,255,1)');
        grad.addColorStop(1, 'rgba(172,163,255,0.01)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.1 - 1.6 * t;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 17;
        ctx.stroke();
        ctx.restore();
        s.x += s.dx * s.speed * 0.66;
        s.y += s.dy * s.speed * 0.66;
        s.life++;
      }

      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 w-screen h-screen z-[5] select-none"
      style={{ opacity: 0.7, filter: "blur(0.2px)", background: 'transparent' }}
      aria-hidden="true"
    />
  );
}
