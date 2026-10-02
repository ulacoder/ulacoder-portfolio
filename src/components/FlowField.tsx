"use client";

import { useEffect, useRef } from "react";

// Particle flow field (carried over from the first version of the site),
// tuned to live inside a card: card-coloured trails, accent sparks, cursor repulsion.
export default function FlowField({
  color = "#d4d4d8",
  accent = "#ff6a2b",
  bg = "17,17,19",
  particleCount = 520,
  trailOpacity = 0.12,
  speed = 0.8,
}: {
  color?: string;
  accent?: string;
  bg?: string;
  particleCount?: number;
  trailOpacity?: number;
  speed?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    const mouse = { x: -1e4, y: -1e4 };

    type P = { x: number; y: number; vx: number; vy: number; age: number; life: number; hot: boolean };
    let ps: P[] = [];
    const spawn = (): P => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: 0,
      vy: 0,
      age: 0,
      life: Math.random() * 200 + 100,
      hot: Math.random() < 0.08,
    });

    const init = () => {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = `rgb(${bg})`;
      ctx.fillRect(0, 0, w, h);
      ps = Array.from({ length: particleCount }, spawn);
    };

    const step = () => {
      ctx.globalAlpha = 1;
      ctx.fillStyle = `rgba(${bg},${trailOpacity})`;
      ctx.fillRect(0, 0, w, h);
      for (const p of ps) {
        const a = (Math.cos(p.x * 0.005) + Math.sin(p.y * 0.005)) * Math.PI;
        p.vx += Math.cos(a) * 0.2 * speed;
        p.vy += Math.sin(a) * 0.2 * speed;
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 140) {
          const f = (140 - d) / 140;
          p.vx -= dx * f * 0.3;
          p.vy -= dy * f * 0.3;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.95;
        p.vy *= 0.95;
        if (++p.age > p.life) Object.assign(p, spawn());
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.globalAlpha = 1 - Math.abs(p.age / p.life - 0.5) * 2;
        ctx.fillStyle = p.hot ? accent : color;
        ctx.fillRect(p.x, p.y, 1.5, 1.5);
      }
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = mouse.y = -1e4;
    };

    init();
    if (reduce) {
      for (let i = 0; i < 120; i++) {
        for (const p of ps) {
          p.x += Math.cos((Math.cos(p.x * 0.005) + Math.sin(p.y * 0.005)) * Math.PI);
          p.y += Math.sin((Math.cos(p.x * 0.005) + Math.sin(p.y * 0.005)) * Math.PI);
          ctx.globalAlpha = 0.25;
          ctx.fillStyle = p.hot ? accent : color;
          ctx.fillRect(p.x, p.y, 1, 1);
        }
      }
    } else {
      step();
    }

    const ro = new ResizeObserver(init);
    ro.observe(wrap);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [color, accent, bg, particleCount, trailOpacity, speed]);

  return (
    <div ref={wrapRef} className="absolute inset-0">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
